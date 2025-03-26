import { useReducer, createContext, useContext } from "react";

/********************************************
 * ESCENARIO 1: Contador avanzado con useReducer
 *******************************************/
// En este escenario se simula un contador que permite:
// - Incrementar
// - Decrementar
// - Reiniciar a cero
//
// Se usa `useReducer` en vez de `useState` para gestionar distintos tipos
// de acciones que afectan a un mismo estado (el contador).
// Esta es una buena introducción a `useReducer`, ya que muestra
// cómo organizar la lógica en un reducer.

const reducerContador = (estado, accion) => {
  switch (accion.tipo) {
    case "incrementar":
      return { contador: estado.contador + 1 };
    case "decrementar":
      return { contador: estado.contador - 1 };
    case "reiniciar":
      return { contador: 0 };
    default:
      return estado;
  }
};

const ContadorAvanzado = () => {
  const [estado, dispatch] = useReducer(reducerContador, { contador: 0 });

  return (
    <div>
      <h3>1️⃣ Contador avanzado</h3>
      <p>Contador: {estado.contador}</p>
      <button onClick={() => dispatch({ tipo: "incrementar" })}>+</button>
      <button onClick={() => dispatch({ tipo: "decrementar" })}>-</button>
      <button onClick={() => dispatch({ tipo: "reiniciar" })}>Reiniciar</button>
    </div>
  );
};

/********************************************
 * ESCENARIO 2: Alternar tema (Dark/Light)
 *******************************************/
// Este escenario simula un cambio de tema global en una app.
// En lugar de guardar un booleano con `useState`, usamos un reducer simple
// que invierte el estado actual cuando se dispara una acción.

const reducerTema = (estado) => ({ modoOscuro: !estado.modoOscuro });

const AlternarTema = () => {
  const [estado, dispatch] = useReducer(reducerTema, { modoOscuro: false });

  return (
    <div
      style={{
        background: estado.modoOscuro ? "#333" : "#fff",
        color: estado.modoOscuro ? "#fff" : "#000",
        padding: 20,
      }}
    >
      <h3>2️⃣ Alternar Tema</h3>
      <p>Modo: {estado.modoOscuro ? "Oscuro" : "Claro"}</p>
      <button onClick={() => dispatch()}>Cambiar Tema</button>
    </div>
  );
};

/********************************************
 * ESCENARIO 3: Manejo de formularios
 *******************************************/
// Este escenario muestra cómo manejar múltiples campos de un formulario
// con `useReducer`, lo cual es ideal cuando tenemos muchos inputs.
// En lugar de múltiples `useState`, el reducer actualiza la propiedad
// que cambió usando `accion.name` y `accion.value`.

const reducerFormulario = (estado, accion) => ({
  ...estado,
  [accion.name]: accion.value,
});

const FormularioControlado = () => {
  const [estado, dispatch] = useReducer(reducerFormulario, {
    nombre: "",
    correo: "",
  });

  return (
    <div>
      <h3>3️⃣ Formulario controlado con useReducer</h3>
      <input
        name="nombre"
        value={estado.nombre}
        onChange={(e) => dispatch(e.target)}
        placeholder="Nombre"
      />
      <input
        name="correo"
        value={estado.correo}
        onChange={(e) => dispatch(e.target)}
        placeholder="Correo electrónico"
      />
      <p>Nombre: {estado.nombre}</p>
      <p>Correo: {estado.correo}</p>
    </div>
  );
};


/********************************************
 * COMPONENTE PRINCIPAL: Muestra todos los escenarios
 *******************************************/
// Este componente agrupa todos los escenarios didácticos del hook useReducer
// para que puedan demostrarse uno a uno en clase.

const EjemplosUseReducer = () => (
  <>
    <h1>Ejemplos didácticos de useReducer</h1>
    <ContadorAvanzado />         {/* ESCENARIO 1: Contador avanzado */}
    <AlternarTema />            {/* ESCENARIO 2: Alternar tema oscuro/claro */}
    <FormularioControlado />    {/* ESCENARIO 3: Formulario con múltiples campos */}
  </>
);

export default EjemplosUseReducer;
