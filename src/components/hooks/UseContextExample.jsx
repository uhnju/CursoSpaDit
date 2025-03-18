import React, { useContext, useState, createContext } from 'react';

// Crear un contexto
const ThemeContext = createContext();

// Componente hijo que consume el contexto
const ThemeDisplay = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <>
      <p>
        <strong>Tema actual:</strong> {theme === 'light' ? 'Claro' : 'Oscuro'}
      </p>
      <button onClick={toggleTheme}>
        Cambiar a {theme === 'light' ? 'Oscuro' : 'Claro'}
      </button>
    </>
  );
};

// Componente principal
const UseContextExample = () => {
  const [theme, setTheme] = useState('light');

  // Función para alternar el tema
  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'));
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      <h2>useContext Example</h2>
      <p>
        Este ejemplo muestra cómo compartir información entre componentes usando el contexto de
        React y el hook <code>useContext</code>.
      </p>
      <div
        style={{
          padding: '20px',
          backgroundColor: theme === 'light' ? '#f8f9fa' : '#343a40',
          color: theme === 'light' ? '#212529' : '#f8f9fa',
          borderRadius: '10px',
        }}
      >
        <ThemeDisplay />
      </div>
    </ThemeContext.Provider>
  );
};

export default UseContextExample;
