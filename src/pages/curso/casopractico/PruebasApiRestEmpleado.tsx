import { useState, useEffect } from "react";
import { axiosAPI, Utilidades } from "@dit/spad-rdit_library";

import { EmpleadosTypes } from "./EmpleadosTypes";

const PruebasApiRestEmpleado = () => {
    const [empleados, setEmpleados] = useState<EmpleadosTypes.Empleado[]>([]);
    const [mensaje, setMensaje] = useState("");

    const urlEmpleados = Utilidades.getUrl("/wlpl/SPAD-CURS/Empleados");

    // Obtener empleados al cargar el componente
    useEffect(() => {
        obtenerEmpleados();
    }, []);

    // Función para obtener empleados
    const obtenerEmpleados = async () => {
        try {
            const data = await axiosAPI.get<EmpleadosTypes.RespuestaJSON>(urlEmpleados);
            setEmpleados(data.respuesta.empleados);
        } catch (error) {
            console.error("Error al obtener empleados:", error);
        }
    };

    // Función para insertar un empleado
    const insertarEmpleado = async () => {
        try {
            const formData = new FormData();
            formData.append("accion", "insert");
            formData.append("nif", "73681313P");
            formData.append("grupo", "A2");
            formData.append("nivel", "15");
            formData.append("nombre", "María López");
            const data = await axiosAPI.post<EmpleadosTypes.RespuestaJSON>(urlEmpleados, formData);
            setMensaje(data.mensaje);
            obtenerEmpleados();
        } catch (error) {
            console.error("Error al insertar empleado:", error);
        }
    };

    // Función para actualizar un empleado
    const actualizarEmpleado = async () => {
        try {
            const formData = new FormData();
            formData.append("accion", "update");
            formData.append("nif", "73681313P");
            formData.append("grupo", "A2");
            formData.append("nivel", "24");
            formData.append("nombre", "Maríafe de Triana");
            const data = await axiosAPI.post<EmpleadosTypes.RespuestaJSON>(urlEmpleados, formData);
            setMensaje(data.mensaje);
            obtenerEmpleados();
        } catch (error) {
            console.error("Error al actualizar empleado:", error);
        }
    };

    // Función para eliminar un empleado
    const eliminarEmpleado = async (nif: string) => {
        try {
            const formData = new FormData();
            formData.append("accion", "delete");
            formData.append("nif", nif);
            formData.append("nombre", "Maríafe de Triana");
            const data = await axiosAPI.post<EmpleadosTypes.RespuestaJSON>(urlEmpleados, formData);
            setMensaje(data.mensaje);
            obtenerEmpleados();
        } catch (error) {
            console.error("Error al eliminar empleado:", error);
        }
    };

    return (
        <div>
            <h2>Gestión de Empleados</h2>
            <button onClick={insertarEmpleado}>Insertar Empleado</button>
            <button onClick={actualizarEmpleado}>Actualizar Empleado</button>
            <ul>
                {empleados.map((emp) => (
                    <li key={emp.nif}>
                        {emp.nombre} ({emp.nif}) - {emp.grupo} - Nivel {emp.nivel}
                        <button onClick={() => eliminarEmpleado(emp.nif)}>Eliminar</button>
                    </li>
                ))}
            </ul>
            {mensaje && <p>{mensaje}</p>}
        </div>
    );
};

export default PruebasApiRestEmpleado;
