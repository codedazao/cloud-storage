<script setup>
import { onBeforeUnmount, ref } from 'vue';
import GoogleInput from '@/components/GoogleInput.vue';
import CorrugationButton from '@/components/CorrugationButton.vue';

import { login, getUserDeatil } from '@/view/auth/api/loginApi';

const backMap = ['01', '02', '03', '04', '05', '06', '07', '08'];
// 获取0-7的整数随机数
const backIndex = () => {
  return Math.floor(Math.random() * backMap.length);
};
const currentIndex = ref(backIndex());

const timer = setInterval(() => {
  currentIndex.value++;
  if (currentIndex.value >= backMap.length) {
    currentIndex.value = 0;
  }
}, 5000);

onBeforeUnmount(() => {
  clearInterval(timer);
});

const username = ref('');
const password = ref('');

const submit = async () => {
  const loginres = await login(username.value, password.value);
  if (loginres.code === 200) {
    const { userId, time, token } = loginres.data;
    const userRes = await getUserDeatil(1, {
      'x-id': userId,
      'x-time': time,
      'x-token': token,
    });
  }
};
</script>

<template>
  <div class="container">
    <div class="login-window">
      <div class="background">
        <template v-for="(item, index) in backMap">
          <div
            v-show="index === currentIndex"
            class="back-item"
            :style="`background-image: url(/static/auth/login/background/${item}.svg)`"
          ></div>
        </template>
      </div>
      <div class="login-box">
        <button style="position: absolute; top: 10px; right: 30px">-</button>
        <div class="title">欢迎登录！慕课网</div>
        <div class="desc">Electron+Vue3+对象存储课程</div>
        <div class="form">
          <div class="input-box">
            <div class="input-item">
              <GoogleInput v-model="username" label="用户名" />
            </div>
            <div class="input-item">
              <GoogleInput v-model="password" label="密码" type="password" />
            </div>
          </div>
          <div class="submit no-drag">
            <CorrugationButton @click="submit">登录</CorrugationButton>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.no-drag {
  -webkit-app-region: no-drag;
}
.container {
  background: transparent;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}
.login-window {
  width: 100%;
  height: 100%;
  background-color: #fff;
  border-radius: 10px;
  overflow: hidden;
  display: flex;

  -webkit-box-shadow: 0 1px 12px rgba(0, 0, 0, 0.1);
  box-shadow: 0 1px 12px rgba(0, 0, 0, 0.1);

  .background {
    width: 50%;
    height: 100%;
    flex-shrink: 0;
    .back-item {
      width: 100%;
      height: 100%;
      background-color: rgb(241, 245, 255);
      background-repeat: no-repeat;
      background-size: contain;
      background-position: 50% 50%;
    }
  }

  .login-box {
    background-color: #fff;
    width: 50%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: 0px 40px;

    .title {
      font-size: 30px;
      color: var(--primary);
      font-weight: 600;
    }

    .desc {
      margin-top: 25px;
      font-size: 20px;
      color: var(--placeholder-text);
    }
    .form {
      margin-top: 20px;
      .input-box {
        -webkit-app-region: no-drag;
        .input-item {
          margin: 25px 0;
        }
      }
      .submit {
        margin-top: 40px;
      }
    }
  }
}
.device-conFrame {
  width: 100%;
  height: 100%;
  .device-type-list {
    width: 100%;
    height: calc(100% - 58px);
    display: flex;
    align-items: center;
    justify-content: center;
    .device-type {
      transition: all 0.2s;
      margin: 0 30px;
      border: 1px solid rgba(0, 0, 0, 0.1);
      width: 220px;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      padding: 40px 10px;
      border-radius: 5px;
      cursor: pointer;
      .device-type-icon {
        transition: all 0.2s;
        opacity: 0.4;
        width: 100px;
        height: 100px;
        background-size: contain;
        background-position: center center;
      }
      .device-type-title {
        font-size: 18px;
        font-weight: 600;
        color: var(--primary-text);
        margin: 20px 0 0;
      }
      .device-type-subtitle {
        font-size: 14px;
        color: var(--placeholder-text);
        line-height: 1.4;
        margin-top: 5px;
      }
      .device-type-desc {
        font-size: 14px;
        color: var(--placeholder-text);
        line-height: 1.4;
        margin-top: 10px;
      }
    }
    .device-type:hover,
    .active {
      border: 2px solid var(--primary);
      .device-type-icon {
        opacity: 1;
      }
    }
  }
  .submit {
    width: 90%;
    display: flex;
    justify-content: right;
  }
}
</style>
