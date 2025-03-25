import { useReducer, createContext, useContext } from "react";

/********************************************
 * ESCENARIO 1: Contador avanzado con useReducer
 ********************************************/
// En este escenario se simula un contador que permite:
// - Incrementar
// - Decrementar
// - Reiniciar a cero
//
// Se usa `useReducer` en vez de `useState` para gestionar distintos tipos
// de acciones que afectan a un mismo estado (el contador).
// Esta es una buena introducción a `useReducer`, ya que muestra
// cómo organizar la lógica en un reducer.

const counterReducer = (state, action) => {
 switch (action.type) {
  case "increment":
   return { count: state.count + 1 };
  case "decrement":
   return { count: state.count - 1 };
  case "reset":
   return { count: 0 };
  default:
   return state;
 }
};

const CounterComponent = () => {
 const [state, dispatch] = useReducer(counterReducer, { count: 0 });

 return (
  <div>
   <h3>1️⃣ Contador avanzado</h3>
   <p>Contador: {state.count}</p>
   <button onClick={() => dispatch({ type: "increment" })}>+</button>
   <button onClick={() => dispatch({ type: "decrement" })}>-</button>
   <button onClick={() => dispatch({ type: "reset" })}>Reset</button>
  </div>
 );
};

/********************************************
 * ESCENARIO 2: Alternar tema (Dark/Light)
 ********************************************/
// Este escenario simula un cambio de tema global en una app.
// En lugar de guardar un booleano con `useState`, usamos un reducer simple
// que invierte el estado actual cuando se dispara una acción.

const themeReducer = (state) => ({ darkMode: !state.darkMode });

const ThemeComponent = () => {
 const [state, dispatch] = useReducer(themeReducer, { darkMode: false });

 return (
  <div
   style={{
    background: state.darkMode ? "#333" : "#fff",
    color: state.darkMode ? "#fff" : "#000",
    padding: 20,
   }}
  >
   <h3>2️⃣ Alternar Tema</h3>
   <p>Modo: {state.darkMode ? "Oscuro" : "Claro"}</p>
   <button onClick={() => dispatch()}>Cambiar Tema</button>
  </div>
 );
};

/********************************************
 * ESCENARIO 3: Manejo de formularios
 ********************************************/
// Este escenario muestra cómo manejar múltiples campos de un formulario
// con `useReducer`, lo cual es ideal cuando tenemos muchos inputs.
// En lugar de múltiples `useState`, el reducer actualiza la propiedad
// que cambió usando `action.name` y `action.value`.

const formReducer = (state, action) => ({ ...state, [action.name]: action.value });

const FormComponent = () => {
 const [state, dispatch] = useReducer(formReducer, { name: "", email: "" });

 return (
  <div>
   <h3>3️⃣ Formulario controlado con useReducer</h3>
   <input
    name="name"
    value={state.name}
    onChange={(e) => dispatch(e.target)}
    placeholder="Nombre"
   />
   <input
    name="email"
    value={state.email}
    onChange={(e) => dispatch(e.target)}
    placeholder="Email"
   />
   <p>Nombre: {state.name}</p>
   <p>Email: {state.email}</p>
  </div>
 );
};

/********************************************
 * ESCENARIO 4: Carrito de compras
 ********************************************/
// Simulamos un carrito que puede:
// - Añadir productos
// - Eliminar productos
//
// Se usa un array como estado y un reducer que añade o filtra los productos
// según la acción.

const cartReducer = (state, action) => {
 switch (action.type) {
  case "add":
   return [...state, action.item];
  case "remove":
   return state.filter((item) => item !== action.item);
  default:
   return state;
 }
};

const CartComponent = () => {
 const [cart, dispatch] = useReducer(cartReducer, []);

 return (
  <div>
   <h3>4️⃣ Carrito de compras</h3>
   <button onClick={() => dispatch({ type: "add", item: "Producto 1" })}>Agregar Producto</button>
   <button onClick={() => dispatch({ type: "remove", item: "Producto 1" })}>Eliminar Producto</button>
   <p>Carrito: {cart.join(", ") || "Vacío"}</p>
  </div>
 );
};

/********************************************
 * Componente principal que muestra los ejemplos
 ********************************************/

const EjemplosUseReducer = () => (
 <div style={{ padding: "20px", fontFamily: "Arial, sans-serif" }}>
  <h2>📘 Ejemplos didácticos de useReducer en React</h2>
  <CounterComponent />
  <ThemeComponent />
  <FormComponent />
  <CartComponent />
  {/* Puedes seguir añadiendo el resto aquí con el mismo estilo */}
 </div>
);

export default EjemplosUseReducer;

