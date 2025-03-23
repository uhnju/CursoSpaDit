import React from "react";

/********************************************
 * ESCENARIO 1: JSX básico
 *******************************************/
// Este ejemplo muestra cómo usar JSX para crear elementos HTML básicos.
// Es útil para entender cómo JSX se traduce a elementos del DOM.

const BasicJSXExample = () => {
  return <h1>¡Hola, mundo!</h1>;
};

/********************************************
 * ESCENARIO 2: JSX con expresiones JavaScript
 *******************************************/
// Este ejemplo muestra cómo incrustar expresiones JavaScript dentro de JSX.
// Es útil cuando necesitas mostrar valores dinámicos en la interfaz.

const JSXWithExpressionsExample = () => {
  const name = "Juan";
  return <p>Hola, {name}!</p>;
};

/********************************************
 * ESCENARIO 3: JSX con atributos
 *******************************************/
// Este ejemplo muestra cómo usar atributos en elementos JSX.
// Es útil cuando necesitas agregar propiedades como `className`, `style`, etc.

const JSXWithAttributesExample = () => {
  return (
    <div className="container" style={{ backgroundColor: "lightblue", padding: "10px" }}>
      <p>Este es un div con estilos y clases.</p>
    </div>
  );
};

/********************************************
 * ESCENARIO 4: JSX con elementos anidados
 *******************************************/
// Este ejemplo muestra cómo anidar elementos dentro de JSX.
// Es útil cuando necesitas crear estructuras HTML más complejas.

const NestedJSXExample = () => {
  return (
    <div>
      <h1>Título</h1>
      <p>Este es un párrafo dentro de un div.</p>
    </div>
  );
};

/********************************************
 * ESCENARIO 5: JSX con componentes personalizados
 *******************************************/
// Este ejemplo muestra cómo usar componentes personalizados dentro de JSX.
// Es útil cuando necesitas reutilizar componentes en diferentes partes de la aplicación.

const CustomComponent = ({ message }) => {
  return <p>{message}</p>;
};

const JSXWithCustomComponentsExample = () => {
  return <CustomComponent message="Este es un mensaje desde un componente personalizado" />;
};

/********************************************
 * ESCENARIO 6: JSX con listas
 *******************************************/
// Este ejemplo muestra cómo renderizar listas en JSX usando `map`.
// Es útil cuando necesitas mostrar una lista de elementos dinámicos.

const JSXWithListsExample = () => {
  const items = ["Manzana", "Banana", "Naranja"];

  return (
    <ul>
      {items.map((item, index) => (
        <li key={index}>{item}</li>
      ))}
    </ul>
  );
};

/********************************************
 * ESCENARIO 7: JSX con condicionales
 *******************************************/
// Este ejemplo muestra cómo usar condicionales dentro de JSX.
// Es útil cuando necesitas renderizar contenido basado en una condición.

const JSXWithConditionalsExample = () => {
  const isLoggedIn = true;

  return (
    <div>
      {isLoggedIn ? <p>Bienvenido, usuario!</p> : <p>Por favor, inicia sesión.</p>}
    </div>
  );
};

/********************************************
 * ESCENARIO 8: JSX con fragmentos
 *******************************************/
// Este ejemplo muestra cómo usar fragmentos (`<></>`) en JSX.
// Es útil cuando necesitas devolver múltiples elementos sin envolverlos en un contenedor.

const JSXWithFragmentsExample = () => {
  return (
    <>
      <p>Este es un párrafo.</p>
      <p>Este es otro párrafo.</p>
    </>
  );
};

/********************************************
 * ESCENARIO 9: JSX con eventos
 *******************************************/
// Este ejemplo muestra cómo manejar eventos en JSX.
// Es útil cuando necesitas responder a interacciones del usuario, como clics.

const JSXWithEventsExample = () => {
  const handleClick = () => {
    alert("¡Hiciste clic en el botón!");
  };

  return <button onClick={handleClick}>Haz clic aquí</button>;
};

/********************************************
 * ESCENARIO 10: JSX con estilos en línea
 *******************************************/
// Este ejemplo muestra cómo aplicar estilos en línea en JSX.
// Es útil cuando necesitas aplicar estilos dinámicos directamente en los elementos.

const JSXWithInlineStylesExample = () => {
  const style = {
    color: "white",
    backgroundColor: "blue",
    padding: "10px",
  };

  return <p style={style}>Este es un párrafo con estilos en línea.</p>;
};

/********************************************
 * COMPONENTE PRINCIPAL: Muestra todos los escenarios
 *******************************************/
// Este componente centraliza todos los ejemplos para que el profesor pueda
// mostrarlos uno por uno en una única vista. Cada uno está comentado con su número y título.

const EjemplosSintaxisJSX = () => {
  return (
    <div className="p-6 space-y-6">
      <h1 className="text-2xl font-bold">Ejemplos de Sintaxis JSX en React</h1>

      <BasicJSXExample />              {/* ESCENARIO 1: JSX básico */}
      <JSXWithExpressionsExample />    {/* ESCENARIO 2: JSX con expresiones JavaScript */}
      <JSXWithAttributesExample />     {/* ESCENARIO 3: JSX con atributos */}
      <NestedJSXExample />             {/* ESCENARIO 4: JSX con elementos anidados */}
      <JSXWithCustomComponentsExample /> {/* ESCENARIO 5: JSX con componentes personalizados */}
      <JSXWithListsExample />          {/* ESCENARIO 6: JSX con listas */}
      <JSXWithConditionalsExample />   {/* ESCENARIO 7: JSX con condicionales */}
      <JSXWithFragmentsExample />      {/* ESCENARIO 8: JSX con fragmentos */}
      <JSXWithEventsExample />        {/* ESCENARIO 9: JSX con eventos */}
      <JSXWithInlineStylesExample />   {/* ESCENARIO 10: JSX con estilos en línea */}
    </div>
  );
};

export default EjemplosSintaxisJSX;