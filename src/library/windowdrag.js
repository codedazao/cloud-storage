//解决electron窗口拖动问题
import { ref } from 'vue';

let isKeyDown = ref(false);
let disatesX = ref(0);
let disatesY = ref(0);

export const mousedown = (e) => {
  isKeyDown.value = true;
  disatesX.value = e.x;
  disatesY.value = e.y;

  document.onmousemove = (ev) => {
    if (isKeyDown.value) {
      const x = ev.screenX - disatesX.value;
      const y = ev.screenY - disatesY.value;
      //给主进程传递坐标
      tools.ipcInvoke('custom-absorption', x, y);
    }
  };
  document.onmouseup = () => {
    isKeyDown.value = false;
  };
};
