 React Counter App (Vite + React)

Este es un proyecto simple de **contador** desarrollado con [React](https://react.dev/) y [Vite](https://vitejs.dev/). La aplicación permite incrementar, decrementar o reiniciar un contador usando botones interactivos.



 Tecnologías utilizadas

  React
  Vite
  JavaScript (ES6+)
  CSS



Funcionalidades

Incrementar el contador en 1

Decrementar el contador en 1

Resetear el contador a 0


const [count, setCount] = useState(0);

<button onClick={() => setCount(count + 1)}>+1</button>
<button onClick={() => setCount(count - 1)}>-1</button>
<button onClick={() => setCount(0)}>Reset</button>



Estructura del proyecto

contador-react/
├── index.html
├── package.json
├── vite.config.js
├── public/
│   └── vite.svg
└── src/
    ├── App.jsx
    ├── App.css
    ├── main.jsx
    ├── index.css
    └── assets/
        └── react.svg
        
