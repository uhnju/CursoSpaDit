import { useState } from "react";
import { axiosAPI, Utilidades, Button, InputText, DataGrid } from "@dit/spad-rdit_library";
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
interface Datos {
  headCells: string[];
  rows: { value: string }[][];
}
const EjemplosAxiosConDataGrid = () => {
  const urlInicial = Utilidades.getUrl("/wlpl/SPAD-RDIT/EjemploRESTService");
  const [url, setUrl] = useState(urlInicial);
  const configDataGrid = {
    id: "ejemploDataGrid",
    tableTitle: "ejemploDataGrid"
  }
  const datosIniciales = {
    headCells: ["Nombre", "Email", "Edad", "Lenguajes"],
    rows: []
  }
  const [datosDataGrid, setDatosDataGrid] = useState<Datos>(datosIniciales);
  const realizarPeticionGET = async () => {
    try {
      const params = { parametro: "valor" };
      const data = await axiosAPI.get<RespuestaJSON>(url, params)
      if (data.status === "OK") {
        let rowsDataGrid: { value: string }[][] = [];
        data?.respuesta?.personas.forEach(persona => {
          rowsDataGrid.push([
            { value: persona.nombre },
            { value: persona.email },
            { value: persona.edad.toString() },
            { value: persona.lenguajes.join(", ") }
          ]);
        })
        // rowsDataGrid = rowsDataGrid.concat(rowsDataGrid).concat(rowsDataGrid).concat(rowsDataGrid).concat(rowsDataGrid);
        setDatosDataGrid({ ...datosDataGrid, rows: rowsDataGrid })
      } else {
        alert(data.mensaje);
      }
    } catch (err) {
      console.log(err)
      setDatosDataGrid(datosIniciales);
    }
  };
  return (
    <>
      <InputText id="urlPrueba" defaultValue={url} onChange={(e) => setUrl(e.target.value)} />
      <Button variant="primary" onClick={realizarPeticionGET}>Ejecutar GET URL con axiosAPI</Button>
      <br /><br />
      <DataGrid config={configDataGrid} data={datosDataGrid} />
    </>
  );
};
export default EjemplosAxiosConDataGrid;
