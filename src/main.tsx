import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App'
import Curso from './Curso'

const rootElement = document.getElementById("root");

if (rootElement) {
  createRoot(rootElement).render(
    <StrictMode>
      {/* <App /> */}
      <Curso />
    </StrictMode>,
  )
}

