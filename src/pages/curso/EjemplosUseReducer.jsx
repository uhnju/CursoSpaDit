import { useReducer, createContext, useContext } from "react";

// ✅ 1️⃣ Contador avanzado con diferentes acciones
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
      <p>Contador: {state.count}</p>
      <button onClick={() => dispatch({ type: "increment" })}>+</button>
      <button onClick={() => dispatch({ type: "decrement" })}>-</button>
      <button onClick={() => dispatch({ type: "reset" })}>Reset</button>
    </div>
  );
};

// ✅ 2️⃣ Alternar tema (Dark/Light Mode)
const themeReducer = (state) => ({ darkMode: !state.darkMode });
const ThemeComponent = () => {
  const [state, dispatch] = useReducer(themeReducer, { darkMode: false });

  return (
    <div style={{ background: state.darkMode ? "#333" : "#fff", color: state.darkMode ? "#fff" : "#000", padding: 20 }}>
      <p>Modo {state.darkMode ? "Oscuro" : "Claro"}</p>
      <button onClick={() => dispatch()}>Alternar Tema</button>
    </div>
  );
};

// ✅ 3️⃣ Manejo de formulario con múltiples campos
const formReducer = (state, action) => ({ ...state, [action.name]: action.value });
const FormComponent = () => {
  const [state, dispatch] = useReducer(formReducer, { name: "", email: "" });

  return (
    <div>
      <input name="name" value={state.name} onChange={(e) => dispatch(e.target)} placeholder="Nombre" />
      <input name="email" value={state.email} onChange={(e) => dispatch(e.target)} placeholder="Email" />
      <p>Nombre: {state.name}</p>
      <p>Email: {state.email}</p>
    </div>
  );
};

// ✅ 4️⃣ Carrito de compras
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
      <button onClick={() => dispatch({ type: "add", item: "Producto 1" })}>Agregar Producto</button>
      <button onClick={() => dispatch({ type: "remove", item: "Producto 1" })}>Eliminar Producto</button>
      <p>Carrito: {cart.join(", ") || "Vacío"}</p>
    </div>
  );
};

// ✅ 5️⃣ Lista de tareas (To-Do List)
const todoReducer = (state, action) => {
  switch (action.type) {
    case "add":
      return [...state, action.task];
    case "remove":
      return state.filter((_, index) => index !== action.index);
    default:
      return state;
  }
};
const TodoComponent = () => {
  const [tasks, dispatch] = useReducer(todoReducer, []);
  let input;

  return (
    <div>
      <input ref={(node) => (input = node)} />
      <button onClick={() => { dispatch({ type: "add", task: input.value }); input.value = ""; }}>Agregar</button>
      <ul>
        {tasks.map((task, index) => (
          <li key={index}>
            {task} <button onClick={() => dispatch({ type: "remove", index })}>X</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

// ✅ 6️⃣ Autenticación (Login/Logout)
const authReducer = (state, action) => {
  switch (action.type) {
    case "login":
      return { user: "Usuario123", isAuthenticated: true };
    case "logout":
      return { user: null, isAuthenticated: false };
    default:
      return state;
  }
};
const AuthComponent = () => {
  const [state, dispatch] = useReducer(authReducer, { user: null, isAuthenticated: false });

  return (
    <div>
      <p>{state.isAuthenticated ? `Bienvenido, ${state.user}` : "No estás autenticado"}</p>
      <button onClick={() => dispatch({ type: state.isAuthenticated ? "logout" : "login" })}>
        {state.isAuthenticated ? "Cerrar sesión" : "Iniciar sesión"}
      </button>
    </div>
  );
};

// ✅ 7️⃣ Historial de cambios con "deshacer"
const historyReducer = (state, action) => {
  switch (action.type) {
    case "add":
      return { history: [...state.history, action.item], current: action.item };
    case "undo":
      return state.history.length > 1
        ? { history: state.history.slice(0, -1), current: state.history[state.history.length - 2] }
        : state;
    default:
      return state;
  }
};
const HistoryComponent = () => {
  const [state, dispatch] = useReducer(historyReducer, { history: ["Inicio"], current: "Inicio" });

  return (
    <div>
      <button onClick={() => dispatch({ type: "add", item: "Nueva acción" })}>Realizar Acción</button>
      <button onClick={() => dispatch({ type: "undo" })}>Deshacer</button>
      <p>Actual: {state.current}</p>
    </div>
  );
};

// ✅ 8️⃣ Temporizador con Start/Stop
const timerReducer = (state, action) => {
  switch (action.type) {
    case "start":
      return { ...state, running: true };
    case "stop":
      return { ...state, running: false };
    case "tick":
      return state.running ? { ...state, time: state.time + 1 } : state;
    default:
      return state;
  }
};
const TimerComponent = () => {
  const [state, dispatch] = useReducer(timerReducer, { time: 0, running: false });

  return (
    <div>
      <p>Tiempo: {state.time}s</p>
      <button onClick={() => dispatch({ type: "start" })}>Iniciar</button>
      <button onClick={() => dispatch({ type: "stop" })}>Detener</button>
    </div>
  );
};

// ✅ 9️⃣ Notificaciones globales
const notificationReducer = (state, action) => {
  switch (action.type) {
    case "notify":
      return { message: action.message };
    case "clear":
      return { message: "" };
    default:
      return state;
  }
};
const NotificationComponent = () => {
  const [state, dispatch] = useReducer(notificationReducer, { message: "" });

  return (
    <div>
      <button onClick={() => dispatch({ type: "notify", message: "Nueva Notificación" })}>Enviar Notificación</button>
      <button onClick={() => dispatch({ type: "clear" })}>Limpiar</button>
      {state.message && <p>Notificación: {state.message}</p>}
    </div>
  );
};

// ✅ Componente principal con todos los ejemplos
const EjemplosUseReducer = () => (
  <div style={{ padding: "20px", fontFamily: "Arial, sans-serif" }}>
    <h2>📘 10 Escenarios Útiles de useReducer</h2>
    <CounterComponent />
    <ThemeComponent />
    <FormComponent />
    <CartComponent />
    <TodoComponent />
    <AuthComponent />
    <HistoryComponent />
    <TimerComponent />
    <NotificationComponent />
  </div>
);

export default EjemplosUseReducer;
