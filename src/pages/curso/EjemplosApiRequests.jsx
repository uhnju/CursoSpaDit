import { useState, useEffect } from "react";
import axios from "axios";

// ✅ 1️⃣ Petición GET con `fetch`
const FetchExample = () => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts/1")
      .then((res) => res.json())
      .then((json) => {
        setData(json);
        setLoading(false);
      });
  }, []);

  return loading ? <p>Cargando...</p> : <p>{data.title}</p>;
};

// ✅ 2️⃣ Petición GET con `axios`
const AxiosGetExample = () => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios.get("https://jsonplaceholder.typicode.com/posts/2").then((res) => {
      setData(res.data);
      setLoading(false);
    });
  }, []);

  return loading ? <p>Cargando...</p> : <p>{data.title}</p>;
};

// ✅ 3️⃣ Petición POST con `fetch`
const FetchPostExample = () => {
  const [response, setResponse] = useState(null);

  const sendData = () => {
    fetch("https://jsonplaceholder.typicode.com/posts", {
      method: "POST",
      body: JSON.stringify({ title: "Nuevo Post", body: "Contenido del post" }),
      headers: { "Content-Type": "application/json" },
    })
      .then((res) => res.json())
      .then((data) => setResponse(data));
  };

  return (
    <div>
      <button onClick={sendData}>Enviar POST</button>
      {response && <p>Post creado con ID: {response.id}</p>}
    </div>
  );
};

// ✅ 4️⃣ Petición POST con `axios`
const AxiosPostExample = () => {
  const [response, setResponse] = useState(null);

  const sendData = async () => {
    const res = await axios.post("https://jsonplaceholder.typicode.com/posts", {
      title: "Nuevo Post",
      body: "Contenido del post",
    });
    setResponse(res.data);
  };

  return (
    <div>
      <button onClick={sendData}>Enviar POST con Axios</button>
      {response && <p>Post creado con ID: {response.id}</p>}
    </div>
  );
};

// ✅ 5️⃣ Manejo de errores en una API
const FetchWithErrorHandling = () => {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts/9999") // ID que no existe
      .then((res) => {
        if (!res.ok) throw new Error("Error al cargar los datos");
        return res.json();
      })
      .then(setData)
      .catch(setError);
  }, []);

  return error ? <p style={{ color: "red" }}>{error.message}</p> : <p>{data?.title}</p>;
};

// ✅ Componente principal con todos los ejemplos
const EjemplosApiRequests = () => (
  <div style={{ padding: "20px", fontFamily: "Arial, sans-serif" }}>
    <h2>📘 5 Escenarios Útiles de Peticiones a APIs en React</h2>
    <FetchExample />
    <AxiosGetExample />
    <FetchPostExample />
    <AxiosPostExample />
    <FetchWithErrorHandling />
  </div>
);

export default EjemplosApiRequests;
