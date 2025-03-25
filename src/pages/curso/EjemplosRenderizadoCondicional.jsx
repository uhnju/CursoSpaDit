import React, { useState } from "react";

/********************************************
 * ESCENARIO 1: Renderizado condicional con `if` (operador ternario)
 *******************************************/
// Este ejemplo muestra cómo alternar contenido entre dos opciones:
// "Bienvenido" o "Inicia sesión", dependiendo del estado `isLoggedIn`.
// El operador ternario es muy útil para elegir entre dos bloques de JSX.

const ConditionalIf = () => {
 const [isLoggedIn, setIsLoggedIn] = useState(false);

 return (
  <div>
   {isLoggedIn ? <p>Bienvenido, usuario</p> : <p>Por favor, inicia sesión</p>}
   <button onClick={() => setIsLoggedIn(!isLoggedIn)}>
    {isLoggedIn ? "Cerrar sesión" : "Iniciar sesión"}
   </button>
  </div>
 );
};

/********************************************
 * ESCENARIO 2: Renderizado con `&&`
 *******************************************/
// Aquí se utiliza el operador lógico `&&` para mostrar un texto
// solo cuando el estado `showText` sea `true`.
// Es muy útil cuando solo queremos renderizar un bloque condicionalmente
// y no necesitamos un "else".

const ConditionalAnd = () => {
 const [showText, setShowText] = useState(false);

 return (
  <div>
   <button onClick={() => setShowText(!showText)}>Mostrar/Ocultar</button>
   {showText && <p>Este texto aparece cuando el estado es `true`</p>}
  </div>
 );
};

/********************************************
 * ESCENARIO 3: Renderizado condicional con `switch`
 *******************************************/
// Este ejemplo demuestra cómo renderizar diferentes resultados
// en función del estado `status` utilizando una estructura `switch`.
// Muy útil cuando tenemos más de dos posibles valores a mostrar.

const ConditionalSwitch = () => {
 const [status, setStatus] = useState("loading");

 const renderStatus = () => {
  switch (status) {
   case "loading":
    return <p>Cargando...</p>;
   case "success":
    return <p>Datos cargados correctamente</p>;
   case "error":
    return <p>Error al cargar los datos</p>;
   default:
    return null;
  }
 };

 return (
  <div>
   <button onClick={() => setStatus("loading")}>Cargando</button>
   <button onClick={() => setStatus("success")}>Éxito</button>
   <button onClick={() => setStatus("error")}>Error</button>
   {renderStatus()}
  </div>
 );
};

/********************************************
 * ESCENARIO 4: Renderizar un array condicionalmente
 *******************************************/
// En este ejemplo se verifica si hay elementos en el array `items`.
// Si hay elementos, se muestra la lista. Si no, se muestra un mensaje alternativo.

const ConditionalArray = () => {
 const [items, setItems] = useState(["Elemento 1", "Elemento 2"]);

 return (
  <div>
   {items.length > 0 ? (
    <ul>{items.map((item, index) => <li key={index}>{item}</li>)}</ul>
   ) : (
    <p>No hay elementos</p>
   )}
   <button onClick={() => setItems([])}>Vaciar lista</button>
  </div>
 );
};

/********************************************
 * ESCENARIO 5: Condicional con valor numérico
 *******************************************/
// Se muestra un texto distinto cuando el contador está en cero.
// Este patrón es útil para dar mensajes personalizados según valores numéricos.

const ConditionalNumber = () => {
 const [count, setCount] = useState(0);

 return (
  <div>
   <p>{count === 0 ? "El contador está en cero" : `Contador: ${count}`}</p>
   <button onClick={() => setCount(count + 1)}>Incrementar</button>
  </div>
 );
};

/********************************************
 * ESCENARIO 6: Mostrar/Ocultar un componente
 *******************************************/
// Este ejemplo alterna la visibilidad de un componente (párrafo) mediante el estado `visible`.
// Muy común para construir interfaces con elementos colapsables o modales.

const ConditionalComponent = () => {
 const [visible, setVisible] = useState(true);

 return (
  <div>
   <button onClick={() => setVisible(!visible)}>Mostrar/Ocultar Componente</button>
   {visible && <p>Este componente puede mostrarse o esconderse</p>}
  </div>
 );
};

/********************************************
 * ESCENARIO 7: Operador ternario directo en JSX
 *******************************************/
// Se alterna un mensaje según el valor del estado `isAdmin`.
// El operador ternario puede usarse directamente dentro del JSX como este ejemplo.

const ConditionalTernary = () => {
 const [isAdmin, setIsAdmin] = useState(false);

 return (
  <div>
   <p>{isAdmin ? "Eres un administrador" : "Eres un usuario normal"}</p>
   <button onClick={() => setIsAdmin(!isAdmin)}>Cambiar rol</button>
  </div>
 );
};

/********************************************
 * ESCENARIO 8: Renderizar distintos componentes según rol
 *******************************************/
// Aquí se cambia entre dos componentes (`AdminPanel` y `UserPanel`)
// según el valor de la prop `role`. Este patrón se usa mucho en apps con roles de usuario.

const AdminPanel = () => <p>Panel de Administración</p>;
const UserPanel = () => <p>Panel de Usuario</p>;

const ConditionalComponentSwitch = () => {
 const [role, setRole] = useState("user");

 return (
  <div>
   {role === "admin" ? <AdminPanel /> : <UserPanel />}
   <button onClick={() => setRole(role === "admin" ? "user" : "admin")}>
    Cambiar a {role === "admin" ? "Usuario" : "Administrador"}
   </button>
  </div>
 );
};

/********************************************
 * ESCENARIO 9: Condicional con estilos dinámicos
 *******************************************/
// Este ejemplo modifica el estilo (color del texto) en función del estado `active`.
// Es una técnica útil para indicar visualmente estados (activo/inactivo, correcto/incorrecto, etc.)

const ConditionalStyles = () => {
 const [active, setActive] = useState(false);

 return (
  <div>
   <p style={{ color: active ? "green" : "red" }}>
    Estado: {active ? "Activo" : "Inactivo"}
   </p>
   <button onClick={() => setActive(!active)}>Alternar estado</button>
  </div>
 );
};

/********************************************
 * ESCENARIO 10: Renderizado condicional con datos asincrónicos
 *******************************************/
// Se simula una llamada a una API (con `setTimeout`) y se muestra un mensaje de carga.
// Una vez que se "cargan los datos", se muestra el resultado.
// Ideal para introducir el patrón loading/success/error.

const ConditionalAsync = () => {
 const [loading, setLoading] = useState(false);
 const [data, setData] = useState(null);

 const fetchData = () => {
  setLoading(true);
  setTimeout(() => {
   setData("Datos cargados correctamente");
   setLoading(false);
  }, 2000);
 };

 return (
  <div>
   <button onClick={fetchData}>Cargar Datos</button>
   {loading ? <p>Cargando...</p> : data && <p>{data}</p>}
  </div>
 );
};

/********************************************
 * COMPONENTE PRINCIPAL: Muestra todos los escenarios
 *******************************************/
// Este componente agrupa todos los ejemplos para poder visualizarlos en conjunto.
// El profesor puede ir activando cada uno y explicando los diferentes patrones de renderizado condicional.

const EjemplosRenderizadoCondicional = () => (
 <div className="p-6 space-y-6">
  <h1 className="text-2xl font-bold">Ejemplos de renderizado condicional en React</h1>

  <ConditionalIf />        {/* ESCENARIO 1: if con operador ternario */}
  <ConditionalAnd />        {/* ESCENARIO 2: && */}
  <ConditionalSwitch />      {/* ESCENARIO 3: switch */}
  <ConditionalArray />       {/* ESCENARIO 4: array vacío o no */}
  <ConditionalNumber />      {/* ESCENARIO 5: número condicional */}
  <ConditionalComponent />     {/* ESCENARIO 6: mostrar/ocultar */}
  <ConditionalTernary />      {/* ESCENARIO 7: ternario en JSX */}
  <ConditionalComponentSwitch />  {/* ESCENARIO 8: distintos componentes */}
  <ConditionalStyles />      {/* ESCENARIO 9: estilos condicionales */}
  <ConditionalAsync />       {/* ESCENARIO 10: render con promesa simulada */}
 </div>
);

export default EjemplosRenderizadoCondicional;

