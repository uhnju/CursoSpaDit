import React from "react";
import { Button } from '@dit/spad-rdit_library'

/********************************************
 * ESCENARIO 1: Componente simple con props
 *******************************************/

// const Saludo = (props) => {
//   console.log(props);
//   return (
//     <>
//       <p>¡Hola, {props.nombre}!</p>
//       <p>Tu número es: {props.numero}</p>
//       <p>{props.children}</p>
//     </>
//   )
// };


interface SaludoProps {
  nombre?: string;
  numero?: number;
  visible?: boolean;
  children?: React.ReactNode;
}

const Saludo = ({ nombre = "usuario desconocido", numero, visible = true, children }: SaludoProps) => {
  if (!visible) {
    return <p>Saludo no visible</p>;
  }

  return (
    <>
      <p>¡Hola, {nombre}!</p>
      {numero || numero === 0 ? <p>Tu número es: {numero}</p> : null}
      <p>{children}</p>
    </>
  );
};

/********************************************
 * ESCENARIO 2: Componente que recibe prop de tipo objeto
 *******************************************/

interface Usuario {
  nombre: string;
  email: string;
}

interface InfoUsuarioProps {
  usuario: Usuario;
}

const InfoUsuario = ({ usuario }: InfoUsuarioProps) => {
  return (
    <p>
      Usuario: {usuario.nombre}. Email: {usuario.email}
    </p>
  )
};

// const InfoUsuario = ({ usuario }) => <p>Usuario: {usuario.nombre}. Email: {usuario.email}</p>;

/********************************************
 * ESCENARIO 3: Componente de botón reutilizable con estilo por defecto
 *******************************************/

interface BotonAzulProps {
  children: React.ReactNode;
  style?: React.CSSProperties;
  [key: string]: any; // Para permitir otras props adicionales
}

const BotonAzul = ({ children, style = {}, ...props }: BotonAzulProps) => {
  return (
    <button style={{ backgroundColor: "#0077FF", color:"#FFFFFF", ...style }} {...props}>
      {children}
    </button>
  );
};

/********************************************
 * COMPONENTE PRINCIPAL: Muestra todos los escenarios
 *******************************************/

const EjemplosProps = () => {
  const usuario = { nombre: "Carlos", email: "carlos@aeat.es" };

  return (
    <>
      <h1>Ejemplos de uso de props</h1>

      {/* ESCENARIO 1: Componente simple con props */}
      <Saludo nombre="Ana" numero={0}>
        <b>Contenido del Saludo</b>
      </Saludo>

      {/* ESCENARIO 2: Componente que recibe objeto como prop */}
      <InfoUsuario usuario={usuario} />

      {/* Botón normal sin estilos especiales */}
      <button onClick={() => alert("Hola!")}>Botón normal</button>

      {/* ESCENARIO 3: Componente de botón con color y estilo personalizado */}
      <BotonAzul onClick={() => alert("Hola!")}>Azul Siempre</BotonAzul>
      <BotonAzul disabled style={{ padding: "5px" }}>
        Deshabilitado
      </BotonAzul>

      {/* ESCENARIO 4: Componente de botón librería externa */}
      <Button size='sm' variant='danger' onClick={() => { alert('Evento onClick') }} style={{ margin: '10px' }} >Button danger</Button>
    </>
  );
};

export default EjemplosProps;