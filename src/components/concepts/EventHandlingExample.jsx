import React, { useState } from 'react';

const EventHandlingExample = () => {
  const [message, setMessage] = useState('Hola, visitante');

  // Manejador de eventos para un clic en el botón
  const handleClick = () => {
    setMessage('¡Gracias por hacer clic!');
  };

  // Manejador de eventos para el cambio en un campo de texto
  const handleChange = (event) => {
    setMessage(`Hola, ${event.target.value}`);
  };

  return (
    <>
      <h2>Manejo de eventos en React</h2>
      <p>{message}</p>
      <div>
        <button onClick={handleClick} style={{ marginRight: '10px' }}>
          Haz clic aquí
        </button>
        <input
          type="text"
          placeholder="Escribe tu nombre"
          onChange={handleChange}
          style={{ padding: '5px', fontSize: '1rem' }}
        />
      </div>
    </>
  );
};

export default EventHandlingExample;
