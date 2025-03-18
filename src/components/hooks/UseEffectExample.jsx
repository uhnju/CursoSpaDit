import React, { useState, useEffect } from 'react';

const UseEffectExample = () => {
  const [count, setCount] = useState(0);
  const [data, setData] = useState([]);

  // Efecto para actualizar el título del documento cuando cambia el contador
  useEffect(() => {
    document.title = `Count: ${count}`;
  }, [count]); // Solo se ejecuta cuando cambia el valor de "count"

  // Efecto para simular la obtención de datos desde una API
  useEffect(() => {
    const fetchData = async () => {
      try {
        // Simulamos una llamada a una API
        const response = await fetch('https://jsonplaceholder.typicode.com/posts?_limit=5');
        const jsonData = await response.json();
        setData(jsonData);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []); // Solo se ejecuta una vez, al montar el componente

  return (
    <>
      <h2>useEffect Example</h2>
      <div>
        <h3>Contador</h3>
        <p>Count: {count}</p>
        <button onClick={() => setCount(count + 1)}>Increment</button>
        <button onClick={() => setCount(count - 1)}>Decrement</button>
      </div>
      <div>
        <h3>Datos simulados</h3>
        <ul>
          {data.length > 0 ? (
            data.map((item) => <li key={item.id}>{item.title}</li>)
          ) : (
            <p>Cargando datos...</p>
          )}
        </ul>
      </div>
    </>
  );
};

export default UseEffectExample;
