import React from "react";

/********************************************
 * ESCENARIO 1: Paso de props básico
 *******************************************/
// Este ejemplo muestra cómo pasar y recibir props en un componente.
// Es útil cuando necesitas compartir datos entre componentes.

const Greeting = ({ name }) => {
  return <p>Hola, {name}!</p>;
};

const BasicPropsExample = () => {
  return <Greeting name="Juan" />;
};

/********************************************
 * ESCENARIO 2: Props con valores por defecto
 *******************************************/
// Este ejemplo muestra cómo definir valores por defecto para las props.
// Es útil cuando quieres asegurarte de que un componente tenga valores predeterminados.

const GreetingWithDefault = ({ name = "Invitado" }) => {
  return <p>Hola, {name}!</p>;
};

const DefaultPropsExample = () => {
  return <GreetingWithDefault />;
};

/********************************************
 * ESCENARIO 3: Props con tipos de datos específicos
 *******************************************/
// Este ejemplo muestra cómo usar PropTypes para validar el tipo de las props.
// Es útil cuando necesitas asegurarte de que las props sean del tipo correcto.

import PropTypes from "prop-types";

const GreetingWithPropTypes = ({ name }) => {
  return <p>Hola, {name}!</p>;
};

GreetingWithPropTypes.propTypes = {
  name: PropTypes.string.isRequired,
};

const PropTypesExample = () => {
  return <GreetingWithPropTypes name="Ana" />;
};

/********************************************
 * ESCENARIO 4: Paso de props a componentes hijos
 *******************************************/
// Este ejemplo muestra cómo pasar props a componentes hijos.
// Es útil cuando necesitas compartir datos entre componentes anidados.

const ChildComponent = ({ message }) => {
  return <p>{message}</p>;
};

const ParentComponent = () => {
  return <ChildComponent message="Este es un mensaje desde el padre" />;
};

const PropsDrillingExample = () => {
  return <ParentComponent />;
};

/********************************************
 * ESCENARIO 5: Paso de funciones como props
 *******************************************/
// Este ejemplo muestra cómo pasar funciones como props.
// Es útil cuando necesitas que un componente hijo ejecute una función del padre.

const Button = ({ onClick }) => {
  return <button onClick={onClick}>Haz clic aquí</button>;
};

const FunctionAsPropExample = () => {
  const handleClick = () => {
    alert("¡Botón clickeado!");
  };

  return <Button onClick={handleClick} />;
};

/********************************************
 * ESCENARIO 6: Paso de elementos como props (children)
 *******************************************/
// Este ejemplo muestra cómo pasar elementos hijos como props usando `children`.
// Es útil cuando necesitas componer componentes de manera flexible.

const Card = ({ children }) => {
  return <div style={{ border: "1px solid black", padding: "10px" }}>{children}</div>;
};

const ChildrenPropExample = () => {
  return (
    <Card>
      <p>Este es el contenido de la tarjeta.</p>
    </Card>
  );
};

/********************************************
 * ESCENARIO 7: Paso de múltiples props
 *******************************************/
// Este ejemplo muestra cómo pasar múltiples props a un componente.
// Es útil cuando necesitas compartir varios datos entre componentes.

const UserProfile = ({ name, age, email }) => {
  return (
    <div>
      <p>Nombre: {name}</p>
      <p>Edad: {age}</p>
      <p>Email: {email}</p>
    </div>
  );
};

const MultiplePropsExample = () => {
  return <UserProfile name="Carlos" age={30} email="carlos@example.com" />;
};

/********************************************
 * ESCENARIO 8: Paso de props con desestructuración
 *******************************************/
// Este ejemplo muestra cómo usar la desestructuración para acceder a las props.
// Es útil cuando necesitas acceder a múltiples props de manera más limpia.

const UserProfileDestructured = ({ name, age, email }) => {
  return (
    <div>
      <p>Nombre: {name}</p>
      <p>Edad: {age}</p>
      <p>Email: {email}</p>
    </div>
  );
};

const DestructuringPropsExample = () => {
  return <UserProfileDestructured name="Laura" age={25} email="laura@example.com" />;
};

/********************************************
 * ESCENARIO 9: Paso de props con spread operator
 *******************************************/
// Este ejemplo muestra cómo usar el spread operator para pasar múltiples props.
// Es útil cuando tienes muchas props y quieres pasarlas de manera más eficiente.

const UserProfileSpread = (props) => {
  return (
    <div>
      <p>Nombre: {props.name}</p>
      <p>Edad: {props.age}</p>
      <p>Email: {props.email}</p>
    </div>
  );
};

const SpreadOperatorPropsExample = () => {
  const user = { name: "Pedro", age: 28, email: "pedro@example.com" };
  return <UserProfileSpread {...user} />;
};

/********************************************
 * ESCENARIO 10: Paso de props con componentes de orden superior (HOC)
 *******************************************/
// Este ejemplo muestra cómo usar un componente de orden superior (HOC) para pasar props.
// Es útil cuando necesitas compartir lógica común entre varios componentes.

const withGreeting = (WrappedComponent) => {
  return (props) => {
    return <WrappedComponent greeting="Hola" {...props} />;
  };
};

const UserProfileWithGreeting = ({ greeting, name }) => {
  return (
    <div>
      <p>{greeting}, {name}!</p>
    </div>
  );
};

const EnhancedUserProfile = withGreeting(UserProfileWithGreeting);

const HOCPropsExample = () => {
  return <EnhancedUserProfile name="Sofía" />;
};

/********************************************
 * COMPONENTE PRINCIPAL: Muestra todos los escenarios
 *******************************************/
// Este componente centraliza todos los ejemplos para que el profesor pueda
// mostrarlos uno por uno en una única vista. Cada uno está comentado con su número y título.

const EjemplosProps = () => {
  return (
    <div className="p-6 space-y-6">
      <h1 className="text-2xl font-bold">Ejemplos de Props en React</h1>

      <BasicPropsExample />          {/* ESCENARIO 1: Paso de props básico */}
      <DefaultPropsExample />        {/* ESCENARIO 2: Props con valores por defecto */}
      <PropTypesExample />           {/* ESCENARIO 3: Props con tipos de datos específicos */}
      <PropsDrillingExample />       {/* ESCENARIO 4: Paso de props a componentes hijos */}
      <FunctionAsPropExample />      {/* ESCENARIO 5: Paso de funciones como props */}
      <ChildrenPropExample />        {/* ESCENARIO 6: Paso de elementos como props (children) */}
      <MultiplePropsExample />       {/* ESCENARIO 7: Paso de múltiples props */}
      <DestructuringPropsExample />  {/* ESCENARIO 8: Paso de props con desestructuración */}
      <SpreadOperatorPropsExample /> {/* ESCENARIO 9: Paso de props con spread operator */}
      <HOCPropsExample />            {/* ESCENARIO 10: Paso de props con componentes de orden superior (HOC) */}
    </div>
  );
};

export default EjemplosProps;