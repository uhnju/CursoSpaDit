import React, { useState } from "react";

/********************************************
 * ESCENARIO 1: Renderizado condicional con if-else
 *******************************************/
// Este ejemplo muestra cómo usar una declaración `if-else` para renderizar contenido condicionalmente.
// Es útil cuando necesitas renderizar componentes completamente diferentes basados en una condición.

const IfElseExample = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  if (isLoggedIn) {
    return <p>Bienvenido, usuario!</p>;
  } else {
    return <p>Por favor, inicia sesión.</p>;
  }
};

/********************************************
 * ESCENARIO 2: Renderizado condicional con operador ternario
 *******************************************/
// Este ejemplo muestra cómo usar el operador ternario para renderizar contenido condicionalmente.
// Es útil cuando necesitas renderizar pequeñas diferencias en el contenido basado en una condición.

const TernaryOperatorExample = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <div>
      {isLoggedIn ? <p>Bienvenido, usuario!</p> : <p>Por favor, inicia sesión.</p>}
      <button onClick={() => setIsLoggedIn(!isLoggedIn)}>
        {isLoggedIn ? "Cerrar sesión" : "Iniciar sesión"}
      </button>
    </div>
  );
};

/********************************************
 * ESCENARIO 3: Renderizado condicional con operador lógico AND (&&)
 *******************************************/
// Este ejemplo muestra cómo usar el operador lógico AND (`&&`) para renderizar contenido condicionalmente.
// Es útil cuando solo necesitas renderizar algo si una condición es verdadera.

const LogicalAndExample = () => {
  const [showMessage, setShowMessage] = useState(false);

  return (
    <div>
      {showMessage && <p>¡Este mensaje se muestra solo si `showMessage` es verdadero!</p>}
      <button onClick={() => setShowMessage(!showMessage)}>
        {showMessage ? "Ocultar mensaje" : "Mostrar mensaje"}
      </button>
    </div>
  );
};

/********************************************
 * ESCENARIO 4: Renderizado condicional con operador lógico OR (||)
 *******************************************/
// Este ejemplo muestra cómo usar el operador lógico OR (`||`) para renderizar contenido condicionalmente.
// Es útil cuando necesitas renderizar un valor por defecto si la condición es falsa.

const LogicalOrExample = () => {
  const [name, setName] = useState("");

  return (
    <div>
      <p>Nombre: {name || "Invitado"}</p>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Escribe tu nombre"
      />
    </div>
  );
};

/********************************************
 * ESCENARIO 5: Renderizado condicional con switch-case
 *******************************************/
// Este ejemplo muestra cómo usar una declaración `switch-case` para renderizar contenido condicionalmente.
// Es útil cuando tienes múltiples casos que manejar.

const SwitchCaseExample = () => {
  const [status, setStatus] = useState("loading");

  let message;
  switch (status) {
    case "loading":
      message = <p>Cargando...</p>;
      break;
    case "success":
      message = <p>¡Datos cargados con éxito!</p>;
      break;
    case "error":
      message = <p>¡Error al cargar los datos!</p>;
      break;
    default:
      message = <p>Estado desconocido.</p>;
  }

  return (
    <div>
      {message}
      <button onClick={() => setStatus("loading")}>Cargando</button>
      <button onClick={() => setStatus("success")}>Éxito</button>
      <button onClick={() => setStatus("error")}>Error</button>
    </div>
  );
};

/********************************************
 * ESCENARIO 6: Renderizado condicional con componentes separados
 *******************************************/
// Este ejemplo muestra cómo usar componentes separados para manejar el renderizado condicional.
// Es útil cuando la lógica de renderizado es compleja y quieres mantener el código limpio.

const WelcomeMessage = () => <p>Bienvenido, usuario!</p>;
const LoginMessage = () => <p>Por favor, inicia sesión.</p>;

const ComponentSeparationExample = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <div>
      {isLoggedIn ? <WelcomeMessage /> : <LoginMessage />}
      <button onClick={() => setIsLoggedIn(!isLoggedIn)}>
        {isLoggedIn ? "Cerrar sesión" : "Iniciar sesión"}
      </button>
    </div>
  );
};

/********************************************
 * ESCENARIO 7: Renderizado condicional con fragmentos
 *******************************************/
// Este ejemplo muestra cómo usar fragmentos (`<></>`) para renderizar múltiples elementos condicionalmente.
// Es útil cuando necesitas renderizar varios elementos basados en una condición.

const FragmentExample = () => {
  const [showDetails, setShowDetails] = useState(false);

  return (
    <div>
      <button onClick={() => setShowDetails(!showDetails)}>
        {showDetails ? "Ocultar detalles" : "Mostrar detalles"}
      </button>
      {showDetails && (
        <>
          <p>Detalle 1: Información importante.</p>
          <p>Detalle 2: Más información.</p>
        </>
      )}
    </div>
  );
};

/********************************************
 * ESCENARIO 8: Renderizado condicional con early return
 *******************************************/
// Este ejemplo muestra cómo usar `early return` para evitar renderizar contenido innecesario.
// Es útil cuando quieres salir de un componente temprano si una condición no se cumple.

const EarlyReturnExample = () => {
  const [isLoading, setIsLoading] = useState(true);

  if (isLoading) {
    return <p>Cargando...</p>;
  }

  return <p>¡Datos cargados con éxito!</p>;
};

/********************************************
 * ESCENARIO 9: Renderizado condicional con children
 *******************************************/
// Este ejemplo muestra cómo usar `children` para renderizar contenido condicionalmente.
// Es útil cuando quieres encapsular la lógica de renderizado en un componente padre.

const ParentComponent = ({ children, condition }) => {
  return condition ? children : null;
};

const ChildrenExample = () => {
  const [showContent, setShowContent] = useState(false);

  return (
    <div>
      <button onClick={() => setShowContent(!showContent)}>
        {showContent ? "Ocultar contenido" : "Mostrar contenido"}
      </button>
      <ParentComponent condition={showContent}>
        <p>Este contenido se muestra condicionalmente.</p>
      </ParentComponent>
    </div>
  );
};

/********************************************
 * ESCENARIO 10: Renderizado condicional con funciones
 *******************************************/
// Este ejemplo muestra cómo usar funciones para manejar el renderizado condicional.
// Es útil cuando la lógica de renderizado es compleja y quieres reutilizarla.

const renderContent = (isLoggedIn) => {
  if (isLoggedIn) {
    return <p>Bienvenido, usuario!</p>;
  } else {
    return <p>Por favor, inicia sesión.</p>;
  }
};

const FunctionExample = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <div>
      {renderContent(isLoggedIn)}
      <button onClick={() => setIsLoggedIn(!isLoggedIn)}>
        {isLoggedIn ? "Cerrar sesión" : "Iniciar sesión"}
      </button>
    </div>
  );
};

/********************************************
 * COMPONENTE PRINCIPAL: Muestra todos los escenarios
 *******************************************/
// Este componente centraliza todos los ejemplos para que el profesor pueda
// mostrarlos uno por uno en una única vista. Cada uno está comentado con su número y título.

const EjemplosRenderizadoCondicional = () => {
  return (
    <div className="p-6 space-y-6">
      <h1 className="text-2xl font-bold">Ejemplos de Renderizado Condicional en React</h1>

      <IfElseExample />              {/* ESCENARIO 1: Renderizado condicional con if-else */}
      <TernaryOperatorExample />     {/* ESCENARIO 2: Renderizado condicional con operador ternario */}
      <LogicalAndExample />          {/* ESCENARIO 3: Renderizado condicional con operador lógico AND */}
      <LogicalOrExample />           {/* ESCENARIO 4: Renderizado condicional con operador lógico OR */}
      <SwitchCaseExample />          {/* ESCENARIO 5: Renderizado condicional con switch-case */}
      <ComponentSeparationExample /> {/* ESCENARIO 6: Renderizado condicional con componentes separados */}
      <FragmentExample />            {/* ESCENARIO 7: Renderizado condicional con fragmentos */}
      <EarlyReturnExample />         {/* ESCENARIO 8: Renderizado condicional con early return */}
      <ChildrenExample />            {/* ESCENARIO 9: Renderizado condicional con children */}
      <FunctionExample />            {/* ESCENARIO 10: Renderizado condicional con funciones */}
    </div>
  );
};

export default EjemplosRenderizadoCondicional;