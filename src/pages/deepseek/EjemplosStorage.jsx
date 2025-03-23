import React, { useState, useEffect } from "react";

/********************************************
 * ESCENARIO 1: Guardar datos en localStorage
 *******************************************/
// Este ejemplo muestra cómo guardar datos en `localStorage`.
// Es útil cuando necesitas persistir datos en el navegador incluso después de cerrar la pestaña.

const SaveToLocalStorageExample = () => {
  const handleSave = () => {
    localStorage.setItem("nombre", "Juan");
    alert("Datos guardados en localStorage");
  };

  return <button onClick={handleSave}>Guardar en localStorage</button>;
};

/********************************************
 * ESCENARIO 2: Leer datos de localStorage
 *******************************************/
// Este ejemplo muestra cómo leer datos de `localStorage`.
// Es útil cuando necesitas recuperar datos previamente guardados.

const ReadFromLocalStorageExample = () => {
  const [name, setName] = useState("");

  const handleRead = () => {
    const storedName = localStorage.getItem("nombre");
    if (storedName) {
      setName(storedName);
    } else {
      alert("No hay datos guardados en localStorage");
    }
  };

  return (
    <div>
      <button onClick={handleRead}>Leer de localStorage</button>
      {name && <p>Nombre guardado: {name}</p>}
    </div>
  );
};

/********************************************
 * ESCENARIO 3: Eliminar datos de localStorage
 *******************************************/
// Este ejemplo muestra cómo eliminar datos de `localStorage`.
// Es útil cuando necesitas borrar datos específicos del almacenamiento.

const RemoveFromLocalStorageExample = () => {
  const handleRemove = () => {
    localStorage.removeItem("nombre");
    alert("Datos eliminados de localStorage");
  };

  return <button onClick={handleRemove}>Eliminar de localStorage</button>;
};

/********************************************
 * ESCENARIO 4: Limpiar todo el localStorage
 *******************************************/
// Este ejemplo muestra cómo limpiar todo el contenido de `localStorage`.
// Es útil cuando necesitas borrar todos los datos almacenados.

const ClearLocalStorageExample = () => {
  const handleClear = () => {
    localStorage.clear();
    alert("localStorage limpiado");
  };

  return <button onClick={handleClear}>Limpiar localStorage</button>;
};

/********************************************
 * ESCENARIO 5: Guardar datos en sessionStorage
 *******************************************/
// Este ejemplo muestra cómo guardar datos en `sessionStorage`.
// Es útil cuando necesitas persistir datos solo durante la sesión actual del navegador.

const SaveToSessionStorageExample = () => {
  const handleSave = () => {
    sessionStorage.setItem("nombre", "Ana");
    alert("Datos guardados en sessionStorage");
  };

  return <button onClick={handleSave}>Guardar en sessionStorage</button>;
};

/********************************************
 * ESCENARIO 6: Leer datos de sessionStorage
 *******************************************/
// Este ejemplo muestra cómo leer datos de `sessionStorage`.
// Es útil cuando necesitas recuperar datos guardados durante la sesión actual.

const ReadFromSessionStorageExample = () => {
  const [name, setName] = useState("");

  const handleRead = () => {
    const storedName = sessionStorage.getItem("nombre");
    if (storedName) {
      setName(storedName);
    } else {
      alert("No hay datos guardados en sessionStorage");
    }
  };

  return (
    <div>
      <button onClick={handleRead}>Leer de sessionStorage</button>
      {name && <p>Nombre guardado: {name}</p>}
    </div>
  );
};

/********************************************
 * ESCENARIO 7: Eliminar datos de sessionStorage
 *******************************************/
// Este ejemplo muestra cómo eliminar datos de `sessionStorage`.
// Es útil cuando necesitas borrar datos específicos del almacenamiento de sesión.

const RemoveFromSessionStorageExample = () => {
  const handleRemove = () => {
    sessionStorage.removeItem("nombre");
    alert("Datos eliminados de sessionStorage");
  };

  return <button onClick={handleRemove}>Eliminar de sessionStorage</button>;
};

/********************************************
 * ESCENARIO 8: Limpiar todo el sessionStorage
 *******************************************/
// Este ejemplo muestra cómo limpiar todo el contenido de `sessionStorage`.
// Es útil cuando necesitas borrar todos los datos almacenados en la sesión.

const ClearSessionStorageExample = () => {
  const handleClear = () => {
    sessionStorage.clear();
    alert("sessionStorage limpiado");
  };

  return <button onClick={handleClear}>Limpiar sessionStorage</button>;
};

/********************************************
 * ESCENARIO 9: Sincronizar estado con localStorage
 *******************************************/
// Este ejemplo muestra cómo sincronizar el estado de un componente con `localStorage`.
// Es útil cuando necesitas mantener el estado persistente entre recargas de la página.

const SyncWithLocalStorageExample = () => {
  const [name, setName] = useState(localStorage.getItem("nombre") || "");

  useEffect(() => {
    localStorage.setItem("nombre", name);
  }, [name]);

  return (
    <div>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Escribe tu nombre"
      />
      <p>Nombre guardado: {name}</p>
    </div>
  );
};

/********************************************
 * ESCENARIO 10: Sincronizar estado con sessionStorage
 *******************************************/
// Este ejemplo muestra cómo sincronizar el estado de un componente con `sessionStorage`.
// Es útil cuando necesitas mantener el estado durante la sesión actual.

const SyncWithSessionStorageExample = () => {
  const [name, setName] = useState(sessionStorage.getItem("nombre") || "");

  useEffect(() => {
    sessionStorage.setItem("nombre", name);
  }, [name]);

  return (
    <div>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Escribe tu nombre"
      />
      <p>Nombre guardado: {name}</p>
    </div>
  );
};

/********************************************
 * COMPONENTE PRINCIPAL: Muestra todos los escenarios
 *******************************************/
// Este componente centraliza todos los ejemplos para que el profesor pueda
// mostrarlos uno por uno en una única vista. Cada uno está comentado con su número y título.

const EjemplosStorage = () => {
  return (
    <div className="p-6 space-y-6">
      <h1 className="text-2xl font-bold">Ejemplos de Almacenamiento en React</h1>

      <SaveToLocalStorageExample />          {/* ESCENARIO 1: Guardar datos en localStorage */}
      <ReadFromLocalStorageExample />        {/* ESCENARIO 2: Leer datos de localStorage */}
      <RemoveFromLocalStorageExample />      {/* ESCENARIO 3: Eliminar datos de localStorage */}
      <ClearLocalStorageExample />           {/* ESCENARIO 4: Limpiar todo el localStorage */}
      <SaveToSessionStorageExample />        {/* ESCENARIO 5: Guardar datos en sessionStorage */}
      <ReadFromSessionStorageExample />      {/* ESCENARIO 6: Leer datos de sessionStorage */}
      <RemoveFromSessionStorageExample />    {/* ESCENARIO 7: Eliminar datos de sessionStorage */}
      <ClearSessionStorageExample />         {/* ESCENARIO 8: Limpiar todo el sessionStorage */}
      <SyncWithLocalStorageExample />        {/* ESCENARIO 9: Sincronizar estado con localStorage */}
      <SyncWithSessionStorageExample />      {/* ESCENARIO 10: Sincronizar estado con sessionStorage */}
    </div>
  );
};

export default EjemplosStorage;