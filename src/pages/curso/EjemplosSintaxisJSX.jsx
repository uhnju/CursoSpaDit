import React from "react";

/********************************************
 * COMPONENTE PRINCIPAL: Sintaxis JSX en React
 *******************************************/
// Este componente centraliza ejemplos clave sobre el uso de JSX en React.
// Se explican expresiones dentro de JSX, condiciones, estilos, clases, fragmentos, listas y atributos HTML.
// Es ideal para introducir la base sintáctica de los componentes en React.

const EjemplosSintaxisJSX = () => {
  // Variables y expresiones usadas en los ejemplos
  const name = "React";
  const number = 42;
  const isReactAwesome = true;
  const user = {
    firstName: "John",
    lastName: "Doe",
  };

  // Estilos en línea: deben pasarse como objeto en formato camelCase
  const inlineStyle = {
    color: "blue",
    fontSize: "20px",
    fontWeight: "bold",
  };

  return (
    <div className="p-6 space-y-4">
      {/* ESCENARIO 1: Uso de variables y expresiones */}
      {/* Se pueden insertar valores dentro del JSX mediante llaves {} */}
      <h1>Hola, {name}!</h1>
      <p>El número es: {number}</p>
      <p>¿React es asombroso? {isReactAwesome ? "Sí" : "No"}</p>
      <p>Nombre completo: {user.firstName} {user.lastName}</p>

      {/* ESCENARIO 2: Condicional simple con operador ternario */}
      {/* JSX no permite if-else directo, pero sí ternarios dentro de las llaves */}
      <p>{isReactAwesome ? "Definitivamente sí." : "Tal vez no."}</p>

      {/* ESCENARIO 3: Estilos en línea */}
      {/* Los estilos se aplican con un objeto JS en formato camelCase */}
      <p style={inlineStyle}>Este es un texto con estilos en línea.</p>

      {/* ESCENARIO 4: Clases CSS en JSX */}
      {/* En lugar de `class`, usamos `className` */}
      <p className="text-primary">Este es un texto con clase CSS.</p>

      {/* ESCENARIO 5: Fragmentos (<> </>) */}
      {/* JSX solo permite un nodo padre. Podemos usar Fragment para agrupar sin generar nodos adicionales */}
      <>
        <h2>Encabezado dentro de un Fragment</h2>
        <p>Esto forma parte del mismo Fragment.</p>
      </>

      {/* ESCENARIO 6: Comentarios en JSX */}
      {/* Se escriben dentro de llaves: */}
      {/* Este es un comentario válido */}

      {/* ESCENARIO 7: Renderizado condicional con operador lógico AND (&&) */}
      {/* Si `isReactAwesome` es true, se renderiza el contenido */}
      {isReactAwesome && <p>¡React es increíble!</p>}

      {/* ESCENARIO 8: Listas renderizadas dinámicamente con .map */}
      {/* Cada elemento renderizado debe tener una `key` única */}
      <ul>
        {["Manzana", "Banana", "Cereza"].map((fruit, index) => (
          <li key={index}>{fruit}</li>
        ))}
      </ul>

      {/* ESCENARIO 9: Atributos HTML en JSX */}
      {/* Algunos atributos cambian a camelCase, como `autoFocus`, `htmlFor`, `onClick`, etc. */}
      <input type="text" placeholder="Escribe aquí" autoFocus />
      <img src="https://via.placeholder.com/150" alt="Imagen de ejemplo" />
    </div>
  );
};

export default EjemplosSintaxisJSX;
