import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

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
      <h1>Box model y Selectores SCC en el diseño HTML</h1>
      <div>
       <h3>Integrantes: </h3>
       <h4>Henry Armando Delgado Martínez</h4>
       <h4>Santiago Núñez Viasus</h4>
        <p>
          Enlace al proyecto <br />
          <a href="inicio.html">Click aquí para ir al proyecto</a>
        </p>
      </div>
    
    </>
  )
}

export default App
