import React, { useState, useEffect } from "react";

/********************************************
 * ESCENARIO 1: Manejar eventos de clic
 *******************************************/
// Este ejemplo muestra cómo capturar un evento de clic en un botón.
// Es útil para introducir la propiedad `onClick` y cómo asociar una función manejadora.

const EventoClick = () => {
  const handleClick = () => alert("¡Botón pulsado!");

  return <button onClick={handleClick}>Haz clic aquí</button>;
};

/********************************************
 * ESCENARIO 2: Evento de cambio en input
 *******************************************/
// Se actualiza el estado cada vez que el usuario escribe en el input.
// Perfecto para entender cómo vincular el valor de un input a un estado (`controlled component`).

const EventoChangeInput = () => {
  const [texto, setTexto] = useState("");

  return (
    <div>
      <input
        type="text"
        value={texto}
        onChange={(e) => setTexto(e.target.value)}
        placeholder="Escribe algo..."
      />
      <p>Texto: {texto}</p>
    </div>
  );
};

/********************************************
 * ESCENARIO 3: Manejo de envío de formularios
 *******************************************/
// Este escenario intercepta el evento `onSubmit` de un formulario para evitar el comportamiento
// por defecto de recargar la página, y luego muestra el valor capturado.

const EventoSubmitFormulario = () => {
  const [nombre, setNombre] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Formulario enviado con nombre: ${nombre}`);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={nombre}
        onChange={(e) => setNombre(e.target.value)}
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

const EventoKeyDown = () => {
  const handleKeyDown = (e) => alert(`Tecla presionada: ${e.key}`);

  return <input type="text" placeholder="Presiona una tecla" onKeyDown={handleKeyDown} />;
};

/********************************************
 * ESCENARIO 5: Manejo de eventos de mouse
 *******************************************/
// Este ejemplo muestra cómo manejar eventos de mouse, como pasar el cursor sobre un elemento.
// Es útil cuando necesitas reaccionar a interacciones del usuario con el mouse.

const EventoRaton = () => {
  const handleMouseOver = () => alert("¡Pasaste el ratón sobre el botón!");
  const handleDoubleClick = () => alert("¡Doble clic detectado!");

  return (
    <button onMouseOver={handleMouseOver} onDoubleClick={handleDoubleClick}>
      Pasa el ratón aquí
    </button>
  );
};

/********************************************
 * ESCENARIO 6: Enfoque y desenfoque
 *******************************************/
// Este ejemplo muestra cómo detectar cuándo un input gana o pierde el foco.
// Ideal para validaciones o efectos visuales contextuales.

const EventoFocusBlur = () => {
  const handleFocus = () => console.log("Input con foco");
  const handleBlur = () => console.log("Input sin foco");

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

const EventoChangeSelect = () => {
  const [seleccionado, setSeleccionado] = useState("");

  return (
    <div>
      <select value={seleccionado} onChange={(e) => setSeleccionado(e.target.value)}>
        <option value="">Selecciona una opción</option>
        <option value="opcion1">Opción 1</option>
        <option value="opcion2">Opción 2</option>
      </select>
      <p>Opción seleccionada: {seleccionado}</p>
    </div>
  );
};

/********************************************
 * ESCENARIO 8: Detección de conexión online/offline
 *******************************************/
// Con este componente podemos detectar si el usuario tiene conexión a internet.
// React escucha los eventos `online` y `offline` del objeto `window`.

const EventoEstadoConexion = () => {
  const [online, setOnline] = useState(navigator.onLine);

  useEffect(() => {
    const handleOnline = () => setOnline(true);
    const handleOffline = () => setOnline(false);

    window.addEventListener("online", handleOnline);
    window.addEventListener("offline", handleOffline);

    return () => {
      window.removeEventListener("online", handleOnline);
      window.removeEventListener("offline", handleOffline);
    };
  }, []);

  return <p>Estado de conexión: {online ? "Online" : "Offline"}</p>;
};

/********************************************
 * COMPONENTE PRINCIPAL: Muestra todos los escenarios
 *******************************************/
// Este componente agrupa todos los ejemplos para que el profesor pueda
// mostrarlos y comentarlos uno a uno durante la clase.

const EjemplosEventos = () => {
  return (
    <>
      <h1>Ejemplos de manejo de eventos</h1>
      <EventoClick />               {/* ESCENARIO 1: Manejar eventos de clic */}
      <EventoChangeInput />        {/* ESCENARIO 2: Evento de cambio en input */}
      <EventoSubmitFormulario />    {/* ESCENARIO 3: Manejo de envío de formularios */}
      <EventoKeyDown />            {/* ESCENARIO 4: Manejo de eventos de teclado */}
      <EventoRaton />              {/* ESCENARIO 5: Manejo de eventos de mouse */}
      <EventoFocusBlur />     {/* ESCENARIO 6: Enfoque y desenfoque */}
      <EventoChangeSelect />       {/* ESCENARIO 7: Cambio en un <select> */}
      <EventoEstadoConexion />     {/* ESCENARIO 8: Detección de conexión online/offline */}
    </>
  );
};

export default EjemplosEventos;
