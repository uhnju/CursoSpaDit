import React from "react";
import { generarNifAleatorio } from "../casopractico/util";

const OtroComponente = () => {
  return (
    <p>Contenido de otro componente </p>
  )
}

const OtroComponenteSimplicado = () => <p>Contenido de otro componente simplificado</p>

const EjemplosSintaxisJSX = () => {
  const nombre = "Fernando";
  const numero = 42;
  const usuario = {
    nombre: "Juan",
    apellido: "Pérez",
  };
  // function getTexto(texto){
  //   return texto.toUpperCase();
  // }  
  const getTexto = (texto: string) => texto.toUpperCase();
  const estiloEnLinea = {
    color: "blue",
    fontSize: "30px",
    fontWeight: "bold",
  };
  const usuarioConectado = false;

  return (
    <div>
      <h1>Ejemplos de Sintaxis JSX</h1>

      {/********************************************
       * ESCENARIO 1: Uso de variables y expresiones
       *******************************************/}
      <h2>Hola {nombre}!</h2>
      <p>El número es: {numero}</p>
      <p>Usuario: {JSON.stringify(usuario)}</p>
      <p>Nombre completo: {usuario.nombre} {usuario.apellido}</p>
      <p>Templates. {`Nombre: ${usuario.nombre} Apellidos: ${usuario.apellido}`}</p>
      <p>Texto en mayúsculas: {getTexto("texto")}</p>
      <p>NIF Aleatorio: {generarNifAleatorio()}</p>

      {/********************************************
       * ESCENARIO 2: Estilos en línea
       *******************************************/}
      <p style={estiloEnLinea}>Este es un texto con estilos en línea.</p>

      {/********************************************
       * ESCENARIO 3: Clases CSS en JSX
       *******************************************/}
      <p className="text-danger">Este es un texto con clase CSS.</p>

      {/********************************************
       * ESCENARIO 4: Fragmentos JSX
       *******************************************/}
      <React.Fragment>
        <h2>Encabezado dentro de un Fragment</h2>
        <p>Esto forma parte del mismo Fragment.</p>
      </React.Fragment>

      {/********************************************
       * ESCENARIO 5: Comentarios en JSX
       *******************************************/}

      {/********************************************
       * ESCENARIO 6: Condicional simple con operador ternario
       *******************************************/}
      <p style={{ color: usuarioConectado ? "green" : "red" }}>
        Usuario conectado: {usuarioConectado ? "Sí" : "No"}
      </p>

      {/********************************************
       * ESCENARIO 7: Renderizado condicional con &&
       *******************************************/}
      {usuarioConectado && <p>Usuario Conectado!</p>}

      {/********************************************
       * ESCENARIO 8: Inclusion de otros componentes
       *******************************************/}
      <OtroComponente />
      <OtroComponenteSimplicado />
    </div>
  );
};

export default EjemplosSintaxisJSX;
