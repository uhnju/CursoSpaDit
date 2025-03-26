import React, { useState } from "react";

/********************************************
 * ESCENARIO 1: Componente simple con props
 *******************************************/
// Este componente recibe una prop llamada `nombre` y la muestra dentro de un saludo.
// Sirve para introducir el concepto básico de props como "valores que se pasan desde el padre al hijo".

const Saludo = ({ nombre }) => <h1>¡Hola, {nombre}!</h1>;

/********************************************
 * ESCENARIO 2: Componente con múltiples props
 *******************************************/
// Aquí el componente `InfoUsuario` recibe dos props: `nombre` y `edad`.
// Nos permite mostrar cómo un componente puede aceptar varios datos
// y utilizarlos dentro del JSX.

const InfoUsuario = ({ nombre, edad }) => <p>{nombre} tiene {edad} años.</p>;

/********************************************
 * ESCENARIO 3: Props con valores por defecto
 *******************************************/
// Este componente muestra cómo establecer un valor por defecto para una prop,
// en caso de que no se proporcione desde el componente padre.

const MensajeBienvenida = ({ mensaje = "¡Bienvenido al curso de React!" }) => <p>{mensaje}</p>;

/********************************************
 * ESCENARIO 4: Lista como prop
 *******************************************/
// `ListaElementos` recibe un array de elementos como prop (`elementos`) y lo renderiza en una lista.
// Se usa `map` para recorrer el array y `key` para dar una clave única a cada elemento.

const ListaElementos = ({ elementos }) => (
  <ul>
    {elementos.map((elemento, index) => (
      <li key={index}>{elemento}</li>
    ))}
  </ul>
);

/********************************************
 * ESCENARIO 5: Paso de objeto como prop
 *******************************************/
// Este componente muestra cómo pasar un objeto completo como prop.
// Es una técnica muy común cuando se trabaja con datos de usuarios u objetos complejos.

const TarjetaUsuario = ({ usuario }) => (
  <div>
    <h3>{usuario.nombre}</h3>
    <p>Email: {usuario.email}</p>
  </div>
);

/********************************************
 * ESCENARIO 6: Composición de componentes
 *******************************************/
// `Perfil` recibe un objeto `usuario` como prop y lo pasa a su vez al componente `TarjetaUsuario`.
// Esto demuestra cómo se puede componer interfaces más grandes combinando componentes más pequeños.

const Perfil = ({ usuario }) => (
  <div>
    <h2>Perfil de Usuario</h2>
    <TarjetaUsuario usuario={usuario} />
  </div>
);

/********************************************
 * ESCENARIO 7: Función como prop (callback)
 *******************************************/
// Este patrón permite que el componente hijo ejecute una función que ha sido definida en el padre.
// Se usa mucho para manejar eventos como clics, envíos, etc.

const Boton = ({ handleClick, etiqueta }) => <button onClick={handleClick}>{etiqueta}</button>;

/********************************************
 * ESCENARIO 8: Uso de `children`
 *******************************************/
// `children` es una prop especial que permite insertar contenido JSX arbitrario
// dentro de un componente. Es esencial para crear componentes envoltorios reutilizables.

const Tarjeta = ({ titulo, children }) => (
  <div style={{ border: "1px solid black", padding: "10px", margin: "10px" }}>
    <h3>{titulo}</h3>
    {children}
  </div>
);

/********************************************
 * ESCENARIO 9: Paso de datos + función desde el padre
 *******************************************/
// En este escenario el padre controla el estado del contador y pasa tanto el valor actual
// como la función para incrementarlo al hijo. Es un ejemplo perfecto de "lifting state up".

const Contador = ({ valor, handleClick }) => (
  <div>
    <p>Contador: {valor}</p>
    <button onClick={handleClick}>Incrementar</button>
  </div>
);

/********************************************
 * ESCENARIO 10: Renderizado condicional con props
 *******************************************/
// Según el valor de la prop `estaConectado`, el componente muestra un mensaje distinto.
// Esto permite modificar el comportamiento o apariencia del componente según las props recibidas.

const MensajeEstado = ({ estaConectado }) => (
  <p>{estaConectado ? "¡Bienvenido de nuevo!" : "Por favor, inicia sesión."}</p>
);

/********************************************
 * COMPONENTE PRINCIPAL: Muestra todos los escenarios
 *******************************************/
// Este componente agrupa todos los ejemplos para mostrarlos de manera práctica en clase.
// Se definen algunas constantes para simular props reales (usuario, lista, contador...).

const EjemplosProps = () => {
  const usuario = { nombre: "Carlos", email: "carlos@example.com" };
  const elementos = ["Manzana", "Banana", "Cereza"];
  const [contador, setContador] = useState(0);

  return (
    <>
      <h1>Ejemplos de uso de props</h1>
      <Saludo nombre="Ana" />                         {/* ESCENARIO 1 */}
      <InfoUsuario nombre="Juan" edad={30} />         {/* ESCENARIO 2 */}
      <MensajeBienvenida />                           {/* ESCENARIO 3 */}
      <ListaElementos elementos={elementos} />        {/* ESCENARIO 4 */}
      <Perfil usuario={usuario} />                    {/* ESCENARIO 5 y 6 */}
      <Boton handleClick={() => alert("¡Botón pulsado!")} etiqueta="Haz clic aquí" /> {/* ESCENARIO 7 */}
      <Tarjeta titulo="Tarjeta de Información">       {/* ESCENARIO 8 */}
        <p>Este es un contenido dentro de una tarjeta.</p>
      </Tarjeta>
      <Contador valor={contador} handleClick={() => setContador(contador + 1)} /> {/* ESCENARIO 9 */}
      <MensajeEstado estaConectado={true} />          {/* ESCENARIO 10 */}
    </>
  );
};

export default EjemplosProps;
