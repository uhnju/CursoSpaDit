import React, { useState, useEffect } from "react";

/********************************************
 * ESCENARIO 1: Solicitud GET básica
 *******************************************/
// Este ejemplo muestra cómo hacer una solicitud GET a una API para obtener datos.
// Es útil cuando necesitas cargar datos desde un servidor.

const GetRequestExample = () => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts/1")
      .then((response) => response.json())
      .then((json) => {
        setData(json);
        setLoading(false);
      });
  }, []);

  if (loading) return <p>Cargando...</p>;

  return (
    <div>
      <p>Título: {data.title}</p>
      <p>Cuerpo: {data.body}</p>
    </div>
  );
};

/********************************************
 * ESCENARIO 2: Solicitud POST
 *******************************************/
// Este ejemplo muestra cómo hacer una solicitud POST para enviar datos a una API.
// Es útil cuando necesitas enviar datos a un servidor, como un formulario.

const PostRequestExample = () => {
  const [response, setResponse] = useState(null);

  const handleSubmit = () => {
    fetch("https://jsonplaceholder.typicode.com/posts", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        title: "foo",
        body: "bar",
        userId: 1,
      }),
    })
      .then((response) => response.json())
      .then((json) => setResponse(json));
  };

  return (
    <div>
      <button onClick={handleSubmit}>Enviar datos</button>
      {response && <p>Respuesta: {JSON.stringify(response)}</p>}
    </div>
  );
};

/********************************************
 * ESCENARIO 3: Solicitud PUT
 *******************************************/
// Este ejemplo muestra cómo hacer una solicitud PUT para actualizar datos en una API.
// Es útil cuando necesitas actualizar un recurso existente en el servidor.

const PutRequestExample = () => {
  const [response, setResponse] = useState(null);

  const handleUpdate = () => {
    fetch("https://jsonplaceholder.typicode.com/posts/1", {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        id: 1,
        title: "foo actualizado",
        body: "bar actualizado",
        userId: 1,
      }),
    })
      .then((response) => response.json())
      .then((json) => setResponse(json));
  };

  return (
    <div>
      <button onClick={handleUpdate}>Actualizar datos</button>
      {response && <p>Respuesta: {JSON.stringify(response)}</p>}
    </div>
  );
};

/********************************************
 * ESCENARIO 4: Solicitud DELETE
 *******************************************/
// Este ejemplo muestra cómo hacer una solicitud DELETE para eliminar un recurso en una API.
// Es útil cuando necesitas eliminar un recurso del servidor.

const DeleteRequestExample = () => {
  const [response, setResponse] = useState(null);

  const handleDelete = () => {
    fetch("https://jsonplaceholder.typicode.com/posts/1", {
      method: "DELETE",
    }).then(() => setResponse("Recurso eliminado"));
  };

  return (
    <div>
      <button onClick={handleDelete}>Eliminar recurso</button>
      {response && <p>{response}</p>}
    </div>
  );
};

/********************************************
 * ESCENARIO 5: Manejo de errores en solicitudes
 *******************************************/
// Este ejemplo muestra cómo manejar errores en las solicitudes a una API.
// Es útil cuando necesitas capturar y mostrar errores al usuario.

const ErrorHandlingExample = () => {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/invalid-url")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Error en la solicitud");
        }
        return response.json();
      })
      .then((json) => setData(json))
      .catch((error) => setError(error.message));
  }, []);

  if (error) return <p>Error: {error}</p>;
  if (!data) return <p>Cargando...</p>;

  return <p>Datos: {JSON.stringify(data)}</p>;
};

/********************************************
 * ESCENARIO 6: Solicitud con autenticación
 *******************************************/
// Este ejemplo muestra cómo hacer una solicitud a una API que requiere autenticación.
// Es útil cuando necesitas enviar un token de autenticación en las cabeceras.

const AuthenticatedRequestExample = () => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const token = "tu-token-de-autenticación";
    fetch("https://api.ejemplo.com/datos-protegidos", {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
      .then((response) => response.json())
      .then((json) => {
        setData(json);
        setLoading(false);
      });
  }, []);

  if (loading) return <p>Cargando...</p>;

  return <p>Datos protegidos: {JSON.stringify(data)}</p>;
};

/********************************************
 * ESCENARIO 7: Solicitud con parámetros de consulta
 *******************************************/
// Este ejemplo muestra cómo hacer una solicitud GET con parámetros de consulta.
// Es útil cuando necesitas filtrar o paginar datos desde una API.

const QueryParamsRequestExample = () => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const queryParams = new URLSearchParams({ userId: 1 });
    fetch(`https://jsonplaceholder.typicode.com/posts?${queryParams}`)
      .then((response) => response.json())
      .then((json) => {
        setData(json);
        setLoading(false);
      });
  }, []);

  if (loading) return <p>Cargando...</p>;

  return <p>Datos filtrados: {JSON.stringify(data)}</p>;
};

/********************************************
 * ESCENARIO 8: Solicitud con carga perezosa (Lazy Loading)
 *******************************************/
// Este ejemplo muestra cómo cargar datos de una API solo cuando el usuario lo solicita.
// Es útil para mejorar el rendimiento de la aplicación.

const LazyLoadingRequestExample = () => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);

  const loadData = () => {
    setLoading(true);
    fetch("https://jsonplaceholder.typicode.com/posts/1")
      .then((response) => response.json())
      .then((json) => {
        setData(json);
        setLoading(false);
      });
  };

  return (
    <div>
      <button onClick={loadData}>Cargar datos</button>
      {loading && <p>Cargando...</p>}
      {data && <p>Datos: {JSON.stringify(data)}</p>}
    </div>
  );
};

/********************************************
 * ESCENARIO 9: Solicitud con manejo de tiempo de espera (Timeout)
 *******************************************/
// Este ejemplo muestra cómo manejar un tiempo de espera en una solicitud a una API.
// Es útil cuando necesitas evitar que una solicitud se quede colgada indefinidamente.

const TimeoutRequestExample = () => {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setError("Tiempo de espera agotado");
    }, 5000);

    fetch("https://jsonplaceholder.typicode.com/posts/1")
      .then((response) => response.json())
      .then((json) => {
        clearTimeout(timeout);
        setData(json);
      })
      .catch(() => setError("Error en la solicitud"));
  }, []);

  if (error) return <p>Error: {error}</p>;
  if (!data) return <p>Cargando...</p>;

  return <p>Datos: {JSON.stringify(data)}</p>;
};

/********************************************
 * ESCENARIO 10: Solicitud con cancelación
 *******************************************/
// Este ejemplo muestra cómo cancelar una solicitud a una API.
// Es útil cuando el usuario abandona una página antes de que la solicitud se complete.

const CancelableRequestExample = () => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const controller = new AbortController();
    const { signal } = controller;

    setLoading(true);
    fetch("https://jsonplaceholder.typicode.com/posts/1", { signal })
      .then((response) => response.json())
      .then((json) => {
        setData(json);
        setLoading(false);
      })
      .catch((error) => {
        if (error.name === "AbortError") {
          console.log("Solicitud cancelada");
        } else {
          console.error("Error en la solicitud", error);
        }
      });

    return () => controller.abort();
  }, []);

  if (loading) return <p>Cargando...</p>;

  return <p>Datos: {JSON.stringify(data)}</p>;
};

/********************************************
 * COMPONENTE PRINCIPAL: Muestra todos los escenarios
 *******************************************/
// Este componente centraliza todos los ejemplos para que el profesor pueda
// mostrarlos uno por uno en una única vista. Cada uno está comentado con su número y título.

const EjemplosApiRequests = () => {
  return (
    <div className="p-6 space-y-6">
      <h1 className="text-2xl font-bold">Ejemplos de Solicitudes a APIs en React</h1>

      <GetRequestExample />          {/* ESCENARIO 1: Solicitud GET básica */}
      <PostRequestExample />         {/* ESCENARIO 2: Solicitud POST */}
      <PutRequestExample />          {/* ESCENARIO 3: Solicitud PUT */}
      <DeleteRequestExample />       {/* ESCENARIO 4: Solicitud DELETE */}
      <ErrorHandlingExample />       {/* ESCENARIO 5: Manejo de errores en solicitudes */}
      <AuthenticatedRequestExample /> {/* ESCENARIO 6: Solicitud con autenticación */}
      <QueryParamsRequestExample />  {/* ESCENARIO 7: Solicitud con parámetros de consulta */}
      <LazyLoadingRequestExample />  {/* ESCENARIO 8: Solicitud con carga perezosa */}
      <TimeoutRequestExample />      {/* ESCENARIO 9: Solicitud con manejo de tiempo de espera */}
      <CancelableRequestExample />   {/* ESCENARIO 10: Solicitud con cancelación */}
    </div>
  );
};

export default EjemplosApiRequests;