import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
// import App from './App'
import Curso from './Curso'
// import EjemplosRouter from './pages/curso/EjemplosRouter'
// import "./App.css";

const rootElement = document.getElementById("root");

if (rootElement) {
  createRoot(rootElement).render(
    <StrictMode>
      {/* <App /> */}
      <Curso />
      {/* <EjemplosRouter /> */}
    </StrictMode>,
  )
}

