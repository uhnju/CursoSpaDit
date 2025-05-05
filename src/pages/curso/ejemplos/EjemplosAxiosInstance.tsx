import { useState, useEffect } from "react";
import { axiosInstance, Utilidades } from "@dit/spad-rdit_library";

/********************************************
 * ESCENARIO 1: Petición GET con axios
 *******************************************/

const EjemploAxiosGet = () => {
  const [datos, setDatos] = useState(null);
  const [cargando, setCargando] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const urlEmpleados = Utilidades.getUrl("/wlpl/SPAD-CURS/Empleados");

  const peticionGET = async () => {
    setDatos(null);
    setCargando(true);
    setError(null);
    try {
      const params = { parametro: "valor" };
      const response = await axiosInstance.get(urlEmpleados, { params })
      setDatos(response.data);
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
  const [datos, setDatos] = useState(null);

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
      const response = await axiosInstance.post(urlEmpleados, formData);
      setDatos(response.data);
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
  const [datos, setDatos] = useState(null);
  const [error, setError] = useState<string | null>(null);

  const urlEmpleados = Utilidades.getUrl("/wlpl/SPAD-CURS/Empleados");

  const peticionPOST = async () => {
    setDatos(null);
    setError(null);
    try {
      const formData = new FormData();
      formData.append("accion", "update");
      formData.append("nif", "19835758Y");
      formData.append("grupo", "A2");
      formData.append("nivel", "24");
      formData.append("nombre", "Maríafe de Triana");
      const response = await axiosInstance.post(urlEmpleados, formData);
      const data = response.data;
      if (data.status === "KO") {
        setError(data.mensaje);
      } else {
        setDatos(data);
      }
    } catch (err){
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

const EjemplosAxiosInstance = () => {
  return (
    <>
      <h1>Ejemplos de peticiones con AxiosInstance</h1>
      <EjemploAxiosGet />        {/* ESCENARIO 1: GET con axios */}
      <EjemploAxiosPost />       {/* ESCENARIO 2: POST con axios */}
      <EjemploAxiosError />      {/* ESCENARIO 3: Manejo de errores en una API */}
    </>
  );
};

export default EjemplosAxiosInstance;
