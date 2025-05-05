/********************************************
 * ESCENARIO 1: Manejar eventos de clic
 *******************************************/

const EventoClick = () => {
  const handleClick = () => alert("¡Botón pulsado!");

  return <button onClick={handleClick}>Haz clic aquí</button>;
};

/********************************************
 * ESCENARIO 2: Evento de cambio en input
 *******************************************/

const EventoChangeInput = () => {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => console.log("Texto:", e.target.value);

  return <input type="text" placeholder="Escribe algo" onChange={handleChange} />;
};

/********************************************
 * ESCENARIO 3: Manejo de eventos de teclado
 *******************************************/

const EventoKeyDown = () => {
  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => alert(`Tecla presionada: ${e.key}`);

  return <input type="text" placeholder="Presiona una tecla" onKeyDown={handleKeyDown} />;
};

/********************************************
 * ESCENARIO 4: Enfoque y desenfoque
 *******************************************/

const EventoFocusBlur = () => {
  const handleFocus = () => console.log("Input con foco");
  const handleBlur = () => console.log("Input sin foco");

  return (
    <input
      type="text"
      placeholder="Haz foco aquí"
      onFocus={handleFocus}
      onBlur={handleBlur}
    />
  );
};

/********************************************
 * ESCENARIO 4: Cambio en un <select>
 *******************************************/

const EventoChangeSelect = () => {
  const handleSelectChange = (e: React.ChangeEvent<HTMLSelectElement>) => console.log("Seleccionado:", e.target.value);

  return (
    <select onChange={handleSelectChange}>
      <option value="">Selecciona una opción</option>
      <option value="opcion1">Opción 1</option>
      <option value="opcion2">Opción 2</option>
    </select>
  );
};

/********************************************
 * COMPONENTE PRINCIPAL: Muestra todos los escenarios
 *******************************************/

const EjemplosEventos = () => {
  return (
    <>
      <h1>Ejemplos de manejo de eventos</h1>
      <EventoClick />               {/* ESCENARIO 1: Manejar eventos de clic */}
      <EventoChangeInput />        {/* ESCENARIO 2: Evento de cambio en input */}
      <EventoKeyDown />            {/* ESCENARIO 3: Teclas presionadas */}
      <EventoFocusBlur />          {/* ESCENARIO 4: Focus y blur */}
      <EventoChangeSelect />       {/* ESCENARIO 5: Cambio en select */}
    </>
  );
};

export default EjemplosEventos;

