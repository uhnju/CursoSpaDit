import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import HomePage from './pages/deepseek/HomePage';
import EjemplosSintaxisJSX from './pages/deepseek/EjemplosSintaxisJSX';
import EjemplosProps from './pages/deepseek/EjemplosProps';
import EjemplosUseState from './pages/deepseek/EjemplosUseState';
import EjemplosUseEffect from './pages/deepseek/EjemplosUseEffect';
import EjemplosUseRef from './pages/deepseek/EjemplosUseRef';
import EjemplosUseContext from './pages/deepseek/EjemplosUseContext';
import EjemplosUseReducer from './pages/deepseek/EjemplosUseReducer';
import EjemplosEventos from './pages/deepseek/EjemplosEventos';
import EjemplosRenderizadoCondicional from './pages/deepseek/EjemplosRenderizadoCondicional';
import EjemplosRenderizadoListas from './pages/deepseek/EjemplosRenderizadoListas';
import EjemplosApiRequests from './pages/deepseek/EjemplosApiRequests';
import EjemplosStorage from './pages/deepseek/EjemplosStorage';
// import EjemplosRouter from './pages/deepseek/EjemplosRouter';
// import EjemplosUseParams from './pages/deepseek/EjemplosUseParams';
import EjemplosTSX from './pages/deepseek/EjemplosTSX';


import './App.css'

const Curso = () => {
  return (
    <Router>
        <h1>📘 Ejemplos de React</h1>

{/* Menú de navegación */}
<nav>
  <Link to="/">🏠 Inicio</Link>
  <Link to="/EjemplosSintaxisJSX" >📜 JSX</Link>
  <Link to="/EjemplosProps" >📦 Props</Link>
  <Link to="/EjemplosUseState" >🔄 useState</Link>
  <Link to="/EjemplosUseEffect" >⏳ useEffect</Link>
  <Link to="/EjemplosUseRef" >🔍 useRef</Link>
  <Link to="/EjemplosUseContext" >🌍 useContext</Link>
  <Link to="/EjemplosUseReducer" >⚖️ useReducer</Link>
  <Link to="/EjemplosEventos" >🎭 Eventos</Link>
  <Link to="/EjemplosRenderizadoCondicional" >🤔 Condicional</Link>
  <Link to="/EjemplosRenderizadoListas" >📋 Listas</Link>
  <Link to="/EjemplosApiRequests">🔄 API Requests</Link>
  <Link to="/EjemplosStorage">🔄 Storage</Link>
  {/* <Link to="/EjemplosRouter" >🚏 React Router</Link> */}
  {/* <Link to="/EjemplosUseParams">🔄 UseParams</Link>u */}
  <Link to="/EjemplosTSX">🔄 TSX</Link>
</nav>

{/* Definición de rutas */}
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/EjemplosSintaxisJSX" element={<EjemplosSintaxisJSX />} />
          <Route path="/EjemplosProps" element={<EjemplosProps />} />
          <Route path="/EjemplosUseState" element={<EjemplosUseState />} />
          <Route path="/EjemplosUseEffect" element={<EjemplosUseEffect />} />
          <Route path="/EjemplosUseRef" element={<EjemplosUseRef />} />
          <Route path="/EjemplosUseContext" element={<EjemplosUseContext />} />
          <Route path="/EjemplosUseReducer" element={<EjemplosUseReducer />} />
          <Route path="/EjemplosEventos" element={<EjemplosEventos />} />
          <Route path="/EjemplosRenderizadoCondicional" element={<EjemplosRenderizadoCondicional />} />
          <Route path="/EjemplosRenderizadoListas" element={<EjemplosRenderizadoListas />} />
          <Route path="/EjemplosApiRequests" element={<EjemplosApiRequests />} />
          <Route path="/EjemplosStorage" element={<EjemplosStorage />} />
          {/* <Route path="/EjemplosRouter" element={<EjemplosRouter />} /> */}
          {/* <Route path="/EjemplosUseParams" element={<EjemplosUseParams />} /> */}
          <Route path="/EjemplosTSX" element={<EjemplosTSX />} />
        </Routes>
    </Router>
  );
};

export default Curso;
