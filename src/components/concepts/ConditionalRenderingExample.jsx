import React, { useState } from 'react';

const ConditionalRenderingExample = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  // Función para alternar el estado de inicio de sesión
  const toggleLogin = () => {
    setIsLoggedIn((prevState) => !prevState);
  };

  return (
    <>
      <h2>Renderizado Condicional en React</h2>
      <p>
        {isLoggedIn
          ? 'Bienvenido, usuario. Gracias por iniciar sesión.'
          : 'Por favor, inicia sesión para continuar.'}
      </p>
      <button onClick={toggleLogin}>
        {isLoggedIn ? 'Cerrar sesión' : 'Iniciar sesión'}
      </button>
      {isLoggedIn && (
        <div style={{ marginTop: '20px', padding: '10px', backgroundColor: '#f8f9fa', borderRadius: '5px' }}>
          <h3>Contenido exclusivo</h3>
          <p>Este contenido solo es visible para usuarios autenticados.</p>
        </div>
      )}
    </>
  );
};

export default ConditionalRenderingExample;
