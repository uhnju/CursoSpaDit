import { useState, useEffect } from "react";
import { useSearchParams, useNavigate } from "react-router-dom";
import { axiosAPI, Utilidades } from "@dit/spad-rdit_library";

import { EmpleadosTypes } from "./EmpleadosTypes";

const ModificarEmpleado = () => {
  const urlEmpleados = Utilidades.getUrl("/wlpl/SPAD-CURS/Empleados");

  const [searchParams] = useSearchParams();
  const nif = searchParams.get("nif");
  const navigate = useNavigate();
  const [empleado, setEmpleado] = useState<EmpleadosTypes.Empleado | null>(null);

  useEffect(() => {
    const obtenerEmpleado = async () => {
      try {
        const data = await axiosAPI.get<EmpleadosTypes.RespuestaJSON>(urlEmpleados, { nif: nif });

        if (data.respuesta.empleados.length > 0) {
          setEmpleado(data.respuesta.empleados[0]);
        }
      } catch (error) {
        console.error("Error al obtener el empleado", error);
      }
    };
    if (nif) {
      obtenerEmpleado();
    }
  }, [nif]);

  const actualizarEmpleado = async () => {
    if (!empleado) return;
    try {
      const formData = new FormData();
      formData.append("accion", "update");
      formData.append("nif", empleado.nif);
      formData.append("grupo", empleado.grupo);
      formData.append("nivel", empleado.nivel.toString());
      formData.append("nombre", empleado.nombre);
      const data = await axiosAPI.post<EmpleadosTypes.RespuestaJSON>(urlEmpleados, formData);
      if (data?.status === "KO") {
        alert(data.mensaje);
        console.error(data.mensaje);
        return;
      }
      alert("Empleado actualizado con éxito");
      navigate(`../DetalleEmpleado?nif=${empleado.nif}`);
    } catch (error) {
      alert("Error al actualizar el empleado");
      console.error(error);
    }
  };

  if (!empleado) {
    return <p>Cargando empleado...</p>;
  }
  return (
    <>
      <h1>Modificar Empleado</h1>
      <div className="row">
        <div className="col-md-3 p-3">
          <label className="form-label">NIF</label>
          <input
            type="text"
            value={empleado.nif}
            className="form-control form-control-sm"
            disabled={true}
          />
        </div>
        <div className="col-md-3 p-3">
          <label className="form-label">Grupo</label>

          <select
            className="form-control form-control-sm"
            value={empleado.grupo}
            onChange={(e) =>
              setEmpleado({ ...empleado, grupo: e.target.value as EmpleadosTypes.Grupo })
            }
          >
            <option value=""></option>
            <option value="A1">A1</option>
            <option value="A2">A2</option>
            <option value="C1">C1</option>
            <option value="C2">C2</option>
          </select>
        </div>
        <div className="col-md-3 p-3">
          <label className="form-label">Nivel</label>
          <input
            type="number"
            className="form-control form-control-sm"
            value={empleado.nivel}
            onChange={(e) =>
              setEmpleado({ ...empleado, nivel: parseInt(e.target.value) })
            }
          />
        </div>
        <div className="col-md-3 p-3 form-control-sm">
          <label className="form-label">Nombre</label>
          <input
            type="text"
            value={empleado.nombre}
            onChange={(e) =>
              setEmpleado({ ...empleado, nombre: e.target.value })
            }
            className="form-control form-control-sm"
          />
        </div>
      </div>

      <div className="d-flex justify-content-center">
        <button
          onClick={actualizarEmpleado}
          className="btn btn-outline-primary m-3"
        >
          Guardar Cambios
        </button>
        <button
          onClick={() => navigate(`../DetalleEmpleado?nif=${empleado.nif}`)}
          className="btn btn-outline-primary m-3"
        >
          Cancelar
        </button>
      </div>
    </>
  );
};

export default ModificarEmpleado;
