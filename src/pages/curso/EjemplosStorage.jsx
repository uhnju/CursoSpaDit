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
 * ESCENARIO 5: Sincronizar estado con localStorage
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
 * ESCENARIO 6: Almacenamiento de JSON
 *******************************************/
// Guardamos y recuperamos un objeto (usuario) usando JSON.stringify y JSON.parse.
// localStorage solo puede guardar strings, por lo que hay que convertir.

const LocalStorageJSONExample = () => {
 const [user, setUser] = useState(() => {
  return JSON.parse(localStorage.getItem("user")) || { name: "", age: "" };
 });

 useEffect(() => {
  localStorage.setItem("user", JSON.stringify(user));
 }, [user]);

 return (
  <div>
   <h3>3️⃣ Almacenamiento de JSON en localStorage</h3>
   <input
    type="text"
    placeholder="Nombre"
    value={user.name}
    onChange={(e) => setUser({ ...user, name: e.target.value })}
   />
   <input
    type="number"
    placeholder="Edad"
    value={user.age}
    onChange={(e) => setUser({ ...user, age: e.target.value })}
   />
   <p>Nombre: {user.name}, Edad: {user.age}</p>
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

   <SaveToLocalStorageExample />     {/* ESCENARIO 1: Guardar datos en localStorage */}
   <ReadFromLocalStorageExample />    {/* ESCENARIO 2: Leer datos de localStorage */}
   <RemoveFromLocalStorageExample />   {/* ESCENARIO 3: Eliminar datos de localStorage */}
   <ClearLocalStorageExample />     {/* ESCENARIO 4: Limpiar todo el localStorage */}
   <SyncWithLocalStorageExample />    {/* ESCENARIO 5: Sincronizar estado con localStorage */}
   <LocalStorageJSONExample />   {/* ESCENARIO 6: Almacenamiento de JSON */}
  </div>
 );
};

export default EjemplosStorage;
