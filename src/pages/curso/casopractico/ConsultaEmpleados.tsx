import { useEffect, useState, useRef } from "react";
import { useNavigate, Link } from "react-router-dom";
import { axiosAPI, Utilidades, Alert, LoadingOverlay } from "@dit/spad-rdit_library";
import { validaNif } from "./util";

import { EmpleadosTypes } from "./EmpleadosTypes"

const ConsultaEmpleados = () => {
  const urlEmpleados = Utilidades.getUrl("/wlpl/SPAD-CURS/Empleados");

  const datosIniciales = JSON.parse(localStorage.getItem("consultaEmpleado") || "{}");

  const [nif, setNif] = useState<string>(datosIniciales?.nif || "");
  const [grupo, setGrupo] = useState<string>(datosIniciales?.grupo || "");
  const [nivel, setNivel] = useState<number | "">(datosIniciales?.nivel || "");
  const [nombre, setNombre] = useState<string>(datosIniciales?.nombre || "");
  const [empleados, setEmpleados] = useState<EmpleadosTypes.Empleado[]>([]);
  const [errorPeticion, setErrorPeticion] = useState<string>("");
  const [errorNif, setErrorNif] = useState<string>("");
  const [errorNivel, setErrorNivel] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);

  const inputNifRef = useRef<HTMLInputElement | null>(null);
  const inputNivelRef = useRef<HTMLInputElement | null>(null);

  const navigate = useNavigate();

  const validarCampos = () => {

    let hayErrores = false;

    if (nif !== "" && !validaNif(nif)) {
      setErrorNif("NIF inválido. Introduzca un NIF correcto.");
      inputNifRef.current?.focus();
      hayErrores = true;
    }

    if (nivel !== "" && (isNaN(nivel) || nivel < 10 || nivel > 30)) {
      setErrorNivel("Nivel inválido. Introduzca un nivel correcto (10-30).");
      inputNivelRef.current?.focus();
      hayErrores = true;
    }

    return !hayErrores;

  }

  const buscarEmpleados = async () => {
    setErrorPeticion("");
    setErrorNif("");
    setErrorNivel("");

    if (!validarCampos()) return;

    const params = {
      nif: nif,
      grupo: grupo,
      nivel: nivel,
      nombre: nombre,
    };
    localStorage.setItem("consultaEmpleado", JSON.stringify(params));
    setLoading(true);
    try {
      const data = await axiosAPI.get<EmpleadosTypes.RespuestaJSON>(urlEmpleados, params);
      setEmpleados(data.respuesta.empleados);
    } catch (error) {
      console.error("Error al obtener el empleado", error);
      setErrorPeticion("Error al obtener el empleado. " + error);
    } finally {
      setLoading(false);
    }

  };

  const limpiarCampos = () => {
    setNif("");
    setGrupo("");
    setNivel("");
    setNombre("");
    setErrorPeticion("");
    setErrorNif("");
    setErrorNivel("");
  };

  useEffect(() => { buscarEmpleados() }, []);

  // const handleSubmit = (e: FormEvent<HTMLFormElement>): void => {
  //   e.preventDefault();
  //   buscarEmpleados();
  // };

  return (
    <LoadingOverlay loading={loading} >
      {errorPeticion && <Alert type="danger" header="Alertas">
        <Alert.Body>
          <Alert.Content key={errorPeticion}>{errorPeticion}</Alert.Content>
        </Alert.Body>
      </Alert>}
      <h1>Consulta de Empleados</h1>
      <div className="container">
        <form>
          <div className="row">
            <div className="col-md-3 p-3">
              <label className="form-label">NIF</label>
              <input
                type="text"
                ref={inputNifRef}
                value={nif}
                onChange={(e) => setNif(e.target.value)}
                className="form-control form-control-sm"
              />
              {errorNif && <div className="text-danger">{errorNif}</div>}
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
                ref={inputNivelRef}
                className="form-control form-control-sm"
                value={nivel}
                onChange={(e) => setNivel(e.target.value === "" ? "" : parseInt(e.target.value))}
              />
              {errorNivel && <div className="text-danger">{errorNivel}</div>}
            </div>
            <div className="col-md-3 p-3">
              <label className="form-label">Nombre</label>
              <input
                type="text"
                className="form-control form-control-sm"
                value={nombre}
                onChange={(e) => setNombre(e.target.value)}
              />
            </div>
          </div>
          <div className="d-flex flex-column flex-md-row justify-content-center">
            <button
              type="button"
              className="btn btn-outline-primary m-3"
              onClick={buscarEmpleados}
            >
              Buscar
            </button>
            <button
              type="button"
              className="btn btn-outline-primary m-3"
              onClick={limpiarCampos}
            >
              Limpiar
            </button>
            <button
              type="button"
              className="btn btn-outline-primary m-3"
              onClick={() => navigate("../NuevoEmpleado")}
            >
              Nuevo Empleado
            </button>
          </div>
        </form>
        <div className="table-responsive">
          <table className="table">
            <thead>
              <tr>
                <th>NIF</th>
                <th>Grupo</th>
                <th>Nivel</th>
                <th>Nombre</th>
              </tr>
            </thead>
            <tbody>
              {empleados.length > 0 ? (
                empleados.map((empleado) => (
                  <tr key={empleado.nif}>
                    <td>
                      <Link to={`../DetalleEmpleado?nif=${empleado.nif}`}>
                        {empleado.nif}
                      </Link>
                    </td>
                    <td>{empleado.grupo}</td>
                    <td>{empleado.nivel}</td>
                    <td>{empleado.nombre}</td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan={4} className="text-center">
                    No se encontraron empleados
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </LoadingOverlay>
  );
};

export default ConsultaEmpleados;
