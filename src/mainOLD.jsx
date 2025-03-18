import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App'
import Curso from './Curso'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <App /> */}
    <Curso />
  </StrictMode>,
)
