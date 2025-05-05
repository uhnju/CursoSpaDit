import { useSearchParams, useNavigate } from "react-router-dom";
import { axiosAPI, Utilidades } from "@dit/spad-rdit_library";

import { EmpleadosTypes } from "./EmpleadosTypes"

const EliminarEmpleado = () => {
  const urlEmpleados = Utilidades.getUrl("/wlpl/SPAD-CURS/Empleados");

  const [searchParams] = useSearchParams();
  const nif = searchParams.get('nif');
  const navigate = useNavigate();

  const eliminarEmpleado = async () => {
    if (!nif) return;
    try {
      const formData = new FormData();
      formData.append("accion", "delete");
      formData.append("nif", nif);
      const data = await axiosAPI.post<EmpleadosTypes.RespuestaJSON>(urlEmpleados, formData);
      if (data?.status === "KO") {
        alert(data.mensaje);
        console.error(data.mensaje);
        return;
      }
      alert("Empleado eliminado con éxito");
      navigate("../ConsultaEmpleados");
    } catch (error) {
      alert("Error al eliminar el empleado");
      console.error(error);
    }
  };

  return (
    <>
      <h1>Eliminar Empleado</h1>
      <p>
        ¿Estás seguro de que deseas eliminar al empleado con NIF{" "}
        <strong>{nif}</strong>?
      </p>
      <div className="d-flex justify-content-center">
        <button
          onClick={eliminarEmpleado}
          className="btn btn-outline-primary m-3"
        >
          Eliminar
        </button>
        <button
          onClick={() => navigate(`../DetalleEmpleado?nif=${nif}`)}
          className="btn btn-outline-primary m-3"
        >
          Cancelar
        </button>
      </div>
    </>
  );
};

export default EliminarEmpleado;
