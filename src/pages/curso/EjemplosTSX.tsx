import React, { useRef, useState } from "react";

/********************************************
 * ESCENARIO 1: Tipar props simples
 *******************************************/
// Este ejemplo muestra cómo tipar las propiedades (props) de un componente utilizando una interfaz.
// La interfaz `SaludoProps` define que el componente `Saludo` debe recibir un nombre (`nombre`) como string
// y una edad (`edad`) como número. Esto asegura que el componente solo acepte valores válidos.

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
// Aquí se muestra cómo manejar propiedades opcionales en un componente.
// La propiedad `mensaje` es opcional, indicada por el signo `?`. Si no se proporciona, el componente
// mostrará un mensaje predeterminado ("Sin mensaje.").

interface AlertaProps {
  mensaje?: string;
}
const Alerta = ({ mensaje }: AlertaProps): JSX.Element => {
  return <div>{mensaje ? mensaje : "Sin mensaje."}</div>;
};

/********************************************
 * ESCENARIO 3: Tipar children con React.ReactNode
 *******************************************/
// Este ejemplo utiliza la propiedad especial `children`, que se tipa con `React.ReactNode`.
// Esto permite que el componente `Tarjeta` reciba cualquier contenido válido de React (texto, JSX, otros componentes)
// y lo renderice dentro de un contenedor.

interface TarjetaProps {
  children: React.ReactNode;
}
const Tarjeta = ({ children }: TarjetaProps): JSX.Element => {
  return <div className="card">{children}</div>;
};

/********************************************
 * ESCENARIO 4: Retorno JSX.Element
 *******************************************/
// Este ejemplo muestra cómo especificar explícitamente que el retorno de un componente es de tipo `JSX.Element`.
// Esto asegura que el componente siempre devuelva un elemento válido de React.

const PieDePagina = (): JSX.Element => {
  return <footer>Aquí va el pié</footer>;
};

/********************************************
 * ESCENARIO 5: Tipar arrays
 *******************************************/
// Aquí se muestra cómo tipar un array de strings utilizando `string[]`.
// El componente `Lista` recibe un array de elementos y los renderiza como una lista (`<ul>`).

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
// Este ejemplo muestra cómo tipar eventos en React. En este caso, el evento de clic (`onClick`)
// se tipa como `React.MouseEvent<HTMLButtonElement>`, lo que asegura que el evento sea manejado correctamente.

const Boton = (): JSX.Element => {
  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    console.log("Click detectado", e);
  };

  return <button onClick={handleClick}>Haz clic</button>;
};

/********************************************
 * ESCENARIO 7: Tipar objetos complejos
 *******************************************/
// Este ejemplo utiliza una interfaz anidada (`Usuario`) para definir un objeto complejo como propiedad.

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
// Este ejemplo utiliza un tipo genérico `<T>` para aceptar cualquier tipo de dato como propiedad `valor`.

interface ElementoProps<T> {
  valor: T;
}
const Elemento = <T,>({ valor }: ElementoProps<T>): JSX.Element => {
  return <div>{JSON.stringify(valor)}</div>;
};

/********************************************
 * ESCENARIO 9: Tipar referencias con useRef
 *******************************************/
// Este ejemplo utiliza el hook `useRef` para crear una referencia a un input.
// La referencia se tipa como `HTMLInputElement`.

const EnfocarInput = (): JSX.Element => {
  const inputRef = useRef<HTMLInputElement>(null);

  return <input ref={inputRef} type="text" placeholder="Nombre" />;
};

/********************************************
 * ESCENARIO 10: Tipar estados con useState
 *******************************************/
// Este ejemplo utiliza el hook `useState` para manejar un estado llamado `contador`.

const Contador = (): JSX.Element => {
  // @ts-ignore
  const [contador, setContador] = useState<number>(0);
  return <p>Contador: {contador}</p>;
};

/********************************************
 * COMPONENTE DEMO PARA MOSTRAR TODOS LOS ESCENARIOS
 *******************************************/
// Este componente principal reúne todos los ejemplos anteriores en un solo lugar.
// Renderiza cada componente con datos de ejemplo para mostrar cómo funcionan en conjunto.

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
