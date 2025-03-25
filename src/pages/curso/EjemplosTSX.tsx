import React, { useRef, useState } from "react";

/********************************************
 * ESCENARIO 1: Tipar props simples
 *******************************************/
// Este ejemplo muestra cómo tipar las propiedades (props) de un componente utilizando una interfaz.
// La interfaz `WelcomeProps` define que el componente `Welcome` debe recibir un nombre (`name`) como string
// y una edad (`age`) como número. Esto asegura que el componente solo acepte valores válidos.

interface WelcomeProps {
 name: string;
 age: number;
}
const Welcome = ({ name, age }: WelcomeProps): JSX.Element => {
 return <p>Hola, {name}. Tienes {age} años.</p>;
};

/********************************************
 * ESCENARIO 2: Props opcionales
 *******************************************/
// Aquí se muestra cómo manejar propiedades opcionales en un componente.
// La propiedad `message` es opcional, indicada por el signo `?`. Si no se proporciona, el componente
// mostrará un mensaje predeterminado ("Sin mensaje.").

interface AlertProps {
 message?: string; // El signo ? indica que es opcional
}
const Alert = ({ message }: AlertProps): JSX.Element => {
 return <div>{message ? message : "Sin mensaje."}</div>;
};

/********************************************
 * ESCENARIO 3: Tipar children con React.ReactNode
 *******************************************/
// Este ejemplo utiliza la propiedad especial `children`, que se tipa con `React.ReactNode`.
// Esto permite que el componente `Card` reciba cualquier contenido válido de React (texto, JSX, otros componentes)
// y lo renderice dentro de un contenedor.

interface CardProps {
 children: React.ReactNode;
}
const Card = ({ children }: CardProps): JSX.Element => {
 return <div className="card">{children}</div>;
};

/********************************************
 * ESCENARIO 4: Retorno JSX.Element
 *******************************************/
// Este ejemplo muestra cómo especificar explícitamente que el retorno de un componente es de tipo `JSX.Element`.
// Esto asegura que el componente siempre devuelva un elemento válido de React.

const Footer = (): JSX.Element => {
 return <footer>Hecho con ❤️</footer>;
};

/********************************************
 * ESCENARIO 5: Tipar arrays
 *******************************************/
// Aquí se muestra cómo tipar un array de strings utilizando `string[]`.
// El componente `List` recibe un array de elementos y los renderiza como una lista (`<ul>`).
// Esto asegura que el componente solo funcione con arrays de cadenas.

interface ListProps {
 items: string[]; // Array de strings
}
const List = ({ items }: ListProps): JSX.Element => {
 return (
  <ul>
   {items.map((item, index) => (
    <li key={index}>{item}</li>
   ))}
  </ul>
 );
};

/********************************************
 * ESCENARIO 6: Tipar eventos
 *******************************************/
// Este ejemplo muestra cómo tipar eventos en React. En este caso, el evento de clic (`onClick`)
// se tipa como `React.MouseEvent<HTMLButtonElement>`, lo que asegura que el evento sea manejado correctamente
// y que el elemento sea un botón HTML.

const Button = (): JSX.Element => {
 const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
  console.log("Clickeado", e);
 };

 return <button onClick={handleClick}>Haz clic</button>;
};

/********************************************
 * ESCENARIO 7: Tipar objetos complejos
 *******************************************/
// Este ejemplo utiliza una interfaz anidada (`User`) para definir un objeto complejo como propiedad.
// Esto es útil para trabajar con datos estructurados, como usuarios, productos o configuraciones.

interface User {
 id: number;
 name: string;
}
interface ProfileProps {
 user: User;
}
const Profile = ({ user }: ProfileProps): JSX.Element => {
 return <p>ID: {user.id}, Nombre: {user.name}</p>;
};

/********************************************
 * ESCENARIO 8: Props genéricas (básico)
 *******************************************/
// Este ejemplo utiliza un tipo genérico `<T>` para aceptar cualquier tipo de dato como propiedad `value`.
// Esto hace que el componente sea altamente reutilizable, ya que puede trabajar con diferentes tipos de datos.

interface ItemProps<T> {
 value: T;
}
const Item = <T,>({ value }: ItemProps<T>): JSX.Element => {
 return <div>{JSON.stringify(value)}</div>;
};

/********************************************
 * ESCENARIO 9: Tipar referencias con useRef
 *******************************************/
// Este ejemplo utiliza el hook `useRef` para crear una referencia a un elemento de entrada (`<input>`).
// La referencia se tipa como `HTMLInputElement`, lo que asegura que solo se pueda asociar con un elemento de entrada válido.

const InputFocus = (): JSX.Element => {
 const inputRef = useRef<HTMLInputElement>(null); // Tipamos el input

 return <input ref={inputRef} type="text" placeholder="Nombre" />;
};

/********************************************
 * ESCENARIO 10: Tipar estados con useState
 *******************************************/
// Este ejemplo utiliza el hook `useState` para manejar un estado llamado `count`.
// El estado se tipa explícitamente como `number`, lo que garantiza que solo se puedan asignar valores numéricos.

const Counter = (): JSX.Element => {
 // @ts-ignore
 const [count, setCount] = useState<number>(0); // Tipamos el estado explícitamente
 return <p>Contador: {count}</p>;
};

/********************************************
 * COMPONENTE DEMO PARA MOSTRAR TODOS LOS ESCENARIOS
 *******************************************/
// Este componente principal reúne todos los ejemplos anteriores en un solo lugar.
// Renderiza cada componente con datos de ejemplo para mostrar cómo funcionan en conjunto.

const EjemplosTSX = (): JSX.Element => {
 return (
  <div>
   <h1>Ejemplos Básicos de TypeScript con React</h1>
   <Welcome name="Ana" age={30} /> {/* ESCENARIO 1: Tipar props simples */}
   <Alert message="¡Error inesperado!" /> {/* ESCENARIO 2: Props opcionales */}
   <Card> {/* ESCENARIO 3: Tipar children con React.ReactNode */}
    <p>Contenido dentro de Card</p>
   </Card>
   <Footer /> {/* ESCENARIO 4: Retorno JSX.Element */}
   <List items={["React", "TypeScript", "JSX"]} /> {/* ESCENARIO 5: Tipar arrays */}
   <Button /> {/* ESCENARIO 6: Tipar eventos */}
   <Profile user={{ id: 1, name: "Carlos" }} /> {/* ESCENARIO 7: Tipar objetos complejos */}
   <Item value={{ producto: "Camisa", precio: 25 }} /> {/* ESCENARIO 8: Props genéricas (básico) */}
   <InputFocus /> {/* ESCENARIO 9: Tipar referencias con useRef */}
   <Counter /> {/* ESCENARIO 10: Tipar estados con useState */}
  </div>
 );
};

export default EjemplosTSX;

