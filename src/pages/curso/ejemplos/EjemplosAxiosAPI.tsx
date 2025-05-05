import { useState, useEffect } from "react";
import { axiosAPI, Utilidades } from "@dit/spad-rdit_library";

/********************************************
 * ESCENARIO 1: Petición GET con axios
 *******************************************/

interface RespuestaJSON {
  status: string;
  mensaje: string;
  respuesta: Respuesta;
}

interface Respuesta {
  empleados: Empleado[];
}

interface Empleado {
  nif: string;
  grupo: Grupo;
  nivel: number;
  nombre: string;
}

enum Grupo {
  A1 = "A1",
  A2 = "A2",
  C1 = "C1",
  C2 = "C2",
}

const EjemploAxiosGet = () => {
  const [datos, setDatos] = useState<RespuestaJSON | null>(null);
  const [cargando, setCargando] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const urlEmpleados = Utilidades.getUrl("/wlpl/SPAD-CURS/Empleados");

  const peticionGET = async () => {
    setDatos(null);
    setCargando(true);
    setError(null);
    try {
      const params = { parametro: "valor" };
      const data = await axiosAPI.get<RespuestaJSON>(urlEmpleados, params)
      setDatos(data);
    } catch (err) {
      console.log(err);
      setError(`Ocurrió un error al obtener los datos. ${err}`);
    } finally {
      setCargando(false);
    }
  };

  useEffect(() => {
    peticionGET();
  }, []);

  return (
    <div>
      {cargando && <p>Cargando...</p>}
      {error && <p style={{ color: "red" }}>{error}</p>}
      {datos && <pre>{JSON.stringify(datos, null, 2)}</pre>}
    </div>
  );

};


/********************************************
 * ESCENARIO 2: Petición POST con axios
 *******************************************/

const EjemploAxiosPost = () => {
  const [datos, setDatos] = useState<RespuestaJSON | null>(null);

  const urlEmpleados = Utilidades.getUrl("/wlpl/SPAD-CURS/Empleados");

  const peticionPOST = async () => {
    setDatos(null);
    try {
      const formData = new FormData();
      formData.append("accion", "update");
      formData.append("nif", "19835758Y");
      formData.append("grupo", "A2");
      formData.append("nivel", "24");
      formData.append("nombre", "Maríafe de Triana");
      const data = await axiosAPI.post<RespuestaJSON>(urlEmpleados, formData);
      setDatos(data);
    } catch (err) {
      console.log(err)
    }
  };

  return (
    <div>
      <button onClick={peticionPOST}>Enviar POST con Axios</button>
      {datos && <pre>{JSON.stringify(datos, null, 2)}</pre>}
    </div>
  );
};

/********************************************
 * ESCENARIO 3: Manejo de errores en una API
 *******************************************/

const EjemploAxiosError = () => {
  const [datos, setDatos] = useState<RespuestaJSON | null>(null);
  const [error, setError] = useState<string | null>(null);

  const urlEmpleados = Utilidades.getUrl("/wlpl/SPAD-CURS/Empleados");

  const peticionPOST = async () => {
    setDatos(null);
    try {
      const formData = new FormData();
      formData.append("accion", "update");
      formData.append("nif", "19835758Y");
      formData.append("grupo", "A2");
      formData.append("nivel", "24");
      formData.append("nombre", "Maríafe de Triana");
      const data = await axiosAPI.post<RespuestaJSON>(urlEmpleados, formData);
      if (data.status === "KO") {
        setError(data.mensaje);
      } else {
        setDatos(data);
      }
    } catch (err) {
      console.log(err)
      setError(`Ocurrió un error al obtener los datos. ${err}`);
    }
  };

  return (
    <div>
      <button onClick={peticionPOST}>Enviar POST con Axios</button>
      {error && <p style={{ color: "red" }}>{error}</p>}
      {datos && <pre>{JSON.stringify(datos, null, 2)}</pre>}
    </div>
  );
};

/********************************************
 * COMPONENTE PRINCIPAL: Muestra todos los escenarios
 *******************************************/

const EjemplosAxiosAPI = () => {
  return (
    <>
      <h1>Ejemplos de peticiones con AxiosInstance</h1>
      <EjemploAxiosGet />        {/* ESCENARIO 1: GET con axios */}
      <EjemploAxiosPost />       {/* ESCENARIO 2: POST con axios */}
      <EjemploAxiosError />      {/* ESCENARIO 3: Manejo de errores en una API */}
    </>
  );
};

export default EjemplosAxiosAPI;
