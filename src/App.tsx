import React, { useEffect, useState } from 'react';
import './App.css';
import { ipcRenderer } from './appRuntime'

const App: React.FC = () => {
  
  const [msg, setMsg] = useState('')

  const handler = (event: any, data: string) => {
    setMsg(data)
  }

  useEffect(() => {
    ipcRenderer.on('TICK', handler);
    return () => {ipcRenderer.removeListener('TICK', handler)}
  })

  return (
    <div className="App">
      <header className="App-header">
        <h1>{msg}</h1>
      </header>
    </div>
  );
}

export default App;
