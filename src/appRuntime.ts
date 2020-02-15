import { IpcRenderer } from 'electron'; // this is just an interface
export const ipcRenderer: IpcRenderer = (window as any).ipcRenderer;