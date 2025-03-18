import React, { useState } from 'react';

// Componente hijo que utiliza props
const DisplayMessage = ({ message }) => {
  return (
    <p>
      <strong>Mensaje desde props:</strong> {message}
    </p>
  );
};

// Componente principal
const PropsVsStateExample = () => {
  const [stateMessage, setStateMessage] = useState('Mensaje inicial desde state');
  const [inputValue, setInputValue] = useState('');

  const updateMessage = () => {
    setStateMessage(inputValue || 'Mensaje sin texto ingresado');
  };

  return (
    <>
      <h2>Props vs State en React</h2>
      <p>
        <strong>State:</strong> El estado pertenece al componente que lo define y puede cambiar
        mediante eventos o interacciones del usuario.
      </p>
      <p>
        <strong>Props:</strong> Las props son datos pasados desde un componente padre a sus hijos y
        no pueden ser modificadas por el componente hijo.
      </p>
      <div>
        {/* Estado controlado por el componente */}
        <h3>Ejemplo de State</h3>
        <p>
          <strong>Mensaje desde state:</strong> {stateMessage}
        </p>
        <input
          type="text"
          placeholder="Escribe un nuevo mensaje"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          style={{ marginRight: '10px', padding: '5px', fontSize: '1rem' }}
        />
        <button onClick={updateMessage}>Actualizar mensaje</button>
      </div>
      <div style={{ marginTop: '20px' }}>
        {/* Props pasadas al componente hijo */}
        <h3>Ejemplo de Props</h3>
        <DisplayMessage message={stateMessage} />
      </div>
    </>
  );
};

export default PropsVsStateExample;
