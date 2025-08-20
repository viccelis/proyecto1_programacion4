import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1>Contador</h1>
      <div className='contenedor'>
        
        <div className="card">
          <button onClick={() => setCount((count) => count + 1)}>
            Mas 1
          </button>
        </div>

        <div className="card">
          <button onClick={() => setCount((count) => count - 1)}>
            Menos 1
          </button>
        </div>

        <div className="card">
          <button onClick={() => setCount((count) => count = 0)}>
            Reset
          </button>
        </div>
      </div>
      <div id='Counter' className='Counter'>
        Count is {count}
      </div>
    </>
  )
}

export default App
