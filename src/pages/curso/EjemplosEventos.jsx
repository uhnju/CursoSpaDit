import React, { useState, useEffect } from "react";

/********************************************
 * ESCENARIO 1: Manejar eventos de clic
 *******************************************/
// Este ejemplo muestra cómo capturar un evento de clic en un botón.
// Es útil para introducir la propiedad `onClick` y cómo asociar una función manejadora.

const ClickEvent = () => {
 const handleClick = () => alert("¡Botón clickeado!");

 return <button onClick={handleClick}>Haz clic aquí</button>;
};

/********************************************
 * ESCENARIO 2: Evento de cambio en input
 *******************************************/
// Se actualiza el estado cada vez que el usuario escribe en el input.
// Perfecto para entender cómo vincular el valor de un input a un estado (`controlled component`).

const InputChangeEvent = () => {
 const [text, setText] = useState("");

 return (
  <div>
   <input
    type="text"
    value={text}
    onChange={(e) => setText(e.target.value)}
    placeholder="Escribe algo..."
   />
   <p>Texto: {text}</p>
  </div>
 );
};

/********************************************
 * ESCENARIO 3: Manejo de envío de formularios
 *******************************************/
// Este escenario intercepta el evento `onSubmit` de un formulario para evitar el comportamiento
// por defecto de recargar la página, y luego muestra el valor capturado.

const FormSubmitEvent = () => {
 const [name, setName] = useState("");

 const handleSubmit = (e) => {
  e.preventDefault();
  alert(`Formulario enviado con nombre: ${name}`);
 };

 return (
  <form onSubmit={handleSubmit}>
   <input
    type="text"
    value={name}
    onChange={(e) => setName(e.target.value)}
    placeholder="Nombre"
   />
   <button type="submit">Enviar</button>
  </form>
 );
};

/********************************************
 * ESCENARIO 4: Manejo de eventos de teclado
 *******************************************/
// Captura qué tecla ha sido presionada por el usuario utilizando `onKeyDown`.
// Muy útil para construir atajos de teclado, validaciones, etc.

const KeyPressEvent = () => {
 const handleKeyPress = (e) => alert(`Tecla presionada: ${e.key}`);

 return <input type="text" placeholder="Presiona una tecla" onKeyDown={handleKeyPress} />;
};


/********************************************
 * ESCENARIO 5: Manejo de eventos de mouse
 *******************************************/
// Este ejemplo muestra cómo manejar eventos de mouse, como pasar el cursor sobre un elemento.
// Es útil cuando necesitas reaccionar a interacciones del usuario con el mouse.

const MouseEventExample = () => {
 const handleMouseOver = () => {
  alert("¡Pasaste el mouse sobre el botón!");
 };
 const handleDoubleClick = () => alert("¡Doble clic detectado!");

 return <button onMouseOver={handleMouseOver} onDoubleClick={handleDoubleClick}>Pasa el mouse aquí</button>;
};


/********************************************
 * ESCENARIO 6: Enfoque y desenfoque
 *******************************************/
// Este ejemplo muestra cómo detectar cuándo un input gana o pierde el foco.
// Ideal para validaciones o efectos visuales contextuales.

const FocusBlurEvent = () => {
 const handleFocus = () => console.log("Input enfocado");
 const handleBlur = () => console.log("Input desenfocado");

 return (
  <input
   type="text"
   placeholder="Enfócate aquí"
   onFocus={handleFocus}
   onBlur={handleBlur}
  />
 );
};

/********************************************
 * ESCENARIO 7: Cambio en un <select>
 *******************************************/
// Se muestra cómo capturar el valor seleccionado de un menú desplegable.
// Muy común en formularios donde el usuario debe elegir entre varias opciones.

const SelectChangeEvent = () => {
 const [selected, setSelected] = useState("");

 return (
  <div>
   <select value={selected} onChange={(e) => setSelected(e.target.value)}>
    <option value="">Selecciona una opción</option>
    <option value="opcion1">Opción 1</option>
    <option value="opcion2">Opción 2</option>
   </select>
   <p>Opción seleccionada: {selected}</p>
  </div>
 );
};


/********************************************
 * ESCENARIO 8: Detección de conexión online/offline
 *******************************************/
// Con este componente podemos detectar si el usuario tiene conexión a internet.
// React escucha los eventos `online` y `offline` del objeto `window`.

const OnlineStatusEvent = () => {
 const [isOnline, setIsOnline] = useState(navigator.onLine);

 useEffect(() => {
  const handleOnline = () => setIsOnline(true);
  const handleOffline = () => setIsOnline(false);

  window.addEventListener("online", handleOnline);
  window.addEventListener("offline", handleOffline);

  return () => {
   window.removeEventListener("online", handleOnline);
   window.removeEventListener("offline", handleOffline);
  };
 }, []);

 return <p>Estado de conexión: {isOnline ? "Online" : "Offline"}</p>;
};

/********************************************
 * COMPONENTE PRINCIPAL: Muestra todos los escenarios
 *******************************************/
// Este componente agrupa todos los ejemplos para que el profesor pueda
// mostrarlos y comentarlos uno a uno durante la clase.

const EjemplosEventos = () => {
 return (
  <div className="p-6 space-y-6">
   <h1 className="text-2xl font-bold">Ejemplos de manejo de eventos en React</h1>

   <ClickEvent />      {/* ESCENARIO 1: Clic */}
   <InputChangeEvent />   {/* ESCENARIO 2: Cambio en input */}
   <FormSubmitEvent />   {/* ESCENARIO 3: Submit en formulario */}
   <KeyPressEvent />    {/* ESCENARIO 4: Tecla presionada */}
   <MouseEventExample />  {/* ESCENARIO 5: Eventos de mouse */}
   <FocusBlurEvent />    {/* ESCENARIO 6: Focus y blur */}
   <SelectChangeEvent />  {/* ESCENARIO 7: Cambio en select */}
   <OnlineStatusEvent />  {/* ESCENARIO 8: Online/Offline */}
  </div>
 );
};

export default EjemplosEventos;

