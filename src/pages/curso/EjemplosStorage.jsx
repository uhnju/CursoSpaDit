import React, { useState, useEffect } from "react";

/********************************************
 * ESCENARIO 1: Guardar datos en localStorage
 *******************************************/
// Este ejemplo muestra cómo guardar datos en `localStorage`.
// Es útil cuando necesitas persistir datos en el navegador incluso después de cerrar la pestaña.

const GuardarEnLocalStorage = () => {
  const guardar = () => {
    localStorage.setItem("nombre", "Juan");
    alert("Datos guardados en localStorage");
  };

  return <button onClick={guardar}>Guardar en localStorage</button>;
};

/********************************************
 * ESCENARIO 2: Leer datos de localStorage
 *******************************************/
// Este ejemplo muestra cómo leer datos de `localStorage`.
// Es útil cuando necesitas recuperar datos previamente guardados.

const LeerDeLocalStorage = () => {
  const [nombre, setNombre] = useState("");

  const leer = () => {
    const nombreGuardado = localStorage.getItem("nombre");
    if (nombreGuardado) {
      setNombre(nombreGuardado);
    } else {
      alert("No hay datos guardados en localStorage");
    }
  };

  return (
    <div>
      <button onClick={leer}>Leer de localStorage</button>
      {nombre && <p>Nombre guardado: {nombre}</p>}
    </div>
  );
};

/********************************************
 * ESCENARIO 3: Eliminar datos de localStorage
 *******************************************/
// Este ejemplo muestra cómo eliminar datos de `localStorage`.
// Es útil cuando necesitas borrar datos específicos del almacenamiento.

const EliminarDeLocalStorage = () => {
  const eliminar = () => {
    localStorage.removeItem("nombre");
    alert("Datos eliminados de localStorage");
  };

  return <button onClick={eliminar}>Eliminar de localStorage</button>;
};

/********************************************
 * ESCENARIO 4: Limpiar todo el localStorage
 *******************************************/
// Este ejemplo muestra cómo limpiar todo el contenido de `localStorage`.
// Es útil cuando necesitas borrar todos los datos almacenados.

const LimpiarLocalStorage = () => {
  const limpiar = () => {
    localStorage.clear();
    alert("localStorage limpiado");
  };

  return <button onClick={limpiar}>Limpiar localStorage</button>;
};

/********************************************
 * ESCENARIO 5: Sincronizar estado con localStorage
 *******************************************/
// Este ejemplo muestra cómo sincronizar el estado de un componente con `localStorage`.
// Es útil cuando necesitas mantener el estado persistente entre recargas de la página.

const SincronizarConLocalStorage = () => {
  const [nombre, setNombre] = useState(localStorage.getItem("nombre") || "");

  useEffect(() => {
    localStorage.setItem("nombre", nombre);
  }, [nombre]);

  return (
    <div>
      <input
        type="text"
        value={nombre}
        onChange={(e) => setNombre(e.target.value)}
        placeholder="Escribe tu nombre"
      />
      <p>Nombre guardado: {nombre}</p>
    </div>
  );
};

/********************************************
 * ESCENARIO 6: Almacenamiento de JSON
 *******************************************/
// Guardamos y recuperamos un objeto (usuario) usando JSON.stringify y JSON.parse.
// localStorage solo puede guardar strings, por lo que hay que convertir.

const AlmacenarJSONEnLocalStorage = () => {
  const [usuario, setUsuario] = useState(() => {
    return JSON.parse(localStorage.getItem("usuario")) || { nombre: "", edad: "" };
  });

  useEffect(() => {
    localStorage.setItem("usuario", JSON.stringify(usuario));
  }, [usuario]);

  return (
    <div>
      <h3>Almacenamiento de JSON en localStorage</h3>
      <input
        type="text"
        placeholder="Nombre"
        value={usuario.nombre}
        onChange={(e) => setUsuario({ ...usuario, nombre: e.target.value })}
      />
      <input
        type="number"
        placeholder="Edad"
        value={usuario.edad}
        onChange={(e) => setUsuario({ ...usuario, edad: e.target.value })}
      />
      <p>Nombre: {usuario.nombre}, Edad: {usuario.edad}</p>
    </div>
  );
};

/********************************************
 * COMPONENTE PRINCIPAL: Muestra todos los escenarios
 *******************************************/
// Este componente centraliza todos los ejemplos para que el profesor pueda
// mostrarlos uno por uno en una única vista. Cada uno está comentado con su número y título.

const EjemplosAlmacenamiento = () => {
  return (
    <>
      <h1>Ejemplos de Almacenamiento</h1>
      <GuardarEnLocalStorage />         {/* ESCENARIO 1: Guardar datos en localStorage */}
      <LeerDeLocalStorage />            {/* ESCENARIO 2: Leer datos de localStorage */}
      <EliminarDeLocalStorage />        {/* ESCENARIO 3: Eliminar datos de localStorage */}
      <LimpiarLocalStorage />           {/* ESCENARIO 4: Limpiar todo el localStorage */}
      <SincronizarConLocalStorage />    {/* ESCENARIO 5: Sincronizar estado con localStorage */}
      <AlmacenarJSONEnLocalStorage />   {/* ESCENARIO 6: Almacenamiento de JSON */}
    </>
  );
};

export default EjemplosAlmacenamiento;
