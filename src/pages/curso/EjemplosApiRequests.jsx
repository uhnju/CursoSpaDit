import React, { useState, useEffect } from "react";
import axios from "axios";

/********************************************
 * ESCENARIO 1: Petición GET con fetch
 *******************************************/
// Este primer escenario realiza una petición GET utilizando `fetch` para obtener un post
// desde una API externa. Se maneja un estado para los datos (`datos`) y otro para saber
// si aún está cargando (`cargando`). Cuando se obtiene la respuesta, se actualiza el estado.
// Es ideal para introducir `useEffect` como herramienta para ejecutar efectos secundarios
// (como peticiones a APIs) tras el montaje del componente.

const EjemploFetchGet = () => {
  const [datos, setDatos] = useState(null);
  const [cargando, setCargando] = useState(true);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts/1")
      .then((res) => res.json())
      .then((json) => {
        setDatos(json);
        setCargando(false);
      });
  }, []);

  return cargando ? <p>Cargando...</p> : <p>{datos.title}</p>;
};

/********************************************
 * ESCENARIO 2: Petición GET con axios
 *******************************************/
// Este segundo escenario hace exactamente lo mismo que el anterior, pero usando la
// librería externa `axios`. Esta librería facilita las peticiones HTTP y permite
// una sintaxis más limpia y legible. Muy útil cuando se trabaja con APIs complejas.

const EjemploAxiosGet = () => {
  const [datos, setDatos] = useState(null);
  const [cargando, setCargando] = useState(true);

  useEffect(() => {
    axios.get("https://jsonplaceholder.typicode.com/posts/2").then((res) => {
      setDatos(res.data);
      setCargando(false);
    });
  }, []);

  return cargando ? <p>Cargando...</p> : <p>{datos.title}</p>;
};

/********************************************
 * ESCENARIO 3: Petición POST con fetch
 *******************************************/
// Aquí se muestra cómo enviar datos a una API utilizando una petición POST con `fetch`.
// Se crea un nuevo post con un `title` y un `body`. Una vez que el servidor responde,
// mostramos el ID del nuevo recurso creado. Es un buen punto de partida para hablar de
// envíos de formularios o creación de recursos desde el frontend.

const EjemploFetchPost = () => {
  const [respuesta, setRespuesta] = useState(null);

  const enviarDatos = () => {
    fetch("https://jsonplaceholder.typicode.com/posts", {
      method: "POST",
      body: JSON.stringify({ title: "Nuevo Post", body: "Contenido del post" }),
      headers: { "Content-Type": "application/json" },
    })
      .then((res) => res.json())
      .then((datos) => setRespuesta(datos));
  };

  return (
    <div>
      <button onClick={enviarDatos}>Enviar POST</button>
      {respuesta && <p>Post creado con ID: {respuesta.id}</p>}
    </div>
  );
};

/********************************************
 * ESCENARIO 4: Petición POST con axios
 *******************************************/
// Similar al escenario anterior pero utilizando `axios` para realizar la petición POST.
// Se destaca cómo `axios.post` simplifica la escritura del cuerpo y los headers,
// lo que lo hace más conveniente en aplicaciones reales.

const EjemploAxiosPost = () => {
  const [respuesta, setRespuesta] = useState(null);

  const enviarDatos = async () => {
    const res = await axios.post("https://jsonplaceholder.typicode.com/posts", {
      title: "Nuevo Post",
      body: "Contenido del post",
    });
    setRespuesta(res.data);
  };

  return (
    <div>
      <button onClick={enviarDatos}>Enviar POST con Axios</button>
      {respuesta && <p>Post creado con ID: {respuesta.id}</p>}
    </div>
  );
};

/********************************************
 * ESCENARIO 5: Manejo de errores en una API
 *******************************************/
// Este último escenario demuestra cómo manejar errores cuando una petición falla.
// En este caso se solicita un post con un ID que no existe, lo que provoca un error.
// Se utiliza `.catch()` para capturar errores y mostrar un mensaje al usuario.
// Muy útil para enseñar buenas prácticas al consumir APIs en producción.

const EjemploFetchError = () => {
  const [datos, setDatos] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts/9999") // ID que no existe
      .then((res) => {
        if (!res.ok) throw new Error("Error al cargar los datos");
        return res.json();
      })
      .then(setDatos)
      .catch(setError);
  }, []);

  return error ? (
    <p style={{ color: "red" }}>{error.message}</p>
  ) : (
    <p>{datos?.title}</p>
  );
};

/********************************************
 * COMPONENTE PRINCIPAL: Muestra todos los escenarios
 *******************************************/
// Este componente centraliza todos los ejemplos para que el profesor pueda
// mostrarlos uno por uno en una única vista. Cada uno está comentado con su número y título.

const EjemplosPeticionesApi = () => {
  return (
    <>
      <h1>Ejemplos de peticiones a APIs</h1>
      <EjemploFetchGet />        {/* ESCENARIO 1: GET con fetch */}
      <EjemploAxiosGet />        {/* ESCENARIO 2: GET con axios */}
      <EjemploFetchPost />       {/* ESCENARIO 3: POST con fetch */}
      <EjemploAxiosPost />       {/* ESCENARIO 4: POST con axios */}
      <EjemploFetchError />      {/* ESCENARIO 5: Manejo de errores */}
    </>
  );
};

export default EjemplosPeticionesApi;
