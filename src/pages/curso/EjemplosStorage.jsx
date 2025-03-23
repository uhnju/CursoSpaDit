import React, { useState, useEffect } from "react";
// import Cookies from "js-cookie";

/********************************************
 * ESCENARIO 1: Uso básico de localStorage
 *******************************************/
// Almacenamos el valor introducido en un input en el localStorage.
// El valor persiste incluso después de recargar o cerrar el navegador.

const LocalStorageExample = () => {
  const [name, setName] = useState(localStorage.getItem("name") || "");

  useEffect(() => {
    localStorage.setItem("name", name);
  }, [name]);

  return (
    <div>
      <h3>1️⃣ Uso básico de localStorage</h3>
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
 * ESCENARIO 2: Uso de sessionStorage
 *******************************************/
// A diferencia de localStorage, los datos en sessionStorage
// se eliminan cuando se cierra el navegador o la pestaña.

const SessionStorageExample = () => {
  const [count, setCount] = useState(sessionStorage.getItem("count") || 0);

  useEffect(() => {
    sessionStorage.setItem("count", count);
  }, [count]);

  return (
    <div>
      <h3>2️⃣ Uso de sessionStorage</h3>
      <p>Contador: {count}</p>
      <button onClick={() => setCount(Number(count) + 1)}>Incrementar</button>
    </div>
  );
};

/********************************************
 * ESCENARIO 3: Almacenamiento de JSON
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
 * ESCENARIO 4: Eliminación de datos en localStorage
 *******************************************/
// Borra una clave específica del localStorage.
// Después de eliminar, recargamos la página para simular que los datos ya no existen.

const RemoveLocalStorageExample = () => {
  const removeData = () => {
    localStorage.removeItem("user");
    alert("Datos eliminados");
    window.location.reload();
  };

  return (
    <div>
      <h3>4️⃣ Eliminación de datos en localStorage</h3>
      <button onClick={removeData}>Eliminar datos de usuario</button>
    </div>
  );
};

/********************************************
 * ESCENARIO 5: Cookies con js-cookie (comentado)
 *******************************************/
// Este ejemplo requiere la librería externa `js-cookie`.
// Puedes descomentarlo si decides instalarla.

// const CookiesExample = () => {
//   const [cookieValue, setCookieValue] = useState(Cookies.get("theme") || "light");

//   const changeTheme = (theme) => {
//     Cookies.set("theme", theme, { expires: 7 });
//     setCookieValue(theme);
//   };

//   return (
//     <div>
//       <h3>5️⃣ Manejo de Cookies con js-cookie</h3>
//       <p>🌍 Tema actual: {cookieValue}</p>
//       <button onClick={() => changeTheme("light")}>Modo Claro</button>
//       <button onClick={() => changeTheme("dark")}>Modo Oscuro</button>
//     </div>
//   );
// };

/********************************************
 * ESCENARIO 6: Uso de IndexedDB
 *******************************************/
// IndexedDB es una base de datos más avanzada que permite guardar objetos de manera estructurada.
// Aquí se crea una base y se almacena una cadena de texto.

const IndexedDBExample = () => {
  const [data, setData] = useState("");

  useEffect(() => {
    const openDB = indexedDB.open("myDatabase", 1);

    openDB.onupgradeneeded = () => {
      const db = openDB.result;
      if (!db.objectStoreNames.contains("myStore")) {
        db.createObjectStore("myStore");
      }
    };

    openDB.onsuccess = () => {
      const db = openDB.result;
      const transaction = db.transaction("myStore", "readonly");
      const store = transaction.objectStore("myStore");
      const request = store.get("myData");

      request.onsuccess = () => {
        setData(request.result || "No hay datos");
      };
    };
  }, []);

  const saveToIndexedDB = () => {
    const openDB = indexedDB.open("myDatabase", 1);

    openDB.onsuccess = () => {
      const db = openDB.result;
      const transaction = db.transaction("myStore", "readwrite");
      const store = transaction.objectStore("myStore");
      store.put("Datos guardados en IndexedDB", "myData");
      alert("Datos guardados en IndexedDB");
    };
  };

  return (
    <div>
      <h3>6️⃣ Uso de IndexedDB</h3>
      <p>🗄️ Datos almacenados: {data}</p>
      <button onClick={saveToIndexedDB}>Guardar en IndexedDB</button>
    </div>
  );
};

/********************************************
 * ESCENARIO 7: Combinación de localStorage y sessionStorage
 *******************************************/
// Se manejan ambos tipos de almacenamiento al mismo tiempo.
// El dato "temporal" se guarda en sessionStorage y el "persistente" en localStorage.

const HybridStorageExample = () => {
  const [sessionData, setSessionData] = useState(sessionStorage.getItem("sessionData") || "");
  const [localData, setLocalData] = useState(localStorage.getItem("localData") || "");

  useEffect(() => {
    sessionStorage.setItem("sessionData", sessionData);
    localStorage.setItem("localData", localData);
  }, [sessionData, localData]);

  return (
    <div>
      <h3>7️⃣ Combinación de localStorage y sessionStorage</h3>
      <input
        type="text"
        placeholder="Dato temporal"
        value={sessionData}
        onChange={(e) => setSessionData(e.target.value)}
      />
      <input
        type="text"
        placeholder="Dato persistente"
        value={localData}
        onChange={(e) => setLocalData(e.target.value)}
      />
      <p>SessionStorage: {sessionData} | LocalStorage: {localData}</p>
    </div>
  );
};

/********************************************
 * ESCENARIO 8: Hook personalizado para localStorage
 *******************************************/
// Este hook encapsula el patrón de lectura y escritura en localStorage
// y puede reutilizarse fácilmente en diferentes componentes.

const useLocalStorage = (key, initialValue) => {
  const [value, setValue] = useState(() => {
    return localStorage.getItem(key) || initialValue;
  });

  useEffect(() => {
    localStorage.setItem(key, value);
  }, [key, value]);

  return [value, setValue];
};

const CustomHookStorageExample = () => {
  const [theme, setTheme] = useLocalStorage("appTheme", "light");

  return (
    <div>
      <h3>8️⃣ Hook personalizado para localStorage</h3>
      <p>🌈 Tema actual: {theme}</p>
      <button onClick={() => setTheme("light")}>Modo Claro</button>
      <button onClick={() => setTheme("dark")}>Modo Oscuro</button>
    </div>
  );
};

/********************************************
 * COMPONENTE PRINCIPAL: Muestra todos los ejemplos
 *******************************************/
// Este componente centraliza todos los escenarios relacionados con el almacenamiento
// local en el navegador. Cada uno cubre una técnica distinta: localStorage, sessionStorage,
// JSON, IndexedDB y hooks personalizados.

const EjemplosStorage = () => (
  <div className="p-6 space-y-6">
    <h1 className="text-2xl font-bold">Ejemplos de almacenamiento en React</h1>

    <LocalStorageExample />         {/* ESCENARIO 1 */}
    <SessionStorageExample />       {/* ESCENARIO 2 */}
    <LocalStorageJSONExample />     {/* ESCENARIO 3 */}
    <RemoveLocalStorageExample />   {/* ESCENARIO 4 */}
    {/* <CookiesExample /> */}       {/* ESCENARIO 5 (desactivado por defecto) */}
    <IndexedDBExample />            {/* ESCENARIO 6 */}
    <HybridStorageExample />        {/* ESCENARIO 7 */}
    <CustomHookStorageExample />    {/* ESCENARIO 8 */}
  </div>
);

export default EjemplosStorage;
