import { IpcRenderer } from 'electron' // this is just an interface
declare var __non_webpack_require__: (id: string) => any
const electron = __non_webpack_require__('electron')

export const ipcRenderer: IpcRenderer = electron.ipcRenderer