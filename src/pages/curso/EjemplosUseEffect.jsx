import { useState, useEffect } from "react";

/********************************************
 * ESCENARIO 1: Ejecutar al montar el componente
 *******************************************/
// Este `useEffect` se ejecuta una sola vez cuando el componente se monta,
// simulando el comportamiento de `componentDidMount` en clases.

const MountEffect = () => {
 useEffect(() => {
  console.log("El componente se ha montado.");
 }, []);

 return <p>Efecto ejecutado solo al montar.</p>;
};

/********************************************
 * ESCENARIO 2: Ejecutar al desmontar (limpieza)
 *******************************************/
// En este ejemplo, se devuelve una función dentro del `useEffect` que se ejecutará
// justo antes de que el componente se desmonte. Es útil para limpiar listeners o timers.

const UnmountEffect = () => {
 useEffect(() => {
  return () => console.log("El componente se desmontó.");
 }, []);

 return <p>Este efecto se limpiará al desmontarse.</p>;
};

/********************************************
 * ESCENARIO 3: Escuchar cambios de estado
 *******************************************/
// El efecto se ejecuta cada vez que el valor de `count` cambia.
// Ideal para reaccionar ante cambios de estado específicos.

const StateEffect = () => {
 const [count, setCount] = useState(0);

 useEffect(() => {
  console.log("El contador cambió:", count);
  document.title = `Clicks: ${count}`;
 }, [count]);

 return (
  <div>
   <p>Contador: {count}</p>
   <button onClick={() => setCount(count + 1)}>Incrementar</button>
  </div>
 );
};

/********************************************
 * ESCENARIO 4: Suscripción a eventos
 *******************************************/
// `useEffect` puede usarse para suscribirse a eventos el navegador, teclado, raton, etc
// Se detecta cualquier tecla presionada en el navegador y se muestra por consola.
// Es útil para accesos rápidos o controles de accesibilidad.

const KeyPressEffect = () => {
 useEffect(() => {
  const handleKeyPress = (event) => {
   console.log("Tecla presionada:", event.key);
  };

  window.addEventListener("keydown", handleKeyPress);
  return () => window.removeEventListener("keydown", handleKeyPress);
 }, []);

 return <p>Presiona cualquier tecla y revisa la consola.</p>;
};

/********************************************
 * ESCENARIO 5: Hacer una petición a una API
 *******************************************/
// Este `useEffect` realiza una petición con `fetch` cuando el componente se monta.
// Se usa mucho para cargar datos desde el servidor.

const FetchEffect = () => {
 const [data, setData] = useState(null);

 useEffect(() => {
  fetch("https://www2.agenciatributaria.gob.aeat/wlpl/SPAD-RDIT/EjemploRESTService")
   .then((response) => response.json())
   .then((json) => setData(json));
 }, []);

 return <p>Datos: {data ? JSON.stringify(data) : "Cargando..."}</p>;
};



/********************************************
 * ESCENARIO 6: Guardar texto en localStorage
 *******************************************/
// Cada vez que cambia el contenido del textarea, se guarda automáticamente en localStorage.
// Así se mantiene persistente incluso tras cerrar o recargar la página.

const LocalStorageEffect = () => {
 const [text, setText] = useState(localStorage.getItem("text") || "");

 useEffect(() => {
  localStorage.setItem("text", text);
 }, [text]);

 return (
  <textarea
   value={text}
   onChange={(e) => setText(e.target.value)}
   placeholder="Escribe algo..."
  />
 );
};

/********************************************
 * ESCENARIO 7: Temporizador con `useEffect`
 *******************************************/
// `useEffect` puede usarse para crear un temporizador que se actualiza cada segundo.
// Este ejemplo muestra cómo usar `useEffect` para crear un contador de tiempo.

const TimerExample = () => {
 const [time, setTime] = useState(0);

 useEffect(() => {
  const interval = setInterval(() => {
   setTime((prevTime) => prevTime + 1);
  }, 1000);

  return () => clearInterval(interval);
 }, []); // El array vacío asegura que el intervalo solo se inicie al montar.

 return <p>Tiempo transcurrido: {time} segundos</p>;
};

/********************************************
 * ESCENARIO 8: Validación de formulario en tiempo real
 *******************************************/
// `useEffect` puede usarse para validar un formulario en tiempo real.
// Este ejemplo muestra cómo validar un input mientras el usuario escribe.

const FormValidationExample = () => {
 const [inputValue, setInputValue] = useState("");
 const [isValid, setIsValid] = useState(false);

 useEffect(() => {
  setIsValid(inputValue.length >= 5);
 }, [inputValue]); // El efecto se ejecuta cada vez que `inputValue` cambia.

 return (
  <div>
   <input
    type="text"
    value={inputValue}
    onChange={(e) => setInputValue(e.target.value)}
    placeholder="Escribe al menos 5 caracteres"
   />
   <p>{isValid ? "✅ Válido" : "❌ No válido"}</p>
  </div>
 );
};


/********************************************
 * COMPONENTE PRINCIPAL: Muestra todos los escenarios
 *******************************************/
// Este componente agrupa todos los ejemplos de uso de `useEffect` en una sola vista,
// ideal para demostrar cómo reacciona React a cambios de estado, eventos y efectos secundarios.

const EjemplosUseEffect = () => {
 return (
  <div className="p-6 space-y-6">
   <h1 className="text-2xl font-bold">Ejemplos de useEffect en React</h1>

   <MountEffect />     {/* ESCENARIO 1: Ejecutar al montar el componente */}
   <UnmountEffect />    {/* ESCENARIO 2: Ejecutar al desmontar (limpieza) */}
   <StateEffect />     {/* ESCENARIO 3: Escuchar cambios de estado */}
   <KeyPressEffect />    {/* ESCENARIO 4: Suscripción a eventos */}
   <FetchEffect />     {/* ESCENARIO 5: Hacer una petición a una API */}
   <LocalStorageEffect />  {/* ESCENARIO 6: Guardar texto en localStorage*/}
   <TimerExample />     {/* ESCENARIO 7: Temporizador con `useEffect` */}
   <FormValidationExample /> {/* ESCENARIO 8: Validación de formulario en tiempo real */}
  </div>
 );
};

export default EjemplosUseEffect;

