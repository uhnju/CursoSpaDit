import React, { Suspense, lazy, useState } from "react";

// 🔹 Ejemplo 6: Lazy Loading (Carga diferida de un componente)
const PanelAdmin = lazy(() => import("./PanelAdmin"));

function RenderizadoCondicional() {
  const [estado, setEstado] = useState("online");
  const [esAdmin, setEsAdmin] = useState(false);
  const [mostrar, setMostrar] = useState(true);
  const [usuarios] = useState([
    { id: 1, nombre: "Ana", activo: true },
    { id: 2, nombre: "Carlos", activo: false },
    { id: 3, nombre: "Marta", activo: true },
  ]);

  return (
    <div style={{ padding: "20px", fontFamily: "Arial" }}>
      <h1>Ejemplos de Renderizado Condicional en React</h1>

      {/* 🔹 Ejemplo 1: Operador ternario */}
      <h2>1️⃣ Operador ternario (? :)</h2>
      <p>{esAdmin ? "Bienvenido, Administrador" : "Bienvenido, Usuario"}</p>

      {/* 🔹 Ejemplo 2: if antes del return */}
      <h2>2️⃣ if antes del return</h2>
      {(() => {
        let mensaje;
        if (esAdmin) {
          mensaje = "Tienes acceso al panel de administración.";
        } else {
          mensaje = "No tienes acceso a la administración.";
        }
        return <p>{mensaje}</p>;
      })()}

      {/* 🔹 Ejemplo 3: && (Renderizado condicional sin else) */}
      <h2>3️⃣ && para mostrar solo si la condición es true</h2>
      {esAdmin && <p>🔐 Puedes modificar la configuración.</p>}

      {/* 🔹 Ejemplo 4: Ocultar con null */}
      <h2>4️⃣ Retornar null para ocultar algo</h2>
      {mostrar ? <p>🔔 Notificación activa</p> : null}
      <button onClick={() => setMostrar(!mostrar)}>
        {mostrar ? "Ocultar" : "Mostrar"} notificación
      </button>

      {/* 🔹 Ejemplo 5: Renderizado basado en switch */}
      <h2>5️⃣ Switch para múltiples condiciones</h2>
      <p>
        Estado del usuario:{" "}
        {(() => {
          switch (estado) {
            case "online":
              return "🟢 En línea";
            case "offline":
              return "🔴 Desconectado";
            case "ausente":
              return "🟡 Ausente";
            default:
              return "❓ Estado desconocido";
          }
        })()}
      </p>
      <button onClick={() => setEstado("online")}>Online</button>
      <button onClick={() => setEstado("offline")}>Offline</button>
      <button onClick={() => setEstado("ausente")}>Ausente</button>

      {/* 🔹 Ejemplo 6: Filtrar listas dinámicamente */}
      <h2>6️⃣ Filtrado de listas antes de renderizar</h2>
      <ul>
        {usuarios
          .filter((usuario) => usuario.activo) // Solo usuarios activos
          .map((usuario) => (
            <li key={usuario.id}>{usuario.nombre}</li>
          ))}
      </ul>

      {/* 🔹 Ejemplo 7: Lazy Loading con Suspense */}
      <h2>7️⃣ Lazy Loading con Suspense</h2>
      {esAdmin && (
        <Suspense fallback={<p>Cargando panel...</p>}>
          <PanelAdmin />
        </Suspense>
      )}

      {/* Botón para alternar Admin/User */}
      <button onClick={() => setEsAdmin(!esAdmin)}>
        {esAdmin ? "Cambiar a Usuario" : "Cambiar a Administrador"}
      </button>
    </div>
  );
}

export default RenderizadoCondicional;
