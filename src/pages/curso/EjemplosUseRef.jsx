import { useRef, useState, useEffect } from "react";

/********************************************
 * ESCENARIO 1: Acceder a un elemento del DOM
 *******************************************/
// Este ejemplo muestra cómo usar `useRef` para acceder directamente a un elemento del DOM.
// Es útil cuando necesitas manipular el DOM directamente, como enfocar un input.

const AccessDOMElement = () => {
 const inputRef = useRef(null);

 const focusInput = () => {
  inputRef.current.focus();
 };

 return (
  <div>
   <input type="text" ref={inputRef} placeholder="Escribe algo..." />
   <button onClick={focusInput}>Enfocar input</button>
  </div>
 );
};

/********************************************
 * ESCENARIO 2: Almacenar un valor mutable
 *******************************************/
// `useRef` puede almacenar valores mutables que no causan un nuevo render cuando cambian.
// Este ejemplo muestra cómo usar `useRef` para almacenar un valor mutable.

const MutableValue = () => {
 const mutableValue = useRef(0);

 const increment = () => {
  mutableValue.current += 1;
  console.log("Valor mutable:", mutableValue.current);
 };

 return (
  <div>
   <p>Valor mutable: {mutableValue.current}</p>
   <button onClick={increment}>Incrementar valor mutable</button>
  </div>
 );
};

/********************************************
 * ESCENARIO 3: Cerrar modal al hacer clic fuera
 ********************************************/
// Este patrón es ideal para componentes como modales o menús flotantes.
// Comprobamos si el clic ocurrió fuera del elemento referenciado.

const ClickOutsideModal = () => {
 const modalRef = useRef(null);
 const [visible, setVisible] = useState(false);

 useEffect(() => {
  const handleClickOutside = (event) => {
   if (modalRef.current && !modalRef.current.contains(event.target)) {
    setVisible(false);
   }
  };
  document.addEventListener("mousedown", handleClickOutside);
  return () => document.removeEventListener("mousedown", handleClickOutside);
 }, []);

 return (
  <div>
   <button onClick={() => setVisible(true)}>Abrir Modal</button>
   {visible && (
    <div ref={modalRef} style={{ padding: 20, background: "white", border: "1px solid black" }}>
     <p>Este es un modal</p>
    </div>
   )}
  </div>
 );
};

/********************************************
 * ESCENARIO 4: Scroll hacia una sección
 ********************************************/
// Permite hacer scroll automático a una sección específica al hacer clic.

const ScrollToElement = () => {
 const sectionRef = useRef(null);

 const scrollToSection = () => {
  sectionRef.current.scrollIntoView({ behavior: "smooth" });
 };

 return (
  <div style={{ height: "150vh", padding: 20 }}>
   <button onClick={scrollToSection}>Ir a la sección</button>
   <div ref={sectionRef} style={{ marginTop: "100vh", padding: 20, background: "lightgray" }}>
    <p>¡Has llegado!</p>
   </div>
  </div>
 );
};

/********************************************
 * COMPONENTE PRINCIPAL
 ********************************************/

const EjemplosUseRef = () => {
 return (
  <div style={{ padding: "20px", fontFamily: "Arial, sans-serif" }}>
   <h2>📘 10 Escenarios Útiles de useRef</h2>
   <AccessDOMElement />     {/* ESCENARIO 1: Acceder a un elemento del DOM */}
   <MutableValue />       {/* ESCENARIO 2: Almacenar un valor mutable */}
   <ClickOutsideModal />    {/* ESCENARIO 3: Cerrar modal al hacer clic fuera */}
   <ScrollToElement />     {/* ESCENARIO 4: Scroll hacia una sección */}
  </div>
 );
};

export default EjemplosUseRef;

