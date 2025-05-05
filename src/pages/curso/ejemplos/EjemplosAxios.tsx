import { useState } from "react";
import { axiosAPI, Utilidades, Button, InputText, Alert } from "@dit/spad-rdit_library";

interface RespuestaJSON {
  status: string;
  mensaje: string;
  respuesta: Respuesta;
}

interface Respuesta {
  personas: Persona[];
}

interface Persona {
  nombre: string;
  edad: number;
  email: string;
  lenguajes: string[];
}

const EjemploAxios = () => {
  const urlInicial = Utilidades.getUrl("/wlpl/SPAD-RDIT/EjemploRESTService");
  const [url, setUrl] = useState(urlInicial);
  const [datos, setDatos] = useState<RespuestaJSON | null>(null);
  const [errorPeticion, setErrorPeticion] = useState<string>("");

  const realizarPeticionGET = async () => {
    setErrorPeticion("");
    try {
      const params = { parametro: "valor" };
      const data = await axiosAPI.get<RespuestaJSON>(url, params)
      if(data.status === "OK") {
        setDatos(data);
      }else{
        alert(data.mensaje);
        setErrorPeticion(data.mensaje);
      }
    } catch (err) {
      console.log(err)
      setDatos(null);
      setErrorPeticion((err as Error).message);
    }
  };

  const realizarPeticionPOST = async () => {
    try {
      const formData = new FormData();
      formData.append("parametro", "valor");
      const data = await axiosAPI.post<RespuestaJSON>(url, formData);
      setDatos(data);
    } catch (err) {
      console.log(err)
      setDatos(null);
    }
  };

  return (
    <>
      {errorPeticion && <Alert type="danger" header="Alertas">
        <Alert.Body>
          <Alert.Content>{errorPeticion}</Alert.Content>
        </Alert.Body>
      </Alert>}
      <InputText id="urlPrueba" defaultValue={url} onChange={(e) => setUrl(e.target.value)} />
      <Button variant="primary" onClick={realizarPeticionGET}>Ejecutar GET URL con axiosAPI</Button>
      &nbsp;
      <Button variant="primary" onClick={realizarPeticionPOST}>Ejecutar POST URL con axiosAPI</Button>
      <br /><br />
      {datos && <pre>{JSON.stringify(datos, null, 2)}</pre>}
      <br /><br />
      {datos?.status === "OK" && datos?.respuesta?.personas ? (
        <ul>
          {datos.respuesta.personas.map(({ nombre, edad, email, lenguajes }) => (
            <li key={nombre}>
              <p><strong>Nombre:</strong> {nombre}</p>
              <p><strong>Edad:</strong> {edad}</p>
              <p><strong>Email:</strong> {email}</p>
              <p><strong>Lenguajes:</strong> {lenguajes.join(", ")}</p>
              <hr />
            </li>
          ))}
        </ul>
      ) : (
        <p>No hay datos de personas.</p>
      )}
    </>
  );
};

export default EjemploAxios;