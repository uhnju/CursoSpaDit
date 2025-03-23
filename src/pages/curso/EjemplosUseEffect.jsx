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

  return <p>✅ 1. Efecto ejecutado solo al montar.</p>;
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

  return <p>✅ 2. Este efecto se limpiará al desmontarse.</p>;
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
  }, [count]);

  return (
    <div>
      <p>✅ 3. Contador: {count}</p>
      <button onClick={() => setCount(count + 1)}>Incrementar</button>
    </div>
  );
};

/********************************************
 * ESCENARIO 4: Detectar tamaño de la ventana (resize)
 *******************************************/
// Añade un `eventListener` para actualizar el estado cuando se redimensiona la ventana.
// Se limpia el listener al desmontar.

const WindowResizeEffect = () => {
  const [width, setWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => setWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return <p>✅ 4. Ancho de ventana: {width}px</p>;
};

/********************************************
 * ESCENARIO 5: Hacer una petición a una API
 *******************************************/
// Este `useEffect` realiza una petición con `fetch` cuando el componente se monta.
// Se usa mucho para cargar datos desde el servidor.

const FetchEffect = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/todos/1")
      .then((response) => response.json())
      .then((json) => setData(json));
  }, []);

  return <p>✅ 5. Datos: {data ? JSON.stringify(data) : "Cargando..."}</p>;
};

/********************************************
 * ESCENARIO 6: Escuchar eventos de teclado
 *******************************************/
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

  return <p>✅ 6. Presiona cualquier tecla y revisa la consola.</p>;
};

/********************************************
 * ESCENARIO 7: Animación al montar el componente
 *******************************************/
// Se simula una animación de entrada cambiando la opacidad al montar.

const AnimationEffect = () => {
  const [opacity, setOpacity] = useState(0);

  useEffect(() => {
    setTimeout(() => setOpacity(1), 500);
  }, []);

  return <p style={{ opacity, transition: "opacity 1s" }}>✅ 7. Animación con useEffect.</p>;
};

/********************************************
 * ESCENARIO 8: Cambiar el título de la página
 *******************************************/
// Este efecto actualiza el `document.title` cada vez que cambia `count`.
// Muy usado para mostrar notificaciones en la pestaña del navegador.

const DynamicTitleEffect = () => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    document.title = `Clicks: ${count}`;
  }, [count]);

  return (
    <div>
      <p>✅ 8. Clicks: {count}</p>
      <button onClick={() => setCount(count + 1)}>Incrementar</button>
    </div>
  );
};

/********************************************
 * ESCENARIO 9: Guardar texto en localStorage
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
 * ESCENARIO 10: Temporizador (timer con intervalos)
 *******************************************/
// Usa `setInterval` para contar segundos. El intervalo se limpia automáticamente
// cuando el componente se desmonta para evitar fugas de memoria.

const TimerEffect = () => {
  const [time, setTime] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setTime((t) => t + 1);
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return <p>✅ 🔟 Tiempo transcurrido: {time}s</p>;
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

      <MountEffect />           {/* ESCENARIO 1 */}
      <UnmountEffect />         {/* ESCENARIO 2 */}
      <StateEffect />           {/* ESCENARIO 3 */}
      <WindowResizeEffect />    {/* ESCENARIO 4 */}
      <FetchEffect />           {/* ESCENARIO 5 */}
      <KeyPressEffect />        {/* ESCENARIO 6 */}
      <AnimationEffect />       {/* ESCENARIO 7 */}
      <DynamicTitleEffect />    {/* ESCENARIO 8 */}
      <LocalStorageEffect />    {/* ESCENARIO 9 */}
      <TimerEffect />           {/* ESCENARIO 10 */}
    </div>
  );
};

export default EjemplosUseEffect;
