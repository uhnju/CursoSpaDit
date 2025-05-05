import { useState, useEffect } from "react";

/********************************************
 * ESCENARIO 1: Guardar datos en localStorage
 *******************************************/

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

const AlmacenarJSONEnLocalStorage = () => {
  const [usuario, setUsuario] = useState(() => {
    return JSON.parse(localStorage.getItem("usuario") || "{ nombre: '', edad: '' }");
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

const EjemplosStorage = () => {
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

export default EjemplosStorage;
