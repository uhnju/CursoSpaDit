import React, { useState } from "react";

// 1. Componente simple con props
const Greeting = ({ name }) => <h1>Hola, {name}!</h1>;

// 2. Componente con múltiples props
const UserInfo = ({ name, age }) => <p>{name} tiene {age} años.</p>;

// 3. Props con valores por defecto
const WelcomeMessage = ({ message = "Bienvenido al curso de React!" }) => <p>{message}</p>;

// 4. Componente que recibe una lista como prop
const ItemList = ({ items }) => (
  <ul>
    {items.map((item, index) => (
      <li key={index}>{item}</li>
    ))}
  </ul>
);

// 5. Paso de objetos como props
const UserCard = ({ user }) => (
  <div>
    <h3>{user.name}</h3>
    <p>Email: {user.email}</p>
  </div>
);

// 6. Componente que renderiza otro componente usando props
const Profile = ({ user }) => (
  <div>
    <h2>Perfil de Usuario</h2>
    <UserCard user={user} />
  </div>
);

// 7. Componente con función como prop (callback)
const Button = ({ onClick, label }) => <button onClick={onClick}>{label}</button>;

// 8. Uso de children como prop
const Card = ({ title, children }) => (
  <div style={{ border: "1px solid black", padding: "10px", margin: "10px" }}>
    <h3>{title}</h3>
    {children}
  </div>
);

// 9. Paso de datos desde el padre al hijo con eventos
const Counter = ({ count, onIncrement }) => (
  <div>
    <p>Contador: {count}</p>
    <button onClick={onIncrement}>Incrementar</button>
  </div>
);

// 10. Renderizado condicional basado en props
const StatusMessage = ({ isLoggedIn }) => (
  <p>{isLoggedIn ? "Bienvenido de nuevo!" : "Por favor, inicia sesión."}</p>
);

// Componente principal
const EjemplosProps = () => {
  const user = { name: "Carlos", email: "carlos@example.com" };
  const items = ["Manzana", "Banana", "Cereza"];
  const [count, setCount] = useState(0);

  return (
    <div>
      <Greeting name="Ana" />
      <UserInfo name="Juan" age={30} />
      <WelcomeMessage />
      <ItemList items={items} />
      <Profile user={user} />
      <Button onClick={() => alert("Botón clicado!")} label="Haz clic aquí" />
      <Card title="Tarjeta de Información">
        <p>Este es un contenido dentro de una tarjeta.</p>
      </Card>
      <Counter count={count} onIncrement={() => setCount(count + 1)} />
      <StatusMessage isLoggedIn={true} />
    </div>
  );
};

export default EjemplosProps;
