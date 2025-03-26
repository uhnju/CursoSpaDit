import React, { useState } from "react";

/********************************************
 * ESCENARIO 1: Contador
 *******************************************/
// Este ejemplo es el clásico contador que incrementa su valor al hacer clic en un botón.
// Se inicializa un estado `contador` con valor 0, y cada vez que el usuario pulsa el botón,
// se actualiza este estado sumando 1. Es ideal para introducir `useState` y mostrar
// cómo React renderiza automáticamente cuando el estado cambia.

const Contador = () => {
  const [contador, setContador] = useState(0);

  return (
    <div>
      <p>Contador: {contador}</p>
      <button onClick={() => setContador(contador + 1)}>Incrementar</button>
    </div>
  );
};

/********************************************
 * ESCENARIO 2: Contador con valor inicial y límite
 *******************************************/
// Aquí el contador recibe un valor inicial y tiene un límite superior. Cuando el contador alcanza
// el límite, no se puede incrementar más.

const ContadorConLimite = () => {
  const [contador, setContador] = useState(0);
  const limite = 10;

  return (
    <div>
      <p>Contador: {contador}</p>
      <button
        onClick={() => setContador(contador + 1)}
        disabled={contador >= limite}
      >
        Incrementar
      </button>
      {contador >= limite && <p>¡Límite alcanzado!</p>}
    </div>
  );
};

/********************************************
 * ESCENARIO 3: Input controlado
 *******************************************/
// Aquí se muestra cómo controlar el valor de un input con React.
// A medida que el usuario escribe, el evento `onChange` actualiza el estado `texto`,
// que a su vez se refleja en la interfaz. Este patrón se llama "input controlado".

const EntradaFormulario = () => {
  const [texto, setTexto] = useState("");

  return (
    <div>
      <input value={texto} onChange={(e) => setTexto(e.target.value)} />
      <p>Escribiste: {texto}</p>
    </div>
  );
};

/********************************************
 * ESCENARIO 4: Cambio dinámico de estilo
 *******************************************/
// Utilizando el estado `color`, se puede cambiar dinámicamente el estilo de un elemento,
// en este caso, el color del texto. Es una forma sencilla de introducir la idea de estilos reactivos.

const EstiloDinamico = () => {
  const [color, setColor] = useState("black");

  return (
    <div>
      <p style={{ color }}>Este texto cambia de color</p>
      <button onClick={() => setColor(color === "black" ? "red" : "black")}>
        Cambiar Color
      </button>
    </div>
  );
};

/********************************************
 * ESCENARIO 5: Lista de compras
 *******************************************/
// Este componente muestra cómo trabajar con arrays como estado.
// Cada vez que el usuario pulsa el botón, se añade un nuevo ítem a la lista utilizando el operador spread (`...`).
// Es fundamental mostrar que el estado no se modifica directamente, sino que se genera una nueva copia.

const ListaDeLaCompra = () => {
  const [productos, setProductos] = useState([]);

  const añadirProducto = () => {
    setProductos([...productos, `Producto ${productos.length + 1}`]);
  };

  return (
    <div>
      <button onClick={añadirProducto}>Añadir producto</button>
      <ul>
        {productos.map((producto, indice) => (
          <li key={indice}>{producto}</li>
        ))}
      </ul>
    </div>
  );
};

/********************************************
 * ESCENARIO 6: Lista de tareas
 *******************************************/
// Este componente muestra cómo trabajar con arrays como estado.
// Cada vez que el usuario pulsa el botón, se añade un nuevo ítem a la lista utilizando el operador spread (`...`).
// Es fundamental mostrar que el estado no se modifica directamente, sino que se genera una nueva copia.

const ListaDeTareas = () => {
  const [tareas, setTareas] = useState([]);
  const [nuevaTarea, setNuevaTarea] = useState("");

  const añadirTarea = () => {
    if (nuevaTarea.trim() !== "") {
      setTareas([...tareas, nuevaTarea]);
      setNuevaTarea("");
    }
  };

  return (
    <div>
      <input
        type="text"
        value={nuevaTarea}
        onChange={(e) => setNuevaTarea(e.target.value)}
      />
      <button onClick={añadirTarea}>Añadir tarea</button>
      <ul>
        {tareas.map((tarea, indice) => (
          <li key={indice}>{tarea}</li>
        ))}
      </ul>
    </div>
  );
};

/********************************************
 * ESCENARIO 7: Mostrar/Ocultar contenido
 *******************************************/
// Se usa un booleano para mostrar u ocultar un bloque de contenido.
// Este patrón se utiliza mucho para desplegables, secciones colapsables, modales, etc.

const AlternarVisibilidad = () => {
  const [visible, setVisible] = useState(true);

  return (
    <div>
      <button onClick={() => setVisible(!visible)}>
        {visible ? "Ocultar" : "Mostrar"}
      </button>
      {visible && <p>Este contenido es visible pero puede ocultarse</p>}
    </div>
  );
};

/********************************************
 * ESCENARIO 8: Generar número aleatorio
 *******************************************/
// Este ejemplo ilustra cómo usar funciones dentro de `setState`.
// Al pulsar el botón, se genera un número aleatorio con `Math.random()`
// y se actualiza el estado `numero`, provocando un nuevo render.

const NumeroAleatorio = () => {
  const [numero, setNumero] = useState(Math.random());

  return (
    <div>
      <p>Número aleatorio: {numero}</p>
      <button onClick={() => setNumero(Math.random())}>Generar</button>
    </div>
  );
};

/********************************************
 * ESCENARIO 9: Formulario con múltiples campos
 *******************************************/
// Este formulario maneja múltiples campos dentro de un único objeto de estado (`formulario`).
// Se utiliza la técnica de "spread operator" para mantener las demás propiedades del objeto intactas
// cuando solo se actualiza una de ellas. Es esencial en formularios reales con varios inputs.

const FormularioMultiple = () => {
  const [formulario, setFormulario] = useState({ nombre: "", correo: "" });

  return (
    <div>
      <input
        type="text"
        placeholder="Nombre"
        value={formulario.nombre}
        onChange={(e) =>
          setFormulario({ ...formulario, nombre: e.target.value })
        }
      />
      <input
        type="email"
        placeholder="Correo electrónico"
        value={formulario.correo}
        onChange={(e) =>
          setFormulario({ ...formulario, correo: e.target.value })
        }
      />
      <p>
        Nombre: {formulario.nombre}, Correo: {formulario.correo}
      </p>
    </div>
  );
};

/********************************************
 * COMPONENTE PRINCIPAL: Muestra todos los escenarios
 *******************************************/
// Este componente centraliza todos los ejemplos para que el profesor pueda
// mostrarlos uno por uno en una única vista. Cada uno está comentado con su número y título.

const EjemplosUseState = () => {
  return (
    <>
      <h1>Ejemplos de useState</h1>
      <Contador />                  {/* ESCENARIO 1: Contador */}
      <ContadorConLimite />         {/* ESCENARIO 2: Contador con límite */}
      <EntradaFormulario />         {/* ESCENARIO 3: Input controlado */}
      <EstiloDinamico />            {/* ESCENARIO 4: Cambio dinámico de estilo */}
      <ListaDeLaCompra />           {/* ESCENARIO 5: Lista de compras */}
      <ListaDeTareas />             {/* ESCENARIO 6: Lista de tareas */}
      <AlternarVisibilidad />       {/* ESCENARIO 7: Mostrar/Ocultar contenido */}
      <NumeroAleatorio />           {/* ESCENARIO 8: Generar número aleatorio */}
      <FormularioMultiple />        {/* ESCENARIO 9: Formulario con múltiples campos */}
    </>
  );
};

export default EjemplosUseState;
