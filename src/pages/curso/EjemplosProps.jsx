import React, { useState } from "react";

/********************************************
 * ESCENARIO 1: Componente simple con props
 *******************************************/
// Este componente recibe una prop llamada `name` y la muestra dentro de un saludo.
// Sirve para introducir el concepto básico de props como "valores que se pasan desde el padre al hijo".

const Greeting = ({ name }) => <h1>Hola, {name}!</h1>;

/********************************************
 * ESCENARIO 2: Componente con múltiples props
 *******************************************/
// Aquí el componente `UserInfo` recibe dos props: `name` y `age`.
// Nos permite mostrar cómo un componente puede aceptar varios datos
// y utilizarlos dentro del JSX.

const UserInfo = ({ name, age }) => <p>{name} tiene {age} años.</p>;

/********************************************
 * ESCENARIO 3: Props con valores por defecto
 *******************************************/
// Este componente muestra cómo establecer un valor por defecto para una prop,
// en caso de que no se proporcione desde el componente padre.

const WelcomeMessage = ({ message = "Bienvenido al curso de React!" }) => <p>{message}</p>;

/********************************************
 * ESCENARIO 4: Lista como prop
 *******************************************/
// `ItemList` recibe un array de elementos como prop (`items`) y lo renderiza en una lista.
// Se usa `map` para recorrer el array y `key` para dar una clave única a cada elemento.

const ItemList = ({ items }) => (
 <ul>
  {items.map((item, index) => (
   <li key={index}>{item}</li>
  ))}
 </ul>
);

/********************************************
 * ESCENARIO 5: Paso de objeto como prop
 *******************************************/
// Este componente muestra cómo pasar un objeto completo como prop.
// Es una técnica muy común cuando se trabaja con datos de usuarios u objetos complejos.

const UserCard = ({ user }) => (
 <div>
  <h3>{user.name}</h3>
  <p>Email: {user.email}</p>
 </div>
);

/********************************************
 * ESCENARIO 6: Composición de componentes
 *******************************************/
// `Profile` recibe un objeto `user` como prop y lo pasa a su vez al componente `UserCard`.
// Esto demuestra cómo se puede componer interfaces más grandes combinando componentes más pequeños.

const Profile = ({ user }) => (
 <div>
  <h2>Perfil de Usuario</h2>
  <UserCard user={user} />
 </div>
);

/********************************************
 * ESCENARIO 7: Función como prop (callback)
 *******************************************/
// Este patrón permite que el componente hijo ejecute una función que ha sido definida en el padre.
// Se usa mucho para manejar eventos como clics, envíos, etc.

const Button = ({ onClick, label }) => <button onClick={onClick}>{label}</button>;

/********************************************
 * ESCENARIO 8: Uso de `children`
 *******************************************/
// `children` es una prop especial que permite insertar contenido JSX arbitrario
// dentro de un componente. Es esencial para crear componentes envoltorios reutilizables.

const Card = ({ title, children }) => (
 <div style={{ border: "1px solid black", padding: "10px", margin: "10px" }}>
  <h3>{title}</h3>
  {children}
 </div>
);

/********************************************
 * ESCENARIO 9: Paso de datos + función desde el padre
 *******************************************/
// En este escenario el padre controla el estado del contador y pasa tanto el valor actual
// como la función para incrementarlo al hijo. Es un ejemplo perfecto de "lifting state up".

const Counter = ({ count, onIncrement }) => (
 <div>
  <p>Contador: {count}</p>
  <button onClick={onIncrement}>Incrementar</button>
 </div>
);

/********************************************
 * ESCENARIO 10: Renderizado condicional con props
 *******************************************/
// Según el valor de la prop `isLoggedIn`, el componente muestra un mensaje distinto.
// Esto permite modificar el comportamiento o apariencia del componente según las props recibidas.

const StatusMessage = ({ isLoggedIn }) => (
 <p>{isLoggedIn ? "Bienvenido de nuevo!" : "Por favor, inicia sesión."}</p>
);

/********************************************
 * COMPONENTE PRINCIPAL: Muestra todos los escenarios
 *******************************************/
// Este componente agrupa todos los ejemplos para mostrarlos de manera práctica en clase.
// Se definen algunas constantes para simular props reales (usuario, lista, contador...).

const EjemplosProps = () => {
 const user = { name: "Carlos", email: "carlos@example.com" };
 const items = ["Manzana", "Banana", "Cereza"];
 const [count, setCount] = useState(0);

 return (
  <div className="p-6 space-y-6">
   <h1 className="text-2xl font-bold">Ejemplos de uso de props en React</h1>

   <Greeting name="Ana" />                  {/* ESCENARIO 1 */}
   <UserInfo name="Juan" age={30} />             {/* ESCENARIO 2 */}
   <WelcomeMessage />                     {/* ESCENARIO 3 */}
   <ItemList items={items} />                 {/* ESCENARIO 4 */}
   <Profile user={user} />                  {/* ESCENARIO 5 y 6 */}
   <Button onClick={() => alert("Botón clicado!")} label="Haz clic aquí" /> {/* ESCENARIO 7 */}
   <Card title="Tarjeta de Información">           {/* ESCENARIO 8 */}
    <p>Este es un contenido dentro de una tarjeta.</p>
   </Card>
   <Counter count={count} onIncrement={() => setCount(count + 1)} /> {/* ESCENARIO 9 */}
   <StatusMessage isLoggedIn={true} />            {/* ESCENARIO 10 */}
  </div>
 );
};

export default EjemplosProps;

