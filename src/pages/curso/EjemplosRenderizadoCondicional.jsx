import React, { useState } from "react";

/********************************************
 * ESCENARIO 1: Renderizado condicional con `if` (operador ternario)
 *******************************************/
// Este ejemplo muestra cómo alternar contenido entre dos opciones:
// "Bienvenido" o "Inicia sesión", dependiendo del estado `estaConectado`.
// El operador ternario es muy útil para elegir entre dos bloques de JSX.

const CondicionalIf = () => {
  const [estaConectado, setEstaConectado] = useState(false);

  return (
    <div>
      {estaConectado ? <p>Bienvenido, usuario</p> : <p>Por favor, inicia sesión</p>}
      <button onClick={() => setEstaConectado(!estaConectado)}>
        {estaConectado ? "Cerrar sesión" : "Iniciar sesión"}
      </button>
    </div>
  );
};

/********************************************
 * ESCENARIO 2: Renderizado con `&&`
 *******************************************/
// Aquí se utiliza el operador lógico `&&` para mostrar un texto
// solo cuando el estado `mostrarTexto` sea `true`.
// Es muy útil cuando solo queremos renderizar un bloque condicionalmente
// y no necesitamos un "else".

const CondicionalAnd = () => {
  const [mostrarTexto, setMostrarTexto] = useState(false);

  return (
    <div>
      <button onClick={() => setMostrarTexto(!mostrarTexto)}>Mostrar/Ocultar</button>
      {mostrarTexto && <p>Este texto aparece cuando el estado es `true`</p>}
    </div>
  );
};

/********************************************
 * ESCENARIO 3: Renderizado condicional con `switch`
 *******************************************/
// Este ejemplo demuestra cómo renderizar diferentes resultados
// en función del estado `estado` utilizando una estructura `switch`.
// Muy útil cuando tenemos más de dos posibles valores a mostrar.

const CondicionalSwitch = () => {
  const [estado, setEstado] = useState("cargando");

  const renderizarEstado = () => {
    switch (estado) {
      case "cargando":
        return <p>Cargando...</p>;
      case "exito":
        return <p>Datos cargados correctamente</p>;
      case "error":
        return <p>Error al cargar los datos</p>;
      default:
        return null;
    }
  };

  return (
    <div>
      <button onClick={() => setEstado("cargando")}>Cargando</button>
      <button onClick={() => setEstado("exito")}>Éxito</button>
      <button onClick={() => setEstado("error")}>Error</button>
      {renderizarEstado()}
    </div>
  );
};

/********************************************
 * ESCENARIO 4: Renderizar un array condicionalmente
 *******************************************/
// En este ejemplo se verifica si hay elementos en el array `elementos`.
// Si hay elementos, se muestra la lista. Si no, se muestra un mensaje alternativo.

const CondicionalArray = () => {
  const [elementos, setElementos] = useState(["Elemento 1", "Elemento 2"]);

  return (
    <div>
      {elementos.length > 0 ? (
        <ul>{elementos.map((elemento, indice) => <li key={indice}>{elemento}</li>)}</ul>
      ) : (
        <p>No hay elementos</p>
      )}
      <button onClick={() => setElementos([])}>Vaciar lista</button>
    </div>
  );
};

/********************************************
 * ESCENARIO 5: Condicional con valor numérico
 *******************************************/
// Se muestra un texto distinto cuando el contador está en cero.
// Este patrón es útil para dar mensajes personalizados según valores numéricos.

const CondicionalNumero = () => {
  const [contador, setContador] = useState(0);

  return (
    <div>
      <p>{contador === 0 ? "El contador está en cero" : `Contador: ${contador}`}</p>
      <button onClick={() => setContador(contador + 1)}>Incrementar</button>
    </div>
  );
};

/********************************************
 * ESCENARIO 6: Mostrar/Ocultar un componente
 *******************************************/
// Este ejemplo alterna la visibilidad de un componente (párrafo) mediante el estado `visible`.
// Muy común para construir interfaces con elementos colapsables o modales.

const CondicionalComponente = () => {
  const [visible, setVisible] = useState(true);

  return (
    <div>
      <button onClick={() => setVisible(!visible)}>Mostrar/Ocultar Componente</button>
      {visible && <p>Este componente puede mostrarse o esconderse</p>}
    </div>
  );
};

/********************************************
 * ESCENARIO 7: Operador ternario directo en JSX
 *******************************************/
// Se alterna un mensaje según el valor del estado `esAdmin`.
// El operador ternario puede usarse directamente dentro del JSX como este ejemplo.

const CondicionalTernario = () => {
  const [esAdmin, setEsAdmin] = useState(false);

  return (
    <div>
      <p>{esAdmin ? "Eres un administrador" : "Eres un usuario normal"}</p>
      <button onClick={() => setEsAdmin(!esAdmin)}>Cambiar rol</button>
    </div>
  );
};

/********************************************
 * ESCENARIO 8: Renderizar distintos componentes según rol
 *******************************************/
// Aquí se cambia entre dos componentes (`PanelAdmin` y `PanelUsuario`)
// según el valor del estado `rol`. Este patrón se usa mucho en apps con roles de usuario.

const PanelAdmin = () => <p>Panel de Administración</p>;
const PanelUsuario = () => <p>Panel de Usuario</p>;

const CondicionalComponentesPorRol = () => {
  const [rol, setRol] = useState("usuario");

  return (
    <div>
      {rol === "admin" ? <PanelAdmin /> : <PanelUsuario />}
      <button onClick={() => setRol(rol === "admin" ? "usuario" : "admin")}>
        Cambiar a {rol === "admin" ? "Usuario" : "Administrador"}
      </button>
    </div>
  );
};

/********************************************
 * ESCENARIO 9: Condicional con estilos dinámicos
 *******************************************/
// Este ejemplo modifica el estilo (color del texto) en función del estado `activo`.
// Es una técnica útil para indicar visualmente estados (activo/inactivo, correcto/incorrecto, etc.)

const CondicionalEstilos = () => {
  const [activo, setActivo] = useState(false);

  return (
    <div>
      <p style={{ color: activo ? "green" : "red" }}>
        Estado: {activo ? "Activo" : "Inactivo"}
      </p>
      <button onClick={() => setActivo(!activo)}>Alternar estado</button>
    </div>
  );
};

/********************************************
 * ESCENARIO 10: Renderizado condicional con datos asincrónicos
 *******************************************/
// Se simula una llamada a una API (con `setTimeout`) y se muestra un mensaje de carga.
// Una vez que se "cargan los datos", se muestra el resultado.
// Ideal para introducir el patrón loading/success/error.

const CondicionalAsincrono = () => {
  const [cargando, setCargando] = useState(false);
  const [datos, setDatos] = useState(null);

  const cargarDatos = () => {
    setCargando(true);
    setTimeout(() => {
      setDatos("Datos cargados correctamente");
      setCargando(false);
    }, 2000);
  };

  return (
    <div>
      <button onClick={cargarDatos}>Cargar Datos</button>
      {cargando ? <p>Cargando...</p> : datos && <p>{datos}</p>}
    </div>
  );
};

/********************************************
 * COMPONENTE PRINCIPAL: Muestra todos los escenarios
 *******************************************/
// Este componente agrupa todos los ejemplos para poder visualizarlos en conjunto.
// El profesor puede ir activando cada uno y explicando los diferentes patrones de renderizado condicional.

const EjemplosRenderizadoCondicional = () => (
  <>
    <h1>Ejemplos de renderizado condicional</h1>
    <CondicionalIf />                      {/* ESCENARIO 1: if con operador ternario */}
    <CondicionalAnd />                     {/* ESCENARIO 2: && */}
    <CondicionalSwitch />                  {/* ESCENARIO 3: switch */}
    <CondicionalArray />                   {/* ESCENARIO 4: array vacío o no */}
    <CondicionalNumero />                  {/* ESCENARIO 5: número condicional */}
    <CondicionalComponente />              {/* ESCENARIO 6: mostrar/ocultar */}
    <CondicionalTernario />                {/* ESCENARIO 7: ternario en JSX */}
    <CondicionalComponentesPorRol />       {/* ESCENARIO 8: distintos componentes */}
    <CondicionalEstilos />                 {/* ESCENARIO 9: estilos condicionales */}
    <CondicionalAsincrono />               {/* ESCENARIO 10: render con promesa simulada */}
  </>
);

export default EjemplosRenderizadoCondicional;
