import { useRef } from "react";

/********************************************
 * ESCENARIO 1: Acceder a un elemento del DOM
 *******************************************/

const AccederElementoDOM = () => {
  const inputRef = useRef<HTMLInputElement>(null);

  const enfocarInput = () => {
    inputRef.current?.focus();
  };

  return (
    <div>
      <input type="text" ref={inputRef} placeholder="Escribe algo..." />
      <button onClick={enfocarInput}>Enfocar input</button>
    </div>
  );
};

/********************************************
 * ESCENARIO 2: Almacenar un valor mutable
 *******************************************/

const ValorMutable = () => {
  const valorRef = useRef(0);

  const incrementar = () => {
    valorRef.current += 1;
    console.log("Valor mutable:", valorRef.current);
  };

  return (
    <div>
      <p>Valor mutable: {valorRef.current}</p>
      <button onClick={incrementar}>Incrementar valor mutable</button>
    </div>
  );
};

/********************************************
 * COMPONENTE PRINCIPAL
 *******************************************/

const EjemplosUseRef = () => {
  return (
    <>
    <h1>Ejemplos de useRef</h1>
      <AccederElementoDOM />        {/* ESCENARIO 1: Acceder a un elemento del DOM */}
      <ValorMutable />              {/* ESCENARIO 2: Almacenar un valor mutable */}
    </>
  );
};

export default EjemplosUseRef;
