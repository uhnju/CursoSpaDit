import React, { useState } from "react";

/********************************************
 * ESCENARIO 1: Contador con paso configurable
 *******************************************/

const Contador = () => {
  const [contador, setContador] = useState(0);
  const [intervalo, setIntervalo] = useState(1);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = parseInt(e.target.value, 10);
    setIntervalo(value <= 1 ? 1 : value);
  };

  const incrementar = () => setContador(contador + intervalo);
  const decrementar = () => setContador(contador - intervalo);
  const inicializar = () => setContador(0);

  return (
    <div>
      <p style={{ color: contador > 10 ? "red" : "blue" }}>
        Contador: {contador}
      </p>
      <input type="number" value={intervalo} onChange={handleChange} />
      <button onClick={incrementar}>Incrementar</button>
      <button onClick={decrementar}>Decrementar</button>
      <button onClick={inicializar}>Resetear</button>
    </div>
  );
};

/********************************************
 * ESCENARIO 2: Estado booleano y visibilidad
 *******************************************/

const EjemploBooleano = () => {
  const [visible, setVisible] = useState(true);

  return (
    <div>
      <button onClick={() => setVisible(!visible)}>
        {visible ? "Ocultar" : "Mostrar"}
      </button>
      {visible && <p>Este contenido es visible pero puede ocultarse</p>}
    </div>
  );
};

/********************************************
 * ESCENARIO 3: Manejo de arrays con useState
 *******************************************/

const EjemploArray = () => {
  const [elementos, setElementos] = useState<string[]>([]);

  const agregarElemento = () => {
    const nuevoElemento = `Elemento ${elementos.length + 1}`;
    setElementos([...elementos, nuevoElemento]);
  };

  return (
    <div>
      <button onClick={agregarElemento}>Agregar Elemento</button>
      <ul>
        {elementos.map((elemento, index) => (
          <li key={index}>{elemento}</li>
        ))}
      </ul>
    </div>
  );
};

/********************************************
 * ESCENARIO 4: Manejo de objetos como estado
 *******************************************/

const EjemploObjeto = () => {
  const [persona, setPersona] = useState({ nombre: "", edad: 0 });

  const actualizarNombre = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPersona({ ...persona, nombre: e.target.value });
  };

  const actualizarEdad = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPersona({ ...persona, edad: parseInt(e.target.value, 10) });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    alert(JSON.stringify(persona));
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>
          Nombre: <input type="text" value={persona.nombre} onChange={actualizarNombre} />
        </label>
        <br />
        <label>
          Edad: <input type="number" value={persona.edad} onChange={actualizarEdad} />
        </label>
        <button type="submit">Enviar</button>
      </form>
      <p>Nombre: {persona.nombre}</p>
      <p>Edad: {persona.edad}</p>
    </div>
  );
};

/********************************************
 * COMPONENTE PRINCIPAL: Muestra todos los escenarios
 *******************************************/

const EjemplosUseState = () => {
  return (
    <>
      <h1>Ejemplos de useState</h1>
      <Contador />
      <EjemploBooleano />
      <EjemploArray />
      <EjemploObjeto />
    </>
  );
};

export default EjemplosUseState;