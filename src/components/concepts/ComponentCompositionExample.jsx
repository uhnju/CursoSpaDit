import React from 'react';

// Componente UserItem: Representa un solo elemento de la lista
const UserItem = ({ user }) => (
  <li style={{ marginBottom: '10px' }}>
    <strong>Nombre:</strong> {user.name}, <strong>Edad:</strong> {user.age}
  </li>
);

// Componente principal que utiliza el componente UserItem
const ComponentCompositionExample = () => {
  const users = [
    { id: 1, name: 'Juan Pérez', age: 25 },
    { id: 2, name: 'Ana López', age: 30 },
    { id: 3, name: 'Carlos García', age: 35 },
  ];

  return (
    <>
      <h2>Composición de Componentes en React</h2>
      <p>
        Este ejemplo demuestra cómo dividir una lista en componentes más pequeños para lograr un código más limpio y reutilizable.
      </p>
      <ul>
        {users.map((user) => (
          <UserItem key={user.id} user={user} />
        ))}
      </ul>
    </>
  );
};

export default ComponentCompositionExample;
