import { useState } from "react";
import { axiosAPI, Utilidades } from "@dit/spad-rdit_library";
import { useNavigate } from "react-router-dom";
import { generarNifAleatorio } from "./util";

import { EmpleadosTypes } from "./EmpleadosTypes";

const NuevoEmpleado = () => {
  const urlEmpleados = Utilidades.getUrl("/wlpl/SPAD-CURS/Empleados");

  const [nif, setNif] = useState("");
  const [grupo, setGrupo] = useState("");
  const [nivel, setNivel] = useState("");
  const [nombre, setNombre] = useState("");
  const navigate = useNavigate();

  const crearEmpleado = async () => {
    try {
      const formData = new FormData();
      formData.append("accion", "insert");
      formData.append("nif", nif);
      formData.append("grupo", grupo);
      formData.append("nivel", nivel);
      formData.append("nombre", nombre);
      const data = await axiosAPI.post<EmpleadosTypes.RespuestaJSON>(urlEmpleados, formData);
      if (data?.status === "KO") {
        alert(data.mensaje);
        console.error(data.mensaje);
        return;
      }
      alert("Empleado creado con éxito");
      navigate("../ConsultaEmpleados");
    } catch (error) {
      alert("Error al crear el empleado");
      console.error(error);
    }
  };

  return (
    <>
      <h1>Añadir Nuevo Empleado</h1>
      <div className="row">
        <div className="col-md-3 p-3">
          <label className="form-label">NIF</label>
          <input
            type="text"
            value={nif}
            className="form-control form-control-sm"
            onChange={(e) => setNif(e.target.value)}
          />
        </div>
        <div className="col-md-3 p-3">
          <label className="form-label">Grupo</label>
          <select
            className="form-control form-control-sm"
            value={grupo}
            onChange={(e) => setGrupo(e.target.value)}
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
            value={nivel}
            className="form-control form-control-sm"
            onChange={(e) => setNivel(e.target.value)}
          />
        </div>
        <div className="col-md-3 p-3">
          <label className="form-label">Nombre</label>
          <input
            type="text"
            value={nombre}
            className="form-control form-control-sm"
            onChange={(e) => setNombre(e.target.value)}
          />{" "}
        </div>
      </div>

      <div className="d-flex justify-content-center">
      <button className="btn btn-outline-primary m-3"
         onClick={() => setNif(generarNifAleatorio())}>
          Generar NIF aleatorio
        </button>
        <button className="btn btn-outline-primary m-3"
         onClick={crearEmpleado}>
          Guardar
        </button>
        <button
          className="btn btn-outline-primary m-3"
          onClick={() => navigate("../ConsultaEmpleados")}
        >
          Cancelar
        </button>
      </div>
    </>
  );
};

export default NuevoEmpleado;
