import { app, BrowserWindow } from 'electron';

const createMainWindow = () => {
  const win = new BrowserWindow({
    width: 888,
    height: 537,
    show: false, //解决初始化白屏问题
    resizable: false, // 禁止调整窗口大小
    frame: false, // 可选，取消窗口自带的关闭、最小化等按钮
  });
  // eslint-disable-next-line no-undef
  win.loadURL(process.env['VITE_DEV_SERVER_URL']);
  win.setMenu(null);
  win.once('ready-to-show', () => {
    win.show();
  });
};
app.whenReady().then(() => {
  createMainWindow();
});
