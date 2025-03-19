import React, { useState, useEffect } from "react";
// import Cookies from "js-cookie";

// ✅ 1️⃣ Uso básico de localStorage
const LocalStorageExample = () => {
  const [name, setName] = useState(localStorage.getItem("name") || "");

  useEffect(() => {
    localStorage.setItem("name", name);
  }, [name]);

  return (
    <div>
      <h3>1️⃣ Uso básico de localStorage</h3>
      <input type="text" value={name} onChange={(e) => setName(e.target.value)} placeholder="Escribe tu nombre" />
      <p>Nombre guardado: {name}</p>
    </div>
  );
};

// ✅ 2️⃣ Uso de sessionStorage (datos que se borran al cerrar el navegador)
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

// ✅ 3️⃣ Manejo de JSON en localStorage
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
      <input type="text" placeholder="Nombre" value={user.name} onChange={(e) => setUser({ ...user, name: e.target.value })} />
      <input type="number" placeholder="Edad" value={user.age} onChange={(e) => setUser({ ...user, age: e.target.value })} />
      <p>Nombre: {user.name}, Edad: {user.age}</p>
    </div>
  );
};

// ✅ 4️⃣ Eliminación de datos en localStorage
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

// ✅ 5️⃣ Uso de Cookies con js-cookie
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

// ✅ 6️⃣ Manejo de IndexedDB (Almacenamiento avanzado)
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

// ✅ 7️⃣ Persistencia combinada: localStorage + sessionStorage
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
      <input type="text" placeholder="Dato temporal" value={sessionData} onChange={(e) => setSessionData(e.target.value)} />
      <input type="text" placeholder="Dato persistente" value={localData} onChange={(e) => setLocalData(e.target.value)} />
      <p>SessionStorage: {sessionData} | LocalStorage: {localData}</p>
    </div>
  );
};

// ✅ 8️⃣ Implementación de un Hook para localStorage
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

// ✅ Componente principal con todos los ejemplos
const EjemplosStorage = () => (
  <div style={{ padding: "20px", fontFamily: "Arial, sans-serif" }}>
    <h2>📘 8 Ejemplos de Uso del Storage en React</h2>
    <LocalStorageExample />
    <SessionStorageExample />
    <LocalStorageJSONExample />
    <RemoveLocalStorageExample />
    <CookiesExample />
    <IndexedDBExample />
    <HybridStorageExample />
    <CustomHookStorageExample />
  </div>
);

export default EjemplosStorage;
