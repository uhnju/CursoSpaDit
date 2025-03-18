import { useState } from "react";

// ✅ 1️⃣ Renderizado condicional con `if`
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

// ✅ 2️⃣ Renderizado condicional con `&&`
const ConditionalAnd = () => {
  const [showText, setShowText] = useState(false);

  return (
    <div>
      <button onClick={() => setShowText(!showText)}>Mostrar/Ocultar</button>
      {showText && <p>Este texto aparece cuando el estado es `true`</p>}
    </div>
  );
};

// ✅ 3️⃣ Renderizado condicional con `switch`
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

// ✅ 4️⃣ Renderizar un array condicionalmente
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

// ✅ 5️⃣ Renderizado condicional basado en un estado numérico
const ConditionalNumber = () => {
  const [count, setCount] = useState(0);

  return (
    <div>
      <p>{count === 0 ? "El contador está en cero" : `Contador: ${count}`}</p>
      <button onClick={() => setCount(count + 1)}>Incrementar</button>
    </div>
  );
};

// ✅ 6️⃣ Mostrar/Ocultar un componente condicionalmente
const ConditionalComponent = () => {
  const [visible, setVisible] = useState(true);

  return (
    <div>
      <button onClick={() => setVisible(!visible)}>Mostrar/Ocultar Componente</button>
      {visible && <p>Este componente puede mostrarse o esconderse</p>}
    </div>
  );
};

// ✅ 7️⃣ Renderizar con un operador ternario en JSX
const ConditionalTernary = () => {
  const [isAdmin, setIsAdmin] = useState(false);

  return (
    <div>
      <p>{isAdmin ? "Eres un administrador" : "Eres un usuario normal"}</p>
      <button onClick={() => setIsAdmin(!isAdmin)}>Cambiar rol</button>
    </div>
  );
};

// ✅ 8️⃣ Renderizar diferentes componentes condicionalmente
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

// ✅ 9️⃣ Renderizado condicional con estilos dinámicos
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

// ✅ 🔟 Renderizado condicional basado en una promesa simulada
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

// ✅ Componente principal con todos los ejemplos
const EjemplosRenderizadoCondicional = () => (
  <div style={{ padding: "20px", fontFamily: "Arial, sans-serif" }}>
    <h2>📘 10 Escenarios Útiles de Renderizado Condicional en React</h2>
    <ConditionalIf />
    <ConditionalAnd />
    <ConditionalSwitch />
    <ConditionalArray />
    <ConditionalNumber />
    <ConditionalComponent />
    <ConditionalTernary />
    <ConditionalComponentSwitch />
    <ConditionalStyles />
    <ConditionalAsync />
  </div>
);

export default EjemplosRenderizadoCondicional;
