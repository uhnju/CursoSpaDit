import { useState, useEffect } from "react";
import { useSearchParams, useNavigate } from "react-router-dom";
import { axiosAPI, Utilidades, List } from "@dit/spad-rdit_library";

import { EmpleadosTypes } from "./EmpleadosTypes"

const DetalleEmpleado = () => {
  const urlEmpleados = Utilidades.getUrl("/wlpl/SPAD-CURS/Empleados");

  const [searchParams] = useSearchParams();
  const nif = searchParams.get('nif');
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
    obtenerEmpleado();
  }, []);

  return (
    <>
      <h1>Detalle del Empleado</h1>
      <List>
        <List.Item label="NIF">{empleado?.nif}</List.Item>
        <List.Item label="Grupo">{empleado?.grupo}</List.Item>
        <List.Item label="Nivel">{empleado?.nivel}</List.Item>
        <List.Item label="Nombre">{empleado?.nombre}</List.Item>
      </List>
      <div className="d-flex justify-content-center">
        <button
          className="btn btn-outline-primary m-3"
          onClick={() => navigate(`../ModificarEmpleado?nif=${empleado?.nif}`)}
        >
          Modificar
        </button>

        <button
          className="btn btn-outline-primary m-3"
          onClick={() => navigate(`../EliminarEmpleado?nif=${empleado?.nif}`)}
        >
          Eliminar
        </button>

        <button
          className="btn btn-outline-primary m-3"
          onClick={() => navigate("../ConsultaEmpleados")}
        >
          Volver
        </button>
      </div>
    </>
  );
};

export default DetalleEmpleado;
