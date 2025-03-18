import React from 'react';
import { Link } from 'react-router-dom';

const HomePage = () => {
  return (
    <>
      <h1>React Examples Tutorial</h1>
      <p>
        Bienvenido a <strong>React Examples Tutorial</strong>, un proyecto diseñado para enseñarte conceptos clave de React a través de ejemplos prácticos.
      </p>
      <p>Explora las diferentes categorías para aprender:</p>
      <ul>
        <li>
          <Link to="/hooks">
            Ejemplos de Hooks
          </Link>
        </li>
        <li>
          <Link to="/concepts">
            Conceptos básicos de React
          </Link>
        </li>
      </ul>
      <p>
        Cada sección contiene varios ejemplos detallados con explicaciones para que aprendas paso a paso. ¡Elige una categoría para empezar!
      </p>
    </>
  );
};

export default HomePage;
