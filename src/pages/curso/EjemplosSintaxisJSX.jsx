import React from "react";

// Componente principal que ilustra todas las características de la sintaxis JSX
const EjemplosSintaxisJSX = () => {
  // Variables y expresiones en JSX
  const name = "React";
  const number = 42;
  const isReactAwesome = true;
  const user = {
    firstName: "John",
    lastName: "Doe",
  };

  // Estilos en línea usando JSX (deben pasarse como un objeto)
  const inlineStyle = {
    color: "blue",
    fontSize: "20px",
    fontWeight: "bold",
  };

  return (
    <div>
      {/* Uso de expresiones dentro de JSX con llaves {} */}
      <h1>Hola, {name}!</h1>
      <p>El número es: {number}</p>
      <p>¿React es asombroso? {isReactAwesome ? "Sí" : "No"}</p>
      <p>Nombre completo: {user.firstName} {user.lastName}</p>
      
      {/* JSX no permite if-else directamente, pero se pueden usar operadores ternarios */}
      <p>{isReactAwesome ? "Definitivamente sí." : "Tal vez no."}</p>
      
      {/* Aplicando estilos en línea */}
      <p style={inlineStyle}>Este es un texto con estilos en línea.</p>

      {/* Clases CSS en JSX */}
      <p className="text-primary">Este es un texto con clase CSS.</p>
      
      {/* JSX requiere que los elementos estén envueltos en un solo nodo padre */}
      <> {/* Fragmento React (Fragment) para evitar nodos innecesarios */}
        <h2>Encabezado dentro de un Fragment</h2>
        <p>Esto forma parte del mismo Fragment.</p>
      </>

      {/* JSX permite comentarios, pero deben ir dentro de llaves */}
      {/* Este es un comentario dentro de JSX */}

      {/* Renderizado condicional con && (operador lógico AND) */}
      {isReactAwesome && <p>¡React es increíble!</p>}
      
      {/* Listas y el uso de la key en elementos renderizados dinámicamente */}
      <ul>
        {["Manzana", "Banana", "Cereza"].map((fruit, index) => (
          <li key={index}>{fruit}</li>
        ))}
      </ul>

      {/* JSX y atributos en etiquetas HTML (camelCase para atributos de eventos y propiedades) */}
      <input type="text" placeholder="Escribe aquí" autoFocus />
      <img src="https://via.placeholder.com/150" alt="Imagen de ejemplo" />
    </div>
  );
};

export default EjemplosSintaxisJSX;
