<script setup>
import { TinyContainer, TinyButton, TinyTooltip } from '@opentiny/vue';
import {
  IconApplication,
  IconDelegatedProcessing,
  IconCloudUpload,
  IconFiletext,
  IconMore,
  IconClose,
  IconMinus,
  IconFullscreenRight,
} from '@opentiny/vue-icon';
import router from '@/router';
import { ref } from 'vue';
import { useDark, useToggle } from '@vueuse/core';
import { RouterView } from 'vue-router';
const isDark = useDark();

const toggleDark = useToggle(isDark);
const changeDark = () => toggleDark();
const TinyAppliction = IconApplication();
const TinyPeople = IconDelegatedProcessing();
const TinyCloud = IconCloudUpload();
const TinyFileText = IconFiletext();
const TinyMore = IconMore();
const TinyClose = IconClose();
const TinyMin = IconMinus();
const TinyFullScreen = IconFullscreenRight();
const buttonType = ref({
  home: 'info',
  people: 'text',
  cloud: 'text',
  knowledgebase: 'text',
  more: 'text',
});

const chineselang = {
  home: '首页',
  people: '人员',
  cloud: '云盘',
  knowledgebase: '知识库',
  more: '更多',
};
const currentrouter = ref('首页');

const changerouter = (routername) => {
  router.push('/index/' + routername);
  const allKeys = Object.keys(buttonType.value);
  currentrouter.value = chineselang[routername];
  allKeys.forEach((key) => {
    buttonType.value[key] = key === routername ? 'info' : 'text';
  });
};

const windowClose = () => {
  tools.ipcInvoke('windowClose');
};

const windowMin = () => {
  tools.ipcInvoke('windowMin');
};

const windowFullScreen = () => {
  tools.ipcInvoke('windowFullScreen');
};
</script>

<template>
  <div class="container">
    <tiny-container pattern="default" header-height="50px" aside-width="55px">
      <template #header>
        <div class="header">
          <div></div>
          <div class="text">{{ currentrouter }}</div>
          <div class="windowControl no-drag">
            <tiny-button
              @click="windowClose"
              reset-time="'1'"
              type="text"
              :icon="TinyClose"
            ></tiny-button>
            <tiny-button
              @click="windowFullScreen"
              reset-time="'1'"
              type="text"
              :icon="TinyFullScreen"
            ></tiny-button>
            <tiny-button
              @click="windowMin"
              reset-time="'1'"
              type="text"
              :icon="TinyMin"
            ></tiny-button>
          </div>
        </div>
      </template>
      <template #aside>
        <div class="aside">
          <div class="buttongrouptop no-drag">
            <tiny-tooltip class="item" effect="dark" content="首页" placement="right">
              <tiny-button
                reset-time="'1'"
                :type="buttonType.home"
                :icon="TinyAppliction"
                @click="changerouter('home')"
              ></tiny-button>
            </tiny-tooltip>
            <tiny-tooltip class="item" effect="dark" content="人员" placement="right">
              <tiny-button
                reset-time="'1'"
                :type="buttonType.people"
                :icon="TinyPeople"
                @click="changerouter('people')"
              ></tiny-button>
            </tiny-tooltip>
            <tiny-tooltip class="item" effect="dark" content="云盘" placement="right">
              <tiny-button
                reset-time="'1'"
                :type="buttonType.cloud"
                :icon="TinyCloud"
                @click="changerouter('cloud')"
              ></tiny-button>
            </tiny-tooltip>
            <tiny-tooltip class="item" effect="dark" content="知识库" placement="right">
              <tiny-button
                reset-time="'1'"
                :type="buttonType.knowledgebase"
                :icon="TinyFileText"
                @click="changerouter('knowledgebase')"
              ></tiny-button>
            </tiny-tooltip>
            <tiny-tooltip class="item" effect="dark" content="更多" placement="right">
              <tiny-button
                reset-time="'1'"
                :type="buttonType.more"
                :icon="TinyMore"
                @click="changerouter('more')"
              ></tiny-button>
            </tiny-tooltip>
          </div>
          <div class="placeholder"></div>
          <div class="buttongroupbottom"></div>
        </div>
      </template>
      <div class="main no-drag">
        <router-view />
      </div>
    </tiny-container>
  </div>
</template>

<style scoped lang="scss">
.no-drag {
  -webkit-app-region: no-drag;
}
.container {
  width: 100%;
  height: 100%;
}
.header {
  background-color: var(--header-background);
  color: var(--text-color);
  display: flex;
  align-items: center;
  justify-content: space-between;

  .text {
    text-align: center;
    line-height: 50px;
  }
  .windowControl {
    position: relative;
    right: 20px;
    display: flex;
    flex-direction: row-reverse;
  }
}

.aside {
  background-color: var(--header-background);
  height: 100%;
  color: var(--text-color);
  display: flex;
  flex-direction: column;
  align-items: center;
  .buttongrouptop {
    padding-top: 30px;
    display: flex;
    height: auto;
    width: auto;
    flex-direction: column;
    gap: 15px;
    .item {
      display: inline;
      margin-left: 0;
    }
  }
  .placeholder {
    flex: 1;
    background-color: var(--header-background);
  }
  .buttongroupbottom {
    background-color: var(--header-background);
    height: auto;
  }
}

.main {
  background-color: var(--main-background);
  color: var(--text-color);
  width: 100%;
  height: 100%;
  user-select: none;
}
</style>
