import { useState, useEffect } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import Lista from './assets/Lista';
import './App.css';
import Cadastro from './assets/Cadastro';

function App() {
  const [count, setCount] = useState(0);
  const [clicou, setClicou] = useState(false);
  const [cadastro, setCadastro] = useState(false)

  useEffect(() => {
    if (clicou == true) setCadastro(true);
    return() => {
      setClicou(false);
    };
  
  }, [clicou]);

  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <Lista/>
      <input type="button" value="Novo Produto"  onClick={() => setClicou(true)} />
      {
        cadastro == true ? <Cadastro/> : <div></div>
      }
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
