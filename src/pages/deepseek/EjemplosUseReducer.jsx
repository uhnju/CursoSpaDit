import React, { useReducer } from "react";

/********************************************
 * ESCENARIO 1: Contador básico
 *******************************************/
// Este ejemplo muestra cómo usar `useReducer` para manejar un contador.
// Es útil cuando la lógica del estado es más compleja que un simple `useState`.

const counterReducer = (state, action) => {
  switch (action.type) {
    case "INCREMENT":
      return { count: state.count + 1 };
    case "DECREMENT":
      return { count: state.count - 1 };
    default:
      return state;
  }
};

const Counter = () => {
  const [state, dispatch] = useReducer(counterReducer, { count: 0 });

  return (
    <div>
      <p>Contador: {state.count}</p>
      <button onClick={() => dispatch({ type: "INCREMENT" })}>Incrementar</button>
      <button onClick={() => dispatch({ type: "DECREMENT" })}>Decrementar</button>
    </div>
  );
};

/********************************************
 * ESCENARIO 2: Formulario con múltiples campos
 *******************************************/
// Este ejemplo muestra cómo usar `useReducer` para manejar un formulario con múltiples campos.
// Es útil cuando el estado es un objeto complejo con múltiples propiedades.

const formReducer = (state, action) => {
  switch (action.type) {
    case "UPDATE_FIELD":
      return { ...state, [action.field]: action.value };
    case "RESET":
      return { name: "", email: "" };
    default:
      return state;
  }
};

const MultiFieldForm = () => {
  const [state, dispatch] = useReducer(formReducer, { name: "", email: "" });

  const handleChange = (e) => {
    dispatch({ type: "UPDATE_FIELD", field: e.target.name, value: e.target.value });
  };

  const handleReset = () => {
    dispatch({ type: "RESET" });
  };

  return (
    <div>
      <input
        type="text"
        name="name"
        value={state.name}
        onChange={handleChange}
        placeholder="Nombre"
      />
      <input
        type="email"
        name="email"
        value={state.email}
        onChange={handleChange}
        placeholder="Email"
      />
      <button onClick={handleReset}>Reiniciar</button>
      <p>Nombre: {state.name}</p>
      <p>Email: {state.email}</p>
    </div>
  );
};

/********************************************
 * ESCENARIO 3: Lista de tareas (To-Do)
 *******************************************/
// Este ejemplo muestra cómo usar `useReducer` para manejar una lista de tareas.
// Es útil cuando el estado implica una lista y acciones complejas como añadir o eliminar.

const todoReducer = (state, action) => {
  switch (action.type) {
    case "ADD_TODO":
      return [...state, { id: Date.now(), text: action.text, completed: false }];
    case "TOGGLE_TODO":
      return state.map((todo) =>
        todo.id === action.id ? { ...todo, completed: !todo.completed } : todo
      );
    case "DELETE_TODO":
      return state.filter((todo) => todo.id !== action.id);
    default:
      return state;
  }
};

const TodoList = () => {
  const [todos, dispatch] = useReducer(todoReducer, []);
  const [newTodo, setNewTodo] = React.useState("");

  const addTodo = () => {
    if (newTodo.trim()) {
      dispatch({ type: "ADD_TODO", text: newTodo });
      setNewTodo("");
    }
  };

  return (
    <div>
      <input
        type="text"
        value={newTodo}
        onChange={(e) => setNewTodo(e.target.value)}
        placeholder="Nueva tarea"
      />
      <button onClick={addTodo}>Añadir tarea</button>
      <ul>
        {todos.map((todo) => (
          <li key={todo.id}>
            <span style={{ textDecoration: todo.completed ? "line-through" : "none" }}>
              {todo.text}
            </span>
            <button onClick={() => dispatch({ type: "TOGGLE_TODO", id: todo.id })}>
              {todo.completed ? "Deshacer" : "Completar"}
            </button>
            <button onClick={() => dispatch({ type: "DELETE_TODO", id: todo.id })}>
              Eliminar
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

/********************************************
 * ESCENARIO 4: Carrito de compras
 *******************************************/
// Este ejemplo muestra cómo usar `useReducer` para manejar un carrito de compras.
// Es útil cuando necesitas manejar acciones como añadir, eliminar o actualizar ítems.

const cartReducer = (state, action) => {
  switch (action.type) {
    case "ADD_ITEM":
      return [...state, { id: Date.now(), name: action.name, quantity: 1 }];
    case "REMOVE_ITEM":
      return state.filter((item) => item.id !== action.id);
    case "UPDATE_QUANTITY":
      return state.map((item) =>
        item.id === action.id ? { ...item, quantity: action.quantity } : item
      );
    default:
      return state;
  }
};

const ShoppingCart = () => {
  const [cart, dispatch] = useReducer(cartReducer, []);
  const [itemName, setItemName] = React.useState("");

  const addItem = () => {
    if (itemName.trim()) {
      dispatch({ type: "ADD_ITEM", name: itemName });
      setItemName("");
    }
  };

  return (
    <div>
      <input
        type="text"
        value={itemName}
        onChange={(e) => setItemName(e.target.value)}
        placeholder="Nombre del ítem"
      />
      <button onClick={addItem}>Añadir al carrito</button>
      <ul>
        {cart.map((item) => (
          <li key={item.id}>
            {item.name} (Cantidad: {item.quantity})
            <button
              onClick={() =>
                dispatch({ type: "UPDATE_QUANTITY", id: item.id, quantity: item.quantity + 1 })
              }
            >
              +
            </button>
            <button
              onClick={() =>
                dispatch({ type: "UPDATE_QUANTITY", id: item.id, quantity: item.quantity - 1 })
              }
            >
              -
            </button>
            <button onClick={() => dispatch({ type: "REMOVE_ITEM", id: item.id })}>
              Eliminar
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

/********************************************
 * ESCENARIO 5: Autenticación simulada
 *******************************************/
// Este ejemplo muestra cómo usar `useReducer` para manejar el estado de autenticación.
// Es útil cuando necesitas manejar acciones como login y logout.

const authReducer = (state, action) => {
  switch (action.type) {
    case "LOGIN":
      return { ...state, isAuthenticated: true, user: action.user };
    case "LOGOUT":
      return { ...state, isAuthenticated: false, user: null };
    default:
      return state;
  }
};

const AuthExample = () => {
  const [state, dispatch] = useReducer(authReducer, { isAuthenticated: false, user: null });
  const [username, setUsername] = React.useState("");

  const handleLogin = () => {
    if (username.trim()) {
      dispatch({ type: "LOGIN", user: username });
    }
  };

  const handleLogout = () => {
    dispatch({ type: "LOGOUT" });
  };

  return (
    <div>
      {state.isAuthenticated ? (
        <div>
          <p>Bienvenido, {state.user}!</p>
          <button onClick={handleLogout}>Cerrar sesión</button>
        </div>
      ) : (
        <div>
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            placeholder="Nombre de usuario"
          />
          <button onClick={handleLogin}>Iniciar sesión</button>
        </div>
      )}
    </div>
  );
};

/********************************************
 * ESCENARIO 6: Temporizador con useReducer
 *******************************************/
// Este ejemplo muestra cómo usar `useReducer` para manejar un temporizador.
// Es útil cuando necesitas manejar múltiples acciones como iniciar, detener y reiniciar.

const timerReducer = (state, action) => {
  switch (action.type) {
    case "START":
      return { ...state, isRunning: true };
    case "STOP":
      return { ...state, isRunning: false };
    case "RESET":
      return { ...state, time: 0, isRunning: false };
    case "TICK":
      return { ...state, time: state.time + 1 };
    default:
      return state;
  }
};

const Timer = () => {
  const [state, dispatch] = useReducer(timerReducer, { time: 0, isRunning: false });

  React.useEffect(() => {
    let interval;
    if (state.isRunning) {
      interval = setInterval(() => {
        dispatch({ type: "TICK" });
      }, 1000);
    }
    return () => clearInterval(interval);
  }, [state.isRunning]);

  return (
    <div>
      <p>Tiempo: {state.time} segundos</p>
      <button onClick={() => dispatch({ type: "START" })}>Iniciar</button>
      <button onClick={() => dispatch({ type: "STOP" })}>Detener</button>
      <button onClick={() => dispatch({ type: "RESET" })}>Reiniciar</button>
    </div>
  );
};

/********************************************
 * ESCENARIO 7: Selector de temas (light/dark)
 *******************************************/
// Este ejemplo muestra cómo usar `useReducer` para manejar un selector de temas.
// Es útil cuando necesitas alternar entre diferentes opciones.

const themeReducer = (state, action) => {
  switch (action.type) {
    case "TOGGLE_THEME":
      return state === "light" ? "dark" : "light";
    default:
      return state;
  }
};

const ThemeSelector = () => {
  const [theme, dispatch] = useReducer(themeReducer, "light");

  return (
    <div style={{ background: theme === "light" ? "#fff" : "#333", color: theme === "light" ? "#000" : "#fff", padding: "20px" }}>
      <p>El tema actual es: {theme}</p>
      <button onClick={() => dispatch({ type: "TOGGLE_THEME" })}>Cambiar tema</button>
    </div>
  );
};

/********************************************
 * ESCENARIO 8: Gestión de errores
 *******************************************/
// Este ejemplo muestra cómo usar `useReducer` para manejar errores en una aplicación.
// Es útil cuando necesitas centralizar la lógica de manejo de errores.

const errorReducer = (state, action) => {
  switch (action.type) {
    case "SET_ERROR":
      return { ...state, error: action.error };
    case "CLEAR_ERROR":
      return { ...state, error: null };
    default:
      return state;
  }
};

const ErrorHandler = () => {
  const [state, dispatch] = useReducer(errorReducer, { error: null });

  const simulateError = () => {
    dispatch({ type: "SET_ERROR", error: "¡Algo salió mal!" });
  };

  const clearError = () => {
    dispatch({ type: "CLEAR_ERROR" });
  };

  return (
    <div>
      {state.error && <p style={{ color: "red" }}>{state.error}</p>}
      <button onClick={simulateError}>Simular error</button>
      <button onClick={clearError}>Limpiar error</button>
    </div>
  );
};

/********************************************
 * ESCENARIO 9: Drag and Drop (simulado)
 *******************************************/
// Este ejemplo muestra cómo usar `useReducer` para manejar un sistema de drag and drop.
// Es útil cuando necesitas manejar estados complejos como la posición de elementos.

const dragReducer = (state, action) => {
  switch (action.type) {
    case "START_DRAG":
      return { ...state, isDragging: true, startX: action.x, startY: action.y };
    case "STOP_DRAG":
      return { ...state, isDragging: false };
    case "MOVE":
      return { ...state, x: action.x, y: action.y };
    default:
      return state;
  }
};

const DragAndDrop = () => {
  const [state, dispatch] = useReducer(dragReducer, { isDragging: false, x: 0, y: 0, startX: 0, startY: 0 });

  const handleMouseMove = (e) => {
    if (state.isDragging) {
      dispatch({ type: "MOVE", x: e.clientX - state.startX, y: e.clientY - state.startY });
    }
  };

  return (
    <div
      style={{ width: "100%", height: "300px", border: "1px solid black", position: "relative" }}
      onMouseMove={handleMouseMove}
      onMouseUp={() => dispatch({ type: "STOP_DRAG" })}
    >
      <div
        style={{
          width: "100px",
          height: "100px",
          background: "blue",
          position: "absolute",
          left: state.x,
          top: state.y,
          cursor: state.isDragging ? "grabbing" : "grab",
        }}
        onMouseDown={(e) =>
          dispatch({ type: "START_DRAG", x: e.clientX - state.x, y: e.clientY - state.y })
        }
      >
        Arrástrame
      </div>
    </div>
  );
};

/********************************************
 * ESCENARIO 10: Juego de memoria (simulado)
 *******************************************/
// Este ejemplo muestra cómo usar `useReducer` para manejar un juego de memoria.
// Es útil cuando necesitas manejar estados complejos como el estado del juego.

const memoryReducer = (state, action) => {
  switch (action.type) {
    case "FLIP_CARD":
      return state.map((card, index) =>
        index === action.index ? { ...card, flipped: !card.flipped } : card
      );
    case "RESET":
      return state.map((card) => ({ ...card, flipped: false }));
    default:
      return state;
  }
};

const MemoryGame = () => {
  const [state, dispatch] = useReducer(memoryReducer, [
    { id: 1, flipped: false },
    { id: 2, flipped: false },
    { id: 3, flipped: false },
  ]);

  return (
    <div>
      <div style={{ display: "flex", gap: "10px" }}>
        {state.map((card, index) => (
          <div
            key={card.id}
            style={{
              width: "50px",
              height: "50px",
              background: card.flipped ? "green" : "gray",
              cursor: "pointer",
            }}
            onClick={() => dispatch({ type: "FLIP_CARD", index })}
          ></div>
        ))}
      </div>
      <button onClick={() => dispatch({ type: "RESET" })}>Reiniciar</button>
    </div>
  );
};

/********************************************
 * COMPONENTE PRINCIPAL: Muestra todos los escenarios
 *******************************************/
// Este componente centraliza todos los ejemplos para que el profesor pueda
// mostrarlos uno por uno en una única vista. Cada uno está comentado con su número y título.

const EjemplosUseReducer = () => {
  return (
    <div className="p-6 space-y-6">
      <h1 className="text-2xl font-bold">Ejemplos de useReducer en React</h1>

      <Counter />              {/* ESCENARIO 1: Contador básico */}
      <MultiFieldForm />       {/* ESCENARIO 2: Formulario con múltiples campos */}
      <TodoList />             {/* ESCENARIO 3: Lista de tareas (To-Do) */}
      <ShoppingCart />         {/* ESCENARIO 4: Carrito de compras */}
      <AuthExample />          {/* ESCENARIO 5: Autenticación simulada */}
      <Timer />                {/* ESCENARIO 6: Temporizador con useReducer */}
      <ThemeSelector />        {/* ESCENARIO 7: Selector de temas (light/dark) */}
      <ErrorHandler />         {/* ESCENARIO 8: Gestión de errores */}
      <DragAndDrop />          {/* ESCENARIO 9: Drag and Drop (simulado) */}
      <MemoryGame />           {/* ESCENARIO 10: Juego de memoria (simulado) */}
    </div>
  );
};

export default EjemplosUseReducer;