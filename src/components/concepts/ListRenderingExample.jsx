import React from 'react';

const ListRenderingExample = () => {
  const users = [
    { id: 1, name: 'Juan Pérez', age: 25 },
    { id: 2, name: 'Ana López', age: 30 },
    { id: 3, name: 'Carlos García', age: 35 },
  ];

  return (
    <>
      <h2>Renderizado de Listas en React</h2>
      <ul>
        {users.map((user) => (
          <li key={user.id} style={{ marginBottom: '10px' }}>
            <strong>Nombre:</strong> {user.name}, <strong>Edad:</strong> {user.age}
          </li>
        ))}
      </ul>
    </>
  );
};

export default ListRenderingExample;
