import React, { useState } from "react";

/********************************************
 * ESCENARIO 1: Componente funcional con TypeScript
 *******************************************/
// Este ejemplo muestra cómo crear un componente funcional con TypeScript.
// Es útil para entender cómo TypeScript ayuda a definir tipos de props y estado.

interface GreetingProps {
  name: string;
}

const Greeting: React.FC<GreetingProps> = ({ name }) => {
  return <p>Hola, {name}!</p>;
};

const BasicTSXExample = () => {
  return <Greeting name="Juan" />;
};

/********************************************
 * ESCENARIO 2: Estado tipado con TypeScript
 *******************************************/
// Este ejemplo muestra cómo usar `useState` con TypeScript para definir el tipo del estado.
// Es útil cuando necesitas asegurarte de que el estado siempre sea de un tipo específico.

const TypedStateExample = () => {
  const [count, setCount] = useState<number>(0);

  return (
    <div>
      <p>Contador: {count}</p>
      <button onClick={() => setCount(count + 1)}>Incrementar</button>
    </div>
  );
};

/********************************************
 * ESCENARIO 3: Props opcionales con TypeScript
 *******************************************/
// Este ejemplo muestra cómo definir props opcionales en un componente con TypeScript.
// Es útil cuando algunas props no son obligatorias.

interface OptionalProps {
  name?: string;
}

const OptionalPropsExample: React.FC<OptionalProps> = ({ name = "Invitado" }) => {
  return <p>Hola, {name}!</p>;
};

const OptionalPropsUsage = () => {
  return <OptionalPropsExample />;
};

/********************************************
 * ESCENARIO 4: Manejo de eventos con TypeScript
 *******************************************/
// Este ejemplo muestra cómo manejar eventos en TypeScript.
// Es útil cuando necesitas definir tipos para los manejadores de eventos.

const EventHandlingExample = () => {
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    alert("¡Hiciste clic en el botón!");
  };

  return <button onClick={handleClick}>Haz clic aquí</button>;
};

/********************************************
 * ESCENARIO 5: Componentes con children en TypeScript
 *******************************************/
// Este ejemplo muestra cómo usar `children` en un componente con TypeScript.
// Es útil cuando necesitas pasar elementos hijos a un componente.

const Card: React.FC = ({ children }) => {
  return <div style={{ border: "1px solid black", padding: "10px" }}>{children}</div>;
};

const ChildrenExample = () => {
  return <Card>Este es el contenido de la tarjeta.</Card>;
};

/********************************************
 * ESCENARIO 6: Tipos genéricos en TypeScript
 *******************************************/
// Este ejemplo muestra cómo usar tipos genéricos en TypeScript.
// Es útil cuando necesitas crear componentes reutilizables que funcionan con diferentes tipos de datos.

interface ListProps<T> {
  items: T[];
  renderItem: (item: T) => React.ReactNode;
}

const List = <T,>({ items, renderItem }: ListProps<T>) => {
  return <ul>{items.map((item, index) => <li key={index}>{renderItem(item)}</li>)}</ul>;
};

const GenericTypesExample = () => {
  const numbers = [1, 2, 3, 4, 5];
  const strings = ["a", "b", "c"];

  return (
    <div>
      <List items={numbers} renderItem={(item) => <span>{item}</span>} />
      <List items={strings} renderItem={(item) => <span>{item}</span>} />
    </div>
  );
};

/********************************************
 * ESCENARIO 7: Tipos avanzados con TypeScript
 *******************************************/
// Este ejemplo muestra cómo usar tipos avanzados como `Union Types` y `Intersection Types`.
// Es útil cuando necesitas combinar o extender tipos.

type Status = "loading" | "success" | "error";

interface User {
  name: string;
  age: number;
}

interface Admin {
  role: string;
}

type AdminUser = User & Admin;

const AdvancedTypesExample = () => {
  const [status, setStatus] = useState<Status>("loading");
  const user: AdminUser = { name: "Juan", age: 30, role: "admin" };

  return (
    <div>
      <p>Estado: {status}</p>
      <p>Usuario: {user.name}, Rol: {user.role}</p>
    </div>
  );
};

/********************************************
 * ESCENARIO 8: Uso de interfaces con TypeScript
 *******************************************/
// Este ejemplo muestra cómo usar interfaces para definir la forma de los objetos.
// Es útil cuando necesitas asegurarte de que los objetos tengan una estructura específica.

interface Product {
  id: number;
  name: string;
  price: number;
}

const ProductDetails: React.FC<{ product: Product }> = ({ product }) => {
  return (
    <div>
      <p>Nombre: {product.name}</p>
      <p>Precio: ${product.price}</p>
    </div>
  );
};

const InterfaceExample = () => {
  const product: Product = { id: 1, name: "Laptop", price: 1000 };
  return <ProductDetails product={product} />;
};

/********************************************
 * ESCENARIO 9: Uso de tipos en funciones
 *******************************************/
// Este ejemplo muestra cómo definir tipos para funciones en TypeScript.
// Es útil cuando necesitas asegurarte de que las funciones reciban y devuelvan tipos específicos.

type MathOperation = (a: number, b: number) => number;

const add: MathOperation = (a, b) => a + b;

const FunctionTypesExample = () => {
  const result = add(5, 3);
  return <p>Resultado de la suma: {result}</p>;
};

/********************************************
 * ESCENARIO 10: Uso de enums en TypeScript
 *******************************************/
// Este ejemplo muestra cómo usar `enums` en TypeScript.
// Es útil cuando necesitas definir un conjunto de constantes con nombres descriptivos.

enum UserRole {
  Admin = "Admin",
  Editor = "Editor",
  Viewer = "Viewer",
}

const UserRoleDisplay: React.FC<{ role: UserRole }> = ({ role }) => {
  return <p>Rol del usuario: {role}</p>;
};

const EnumExample = () => {
  return <UserRoleDisplay role={UserRole.Admin} />;
};

/********************************************
 * COMPONENTE PRINCIPAL: Muestra todos los escenarios
 *******************************************/
// Este componente centraliza todos los ejemplos para que el profesor pueda
// mostrarlos uno por uno en una única vista. Cada uno está comentado con su número y título.

const EjemplosTSX = () => {
  return (
    <div className="p-6 space-y-6">
      <h1 className="text-2xl font-bold">Ejemplos de TypeScript en React (TSX)</h1>

      <BasicTSXExample />              {/* ESCENARIO 1: Componente funcional con TypeScript */}
      <TypedStateExample />            {/* ESCENARIO 2: Estado tipado con TypeScript */}
      <OptionalPropsUsage />           {/* ESCENARIO 3: Props opcionales con TypeScript */}
      <EventHandlingExample />         {/* ESCENARIO 4: Manejo de eventos con TypeScript */}
      <ChildrenExample />              {/* ESCENARIO 5: Componentes con children en TypeScript */}
      <GenericTypesExample />          {/* ESCENARIO 6: Tipos genéricos en TypeScript */}
      <AdvancedTypesExample />         {/* ESCENARIO 7: Tipos avanzados con TypeScript */}
      <InterfaceExample />             {/* ESCENARIO 8: Uso de interfaces con TypeScript */}
      <FunctionTypesExample />         {/* ESCENARIO 9: Uso de tipos en funciones */}
      <EnumExample />                  {/* ESCENARIO 10: Uso de enums en TypeScript */}
    </div>
  );
};

export default EjemplosTSX;