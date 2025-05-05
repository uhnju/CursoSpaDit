export namespace EmpleadosTypes {

	export interface RespuestaJSON {
		status: string;
		mensaje: string;
		respuesta: Respuesta;
	}

	export interface Respuesta {
		empleados: Empleado[];
	}

	export interface Empleado {
		nif: string;
		grupo: Grupo;
		nivel: number;
		nombre: string;
	}

	export enum Grupo {
		A1 = "A1",
		A2 = "A2",
		C1 = "C1",
		C2 = "C2",
	}

}