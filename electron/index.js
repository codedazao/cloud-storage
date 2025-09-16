import { app, BrowserWindow, dialog, ipcMain, nativeImage, Tray, Menu } from 'electron';
import { fileURLToPath } from 'url';
import path from 'path';
import fs from 'node:fs';
import { platform } from 'node:os';
import { DataType, open, define } from 'ffi-rs';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const loadlib = (libname) => {
  const dynamicLib = platform() === 'win32' ? `./${libname}.dll` : './libsum.so';
  open({
    library: libname,
    path: dynamicLib,
  });
  const res = define({
    winMessageBox: {
      library: libname,
      retType: DataType.Void,
      paramsType: [DataType.String, DataType.String],
    },
  });
  return res;
};
let res = loadlib('cloud-stroage-native');
let loginwin;
let mainwin;
ipcMain.on('popDiaglog', (_, diginfo) => {
  const { content, title, type, isNativeDiaglog } = diginfo;
  if (isNativeDiaglog === false) {
    dialog.showMessageBox({
      type,
      title,
      message: content,
      buttons: ['确定'],
    });
  } else {
    res.winMessageBox([content, title]);
  }
});

ipcMain.handle('readFileSync', (_, url, encoding = 'utf8') => {
  return fs.readFileSync(path.join(__dirname, url), {
    encoding,
  });
});

ipcMain.handle('writeFileSync', (_, url, data, encoding = 'utf8') => {
  return fs.writeFileSync(path.join(__dirname, url), data, {
    encoding,
  });
});

ipcMain.handle('existsSync', (_, url) => {
  return fs.existsSync(path.join(__dirname, url));
});

const createIndexWindow = () => {
  const win = new BrowserWindow({
    width: 888,
    height: 537,
    show: false, //解决初始化白屏问题
    resizable: false, // 禁止调整窗口大小
    frame: false, // 可选，取消窗口自带的关闭、最小化等按钮
    webPreferences: {
      preload: path.join(__dirname, '../dist/preload.mjs'),
      webSecurity: false,
    },
  });
  win.loadURL(process.env['VITE_DEV_SERVER_URL'] + 'index');
  win.setMenu(null);
  win.setMaximizable(true);
  win.setResizable(true);
  if (process.env.NODE_ENV === 'development') {
    win.webContents.openDevTools();
  }
  win.once('ready-to-show', () => {
    win.show();
  });
  win.on('close', (event) => {
    event.preventDefault();
    win.hide();
  });
  mainwin = win;
};
ipcMain.handle('closelogin', () => {
  loginwin.close();
  createIndexWindow();
});
const createMainWindow = () => {
  const win = new BrowserWindow({
    width: 888,
    height: 537,
    show: false, //解决初始化白屏问题
    resizable: true, // 禁止调整窗口大小
    frame: false, // 可选，取消窗口自带的关闭、最小化等按钮
    webPreferences: {
      preload: path.join(__dirname, '../dist/preload.mjs'),
      webSecurity: false,
    },
  });
  // eslint-disable-next-line no-undef
  win.loadURL(process.env['VITE_DEV_SERVER_URL'] + 'auth/login');
  win.setMenu(null);
  win.setMaximizable(false);
  win.setResizable(false);
  if (process.env.NODE_ENV === 'development') {
    win.webContents.openDevTools();
  }
  win.once('ready-to-show', () => {
    win.show();
  });

  loginwin = win;
};
app.whenReady().then(() => {
  createMainWindow();
  //设置托盘图标
  const trayicon = nativeImage.createFromPath(path.join(__dirname, 'metaso.cn-favicon.ico'));
  const tray = Tray(trayicon);
  tray.on('click', () => {
    if (mainwin !== null) {
      if (mainwin.isVisible()) {
        mainwin.hide();
      } else {
        mainwin.show();
      }
    }
  });
  const menu = Menu.buildFromTemplate([
    {
      label: '打开主界面',
      click: () => {
        if (mainwin) {
          mainwin.show();
        }
      },
    },
    {
      label: '退出',
      click: () => {
        app.exit();
      },
    },
  ]);
  tray.setContextMenu(menu);
  tray.setToolTip('大枣云盘');
});
