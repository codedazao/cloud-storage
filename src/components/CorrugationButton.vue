<template>
  <button
    class="corrugation-button"
    :class="{ noDisabled: !disabled, disable: disabled }"
    @mousedown="mousedown"
    type="button"
    :style="style"
    v-bind="$attrs"
  >
    <slot></slot>
  </button>
</template>

<script setup>
// 接收父组件参数
import { computed, ref, defineProps, defineEmits, watch } from 'vue';

const props = defineProps({
  disabled: {
    type: Boolean,
    default: false,
  },
  background: {
    type: String,
    default: 'var(--primary)',
  },
  borderRadius: {
    type: String,
    default: '999px',
  },
  color: {
    type: String,
    default: '#fff',
  },
  width: {
    type: String,
    default: '100%',
  },
  height: {
    type: String,
    default: '54px',
  },
});

const emits = defineEmits(['click']);

const clientX = ref(0);
const clientY = ref(0);
const left = ref(0);
const top = ref(0);
const disabled = ref(props.disabled);

watch(
  () => props.disabled,
  (value) => {
    disabled.value = value;
  },
);

const mousedown = (element) => {
  const eData = element.target.getBoundingClientRect();
  left.value = eData.left;
  top.value = eData.top;
  clientX.value = element.clientX;
  clientY.value = element.clientY;
  if (!disabled.value) {
    emits('click');
  }
};

const style = computed(() => {
  let style = '';
  style += `--rapid-background-color:${props.background};`;
  style += `--rapid-color:${props.color};`;
  style += `--rapid-height:${props.height};`;
  style += `--rapid-width:${props.width};`;
  style += `--rapid-border-radius:${props.borderRadius};`;
  if (clientX.value > 0) {
    style += `--rapid-x:${clientX.value - left.value}px;`;
  }
  if (clientY.value > 0) {
    style += `--rapid-y:${clientY.value - top.value}px;`;
  }
  return style;
});
</script>

<style lang="scss" scoped>
.corrugation-button {
  pointer-events: auto;
  display: inline-block;
  vertical-align: top;
  cursor: pointer;
  position: relative;
  outline: 0;
  border: none;
  width: var(--rapid-width, 100%);
  height: var(--rapid-height, 100%);
  overflow: hidden;
  background-color: var(--rapid-background-color, var(--primary));
  color: var(--rapid-color, #fff);
  border-radius: var(--rapid-border-radius, 0);
  font-size: 16px;
}

.corrugation-button:after {
  cursor: pointer;
  pointer-events: none;
  content: '';
  display: block;
  position: absolute;
  width: 200%;
  height: 100%;
  left: var(--rapid-x, 0);
  top: var(--rapid-y, 0);
  background-image: radial-gradient(circle, #fff 10%, transparent 10.01%);
  background-repeat: no-repeat;
  background-position: 50%;
  transform: translate(-50%, -50%) scale(10);
  opacity: 0;
  transition:
    transform 0.8s,
    opacity 0.8s;
}

.disable {
  opacity: 0.6;
}
.noDisabled:active:after {
  cursor: pointer;
  transform: translate(-50%, -50%) scale(0);
  opacity: 0.3;
  transition: 0s;
}
</style>
