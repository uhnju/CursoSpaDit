import React, { useState, useEffect } from "react";

/********************************************
 * ESCENARIO 1: Manejo de clics
 *******************************************/
// Este ejemplo muestra cómo manejar el evento de clic en un botón.
// Es útil cuando necesitas ejecutar una acción cuando el usuario hace clic en un elemento.

const ClickEventExample = () => {
  const handleClick = () => {
    alert("¡Hiciste clic en el botón!");
  };

  return <button onClick={handleClick}>Haz clic aquí</button>;
};

/********************************************
 * ESCENARIO 2: Manejo de cambios en un input
 *******************************************/
// Este ejemplo muestra cómo manejar el evento de cambio en un input.
// Es útil cuando necesitas capturar el valor que el usuario escribe en un campo de texto.

const InputChangeEventExample = () => {
  const [inputValue, setInputValue] = useState("");

  const handleChange = (e) => {
    setInputValue(e.target.value);
  };

  return (
    <div>
      <input type="text" value={inputValue} onChange={handleChange} />
      <p>Valor del input: {inputValue}</p>
    </div>
  );
};

/********************************************
 * ESCENARIO 3: Manejo de envío de formulario
 *******************************************/
// Este ejemplo muestra cómo manejar el evento de envío de un formulario.
// Es útil cuando necesitas procesar los datos que el usuario ha ingresado en un formulario.

const FormSubmitEventExample = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Formulario enviado");
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" placeholder="Escribe algo" />
      <button type="submit">Enviar</button>
    </form>
  );
};

/********************************************
 * ESCENARIO 4: Manejo de eventos de teclado
 *******************************************/
// Este ejemplo muestra cómo manejar eventos de teclado, como presionar una tecla.
// Es útil cuando necesitas detectar acciones específicas del teclado, como "Enter".

const KeyboardEventExample = () => {
  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      alert("Presionaste Enter");
    }
  };

  return <input type="text" onKeyPress={handleKeyPress} placeholder="Presiona Enter" />;
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

  return <button onMouseOver={handleMouseOver}>Pasa el mouse aquí</button>;
};

/********************************************
 * ESCENARIO 6: Manejo de eventos de scroll
 *******************************************/
// Este ejemplo muestra cómo manejar eventos de scroll en la ventana.
// Es útil cuando necesitas detectar cuándo el usuario ha desplazado la página.

const ScrollEventExample = () => {
  const handleScroll = () => {
    console.log("El usuario está desplazando la página");
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return <div style={{ height: "200vh" }}>Desplázate hacia abajo</div>;
};

/********************************************
 * ESCENARIO 7: Manejo de eventos de focus y blur
 *******************************************/
// Este ejemplo muestra cómo manejar eventos de focus y blur en un input.
// Es útil cuando necesitas detectar cuándo un campo de texto gana o pierde el foco.

const FocusBlurEventExample = () => {
  const handleFocus = () => {
    console.log("El input tiene el foco");
  };

  const handleBlur = () => {
    console.log("El input perdió el foco");
  };

  return (
    <input
      type="text"
      onFocus={handleFocus}
      onBlur={handleBlur}
      placeholder="Haz clic aquí"
    />
  );
};

/********************************************
 * ESCENARIO 8: Manejo de eventos de doble clic
 *******************************************/
// Este ejemplo muestra cómo manejar el evento de doble clic en un elemento.
// Es útil cuando necesitas ejecutar una acción cuando el usuario hace doble clic.

const DoubleClickEventExample = () => {
  const handleDoubleClick = () => {
    alert("¡Hiciste doble clic!");
  };

  return <button onDoubleClick={handleDoubleClick}>Haz doble clic aquí</button>;
};

/********************************************
 * ESCENARIO 9: Manejo de eventos de cambio en un select
 *******************************************/
// Este ejemplo muestra cómo manejar el evento de cambio en un elemento `<select>`.
// Es útil cuando necesitas capturar la opción seleccionada por el usuario.

const SelectChangeEventExample = () => {
  const [selectedOption, setSelectedOption] = useState("");

  const handleChange = (e) => {
    setSelectedOption(e.target.value);
  };

  return (
    <div>
      <select value={selectedOption} onChange={handleChange}>
        <option value="">Selecciona una opción</option>
        <option value="opcion1">Opción 1</option>
        <option value="opcion2">Opción 2</option>
      </select>
      <p>Opción seleccionada: {selectedOption}</p>
    </div>
  );
};

/********************************************
 * ESCENARIO 10: Manejo de eventos personalizados
 *******************************************/
// Este ejemplo muestra cómo crear y manejar eventos personalizados.
// Es útil cuando necesitas comunicar componentes o ejecutar lógica compleja.

const CustomEventExample = () => {
  const handleCustomEvent = () => {
    const event = new CustomEvent("miEventoPersonalizado", {
      detail: { mensaje: "¡Este es un evento personalizado!" },
    });
    window.dispatchEvent(event);
  };

  useEffect(() => {
    const handleEvent = (e) => {
      console.log(e.detail.mensaje);
    };

    window.addEventListener("miEventoPersonalizado", handleEvent);
    return () => window.removeEventListener("miEventoPersonalizado", handleEvent);
  }, []);

  return <button onClick={handleCustomEvent}>Disparar evento personalizado</button>;
};

/********************************************
 * COMPONENTE PRINCIPAL: Muestra todos los escenarios
 *******************************************/
// Este componente centraliza todos los ejemplos para que el profesor pueda
// mostrarlos uno por uno en una única vista. Cada uno está comentado con su número y título.

const EjemplosEventos = () => {
  return (
    <div className="p-6 space-y-6">
      <h1 className="text-2xl font-bold">Ejemplos de Manejo de Eventos en React</h1>

      <ClickEventExample />          {/* ESCENARIO 1: Manejo de clics */}
      <InputChangeEventExample />    {/* ESCENARIO 2: Manejo de cambios en un input */}
      <FormSubmitEventExample />     {/* ESCENARIO 3: Manejo de envío de formulario */}
      <KeyboardEventExample />       {/* ESCENARIO 4: Manejo de eventos de teclado */}
      <MouseEventExample />          {/* ESCENARIO 5: Manejo de eventos de mouse */}
      <ScrollEventExample />         {/* ESCENARIO 6: Manejo de eventos de scroll */}
      <FocusBlurEventExample />      {/* ESCENARIO 7: Manejo de eventos de focus y blur */}
      <DoubleClickEventExample />    {/* ESCENARIO 8: Manejo de eventos de doble clic */}
      <SelectChangeEventExample />   {/* ESCENARIO 9: Manejo de eventos de cambio en un select */}
      <CustomEventExample />         {/* ESCENARIO 10: Manejo de eventos personalizados */}
    </div>
  );
};

export default EjemplosEventos;