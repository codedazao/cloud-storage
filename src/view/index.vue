<script setup>
import { TinyContainer, TinyButton, TinyTooltip } from '@opentiny/vue';
import { IconApplication } from '@opentiny/vue-icon';
import { ref } from 'vue';
import { useDark, useToggle } from '@vueuse/core';
const isDark = useDark();

const toggleDark = useToggle(isDark);
const changeDark = () => toggleDark();
const TinyAppliction = IconApplication();
const buttonType = ref({
  homeIndex: 'info',
  people: 'text',
  cloud: 'text',
  knowledgebase: 'text',
  more: 'text',
});
const nowactive = ref('首页');
</script>

<template>
  <div class="container">
    <tiny-container pattern="default" header-height="64px" aside-width="78px">
      <template #header>
        <div class="header">
          <div class="text">{{ nowactive }}</div>
          <!-- <tiny-button type="primary" @click="changeDark" class="no-drag"> 主要按钮 </tiny-button> -->
        </div>
      </template>
      <template #aside>
        <div class="aside">
          <div class="buttongrouptop no-drag">
            <tiny-tooltip class="item" effect="dark" content="首页" placement="right">
              <tiny-button
                reset-time="1"
                :type="buttonType.homeIndex"
                :icon="TinyAppliction"
              ></tiny-button>
            </tiny-tooltip>
            <tiny-tooltip class="item" effect="dark" content="人员" placement="right">
              <tiny-button
                reset-time="1"
                :type="buttonType.people"
                :icon="TinyAppliction"
              ></tiny-button>
            </tiny-tooltip>
            <tiny-tooltip class="item" effect="dark" content="云盘" placement="right">
              <tiny-button
                reset-time="1"
                :type="buttonType.cloud"
                :icon="TinyAppliction"
              ></tiny-button>
            </tiny-tooltip>
            <tiny-tooltip class="item" effect="dark" content="知识库" placement="right">
              <tiny-button
                reset-time="1"
                :type="buttonType.knowledgebase"
                :icon="TinyAppliction"
              ></tiny-button>
            </tiny-tooltip>
            <tiny-tooltip class="item" effect="dark" content="更多" placement="right">
              <tiny-button
                reset-time="1"
                :type="buttonType.more"
                :icon="TinyAppliction"
              ></tiny-button>
            </tiny-tooltip>
          </div>
          <div class="placeholder"></div>
          <div class="buttongroupbottom"></div>
        </div>
      </template>
      <div class="main no-drag">
        <router-view></router-view>
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
  justify-content: center;
  .text {
    text-align: center;
    line-height: 64px;
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
}
</style>
