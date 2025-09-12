import { contextBridge, ipcRenderer } from 'electron';

contextBridge.exposeInMainWorld('tools', {
  ipcSend: function (mes, ...args) {
    ipcRenderer.send(mes, ...args);
  },
  ipcInvoke: function (mes, ...args) {
    return ipcRenderer.invoke(mes, ...args);
  },
});
