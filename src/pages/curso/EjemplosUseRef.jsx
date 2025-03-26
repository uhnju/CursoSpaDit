import { useRef, useState, useEffect } from "react";

/********************************************
 * ESCENARIO 1: Acceder a un elemento del DOM
 *******************************************/
// Este ejemplo muestra cómo usar `useRef` para acceder directamente a un elemento del DOM.
// Es útil cuando necesitas manipular el DOM directamente, como enfocar un input.

const AccederElementoDOM = () => {
  const inputRef = useRef(null);

  const enfocarInput = () => {
    inputRef.current.focus();
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
// `useRef` puede almacenar valores mutables que no causan un nuevo render cuando cambian.
// Este ejemplo muestra cómo usar `useRef` para almacenar un valor mutable.

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
 * ESCENARIO 3: Cerrar modal al hacer clic fuera
 *******************************************/
// Este patrón es ideal para componentes como modales o menús flotantes.
// Comprobamos si el clic ocurrió fuera del elemento referenciado.

const ModalClickFuera = () => {
  const modalRef = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleClickExterior = (evento) => {
      if (modalRef.current && !modalRef.current.contains(evento.target)) {
        setVisible(false);
      }
    };

    document.addEventListener("mousedown", handleClickExterior);
    return () => document.removeEventListener("mousedown", handleClickExterior);
  }, []);

  return (
    <div>
      <button onClick={() => setVisible(true)}>Abrir Modal</button>
      {visible && (
        <div
          ref={modalRef}
          style={{ padding: 20, background: "white", border: "1px solid black" }}
        >
          <p>Este es un modal</p>
        </div>
      )}
    </div>
  );
};

/********************************************
 * ESCENARIO 4: Scroll hacia una sección
 *******************************************/
// Permite hacer scroll automático a una sección específica al hacer clic.

const ScrollAHastaElemento = () => {
  const sectionRef = useRef(null);

  const hacerScroll = () => {
    sectionRef.current.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div style={{ height: "150vh", padding: 20 }}>
      <button onClick={hacerScroll}>Ir a la sección</button>
      <div
        ref={sectionRef}
        style={{ marginTop: "100vh", padding: 20, background: "lightgray" }}
      >
        <p>¡Has llegado!</p>
      </div>
    </div>
  );
};

/********************************************
 * COMPONENTE PRINCIPAL
 *******************************************/
// Este componente agrupa todos los escenarios de uso de `useRef`
// para que el profesor pueda explicarlos uno por uno.

const EjemplosUseRef = () => {
  return (
    <>
    <h1>Ejemplos de useRef</h1>
      <AccederElementoDOM />        {/* ESCENARIO 1: Acceder a un elemento del DOM */}
      <ValorMutable />              {/* ESCENARIO 2: Almacenar un valor mutable */}
      <ModalClickFuera />           {/* ESCENARIO 3: Cerrar modal al hacer clic fuera */}
      <ScrollAHastaElemento />      {/* ESCENARIO 4: Scroll hacia una sección */}
    </>
  );
};

export default EjemplosUseRef;
