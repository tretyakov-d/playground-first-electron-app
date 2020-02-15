import React, { useEffect, useState } from 'react';
import './App.css';
import appRuntime from './appRuntime';

const App: React.FC = () => {
  
  const [msg, setMsg] = useState('')
  
  useEffect(() => appRuntime.subscribe('TICK', data => {
    setMsg(data);
  }))

  return (
    <div className="App">
      <header className="App-header">
        <h1>{msg}</h1>
      </header>
    </div>
  );
}

export default App;
