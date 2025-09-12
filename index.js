import { app, BrowserWindow, ipcMain } from 'electron';
import { fileURLToPath } from 'url';
import path from 'path';
import { platform } from 'os';
import { DataType, define, load, open } from 'ffi-rs';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
console.log(path.join(__dirname, 'ipc/preload.js'));

function loadNative() {
  const dynamicLib = platform() === 'win32' ? './cloud-stroage-native.dll' : './libsum.so';
  console.log(dynamicLib);
  open({
    library: 'cloud-stroage-native',
    path: dynamicLib,
  });
  load({
    library: 'cloud-stroage-native',
    funcName: 'winMessageBox',
    retType: DataType.Void,
    paramsType: [DataType.String, DataType.String],
    paramsValue: ['test', 'test'], // 实际参数值
  });
  const nativelib = define({
    winMessageBox: {
      library: 'cloud-stroage-native',
      retType: DataType.Void,
      paramsType: [DataType.String, DataType.String],
    },
  });
  nativelib.winMessageBox('test', 'test');
  close('cloud-stroage-native');
}
ipcMain.on('popDiaglog', (_, diginfo) => {
  const { content, title } = diginfo;
  console.log(content, title);
  loadNative();
});

const createMainWindow = () => {
  const win = new BrowserWindow({
    width: 888,
    height: 537,
    show: false, //解决初始化白屏问题
    resizable: false, // 禁止调整窗口大小
    frame: false, // 可选，取消窗口自带的关闭、最小化等按钮
    webPreferences: {
      preload: path.join(__dirname, 'preload.mjs'),
      webSecurity: false,
    },
  });
  // eslint-disable-next-line no-undef
  win.loadURL(process.env['VITE_DEV_SERVER_URL']);
  win.setMenu(null);
  win.setMaximizable(false);
  win.setResizable(false);
  if (process.env.NODE_ENV === 'development') {
    win.webContents.openDevTools();
  }
  win.once('ready-to-show', () => {
    win.show();
  });
};
app.whenReady().then(() => {
  createMainWindow();
});
