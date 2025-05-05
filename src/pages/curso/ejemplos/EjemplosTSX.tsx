import React, { useRef, useState } from "react";

/********************************************
 * ESCENARIO 1: Tipar props simples
 *******************************************/

interface SaludoProps {
  nombre: string;
  edad: number;
}
const Saludo = ({ nombre, edad }: SaludoProps): JSX.Element => {
  return <p>Hola, {nombre}. Tienes {edad} años.</p>;
};

/********************************************
 * ESCENARIO 2: Props opcionales
 *******************************************/

interface AlertaProps {
  mensaje?: string;
}
const Alerta = ({ mensaje }: AlertaProps): JSX.Element => {
  return <div>{mensaje ? mensaje : "Sin mensaje."}</div>;
};

/********************************************
 * ESCENARIO 3: Tipar children con React.ReactNode
 *******************************************/

interface TarjetaProps {
  children: React.ReactNode;
}
const Tarjeta = ({ children }: TarjetaProps): JSX.Element => {
  return <div className="card">{children}</div>;
};

/********************************************
 * ESCENARIO 4: Retorno JSX.Element
 *******************************************/

const PieDePagina = (): JSX.Element => {
  return <footer>Aquí va el pié</footer>;
};

/********************************************
 * ESCENARIO 5: Tipar arrays
 *******************************************/

interface ListaProps {
  elementos: string[];
}
const Lista = ({ elementos }: ListaProps): JSX.Element => {
  return (
    <ul>
      {elementos.map((elemento, index) => (
        <li key={index}>{elemento}</li>
      ))}
    </ul>
  );
};

/********************************************
 * ESCENARIO 6: Tipar eventos
 *******************************************/

const Boton = (): JSX.Element => {
  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    console.log("Click detectado", e);
  };

  return <button onClick={handleClick}>Haz clic</button>;
};

/********************************************
 * ESCENARIO 7: Tipar objetos complejos
 *******************************************/

interface Usuario {
  id: number;
  nombre: string;
}
interface PerfilProps {
  usuario: Usuario;
}
const Perfil = ({ usuario }: PerfilProps): JSX.Element => {
  return <p>ID: {usuario.id}, Nombre: {usuario.nombre}</p>;
};

/********************************************
 * ESCENARIO 8: Props genéricas (básico)
 *******************************************/

interface ElementoProps<T> {
  valor: T;
}
const Elemento = <T,>({ valor }: ElementoProps<T>): JSX.Element => {
  return <div>{JSON.stringify(valor)}</div>;
};

/********************************************
 * ESCENARIO 9: Tipar referencias con useRef
 *******************************************/

const EnfocarInput = (): JSX.Element => {
  const inputRef = useRef<HTMLInputElement>(null);

  return <input ref={inputRef} type="text" placeholder="Nombre" />;
};

/********************************************
 * ESCENARIO 10: Tipar estados con useState
 *******************************************/

const Contador = (): JSX.Element => {
  // @ts-ignore
  const [contador, setContador] = useState<number>(0);
  return <p>Contador: {contador}</p>;
};

/********************************************
 * COMPONENTE DEMO PARA MOSTRAR TODOS LOS ESCENARIOS
 *******************************************/

const EjemplosTSX = (): JSX.Element => {
  return (
    <>
      <h1>Ejemplos Básicos de TypeScript</h1>
      <Saludo nombre="Ana" edad={30} />                             {/* ESCENARIO 1: Tipar props simples */}
      <Alerta mensaje="¡Error inesperado!" />                       {/* ESCENARIO 2: Props opcionales */}
      <Tarjeta>                                                    {/* ESCENARIO 3: Tipar children */}
        <p>Contenido dentro de la tarjeta</p>
      </Tarjeta>
      <PieDePagina />                                              {/* ESCENARIO 4: Retorno JSX.Element */}
      <Lista elementos={["React", "TypeScript", "JSX"]} />         {/* ESCENARIO 5: Tipar arrays */}
      <Boton />                                                    {/* ESCENARIO 6: Tipar eventos */}
      <Perfil usuario={{ id: 1, nombre: "Carlos" }} />             {/* ESCENARIO 7: Tipar objetos complejos */}
      <Elemento valor={{ producto: "Camisa", precio: 25 }} />      {/* ESCENARIO 8: Props genéricas */}
      <EnfocarInput />                                             {/* ESCENARIO 9: Tipar referencias con useRef */}
      <Contador />                                                 {/* ESCENARIO 10: Tipar estados con useState */}
    </>
  );
};

export default EjemplosTSX;
