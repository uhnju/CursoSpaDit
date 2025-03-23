import React, { useEffect, useState, useRef } from "react";

/********************************************
 * ESCENARIO 1: Ejecutar código al montar el componente
 *******************************************/
// Este ejemplo muestra cómo usar `useEffect` para ejecutar código solo cuando el componente se monta.
// Es útil para realizar tareas como llamadas a APIs o configuraciones iniciales.

const OnMountExample = () => {
  useEffect(() => {
    console.log("El componente se ha montado.");
  }, []); // El array vacío asegura que el efecto solo se ejecute al montar.

  return <p>Este componente ejecuta código al montarse (ver consola).</p>;
};

/********************************************
 * ESCENARIO 2: Ejecutar código al desmontar el componente
 *******************************************/
// `useEffect` puede usarse para limpiar recursos cuando el componente se desmonta.
// Este ejemplo muestra cómo usar el return del `useEffect` para limpiar un intervalo.

const OnUnmountExample = () => {
  useEffect(() => {
    const interval = setInterval(() => {
      console.log("Intervalo ejecutándose...");
    }, 1000);

    return () => {
      clearInterval(interval);
      console.log("El componente se ha desmontado y el intervalo se ha limpiado.");
    };
  }, []);

  return <p>Este componente tiene un intervalo que se limpia al desmontar (ver consola).</p>;
};

/********************************************
 * ESCENARIO 3: Ejecutar código cuando cambia un estado
 *******************************************/
// `useEffect` puede ejecutar código cada vez que un estado específico cambia.
// Este ejemplo muestra cómo reaccionar a cambios en un estado.

const OnStateChangeExample = () => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    console.log(`El contador ha cambiado a: ${count}`);
  }, [count]); // El efecto se ejecuta cada vez que `count` cambia.

  return (
    <div>
      <p>Contador: {count}</p>
      <button onClick={() => setCount(count + 1)}>Incrementar</button>
    </div>
  );
};

/********************************************
 * ESCENARIO 4: Llamada a una API
 *******************************************/
// `useEffect` es ideal para realizar llamadas a APIs cuando el componente se monta.
// Este ejemplo muestra cómo hacer una llamada a una API y almacenar los datos en el estado.

const ApiCallExample = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/todos/1")
      .then((response) => response.json())
      .then((json) => setData(json));
  }, []); // El array vacío asegura que la llamada solo se haga al montar.

  return (
    <div>
      <p>Datos de la API:</p>
      <pre>{JSON.stringify(data, null, 2)}</pre>
    </div>
  );
};

/********************************************
 * ESCENARIO 5: Actualizar el título de la página
 *******************************************/
// `useEffect` puede usarse para actualizar el título de la página dinámicamente.
// Este ejemplo muestra cómo cambiar el título basado en un estado.

const DocumentTitleExample = () => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    document.title = `Contador: ${count}`;
  }, [count]); // El título se actualiza cada vez que `count` cambia.

  return (
    <div>
      <p>Contador: {count}</p>
      <button onClick={() => setCount(count + 1)}>Incrementar</button>
    </div>
  );
};

/********************************************
 * ESCENARIO 6: Suscripción a eventos del navegador
 *******************************************/
// `useEffect` puede usarse para suscribirse a eventos del navegador, como el resize de la ventana.
// Este ejemplo muestra cómo escuchar el evento de resize y actualizar el estado con el tamaño de la ventana.

const WindowResizeExample = () => {
  const [windowSize, setWindowSize] = useState({
    width: window.innerWidth,
    height: window.innerHeight,
  });

  useEffect(() => {
    const handleResize = () => {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []); // El array vacío asegura que el evento solo se añada al montar.

  return (
    <div>
      <p>
        Tamaño de la ventana: {windowSize.width} x {windowSize.height}
      </p>
    </div>
  );
};

/********************************************
 * ESCENARIO 7: Uso de `useEffect` con `useRef`
 *******************************************/
// `useEffect` puede combinarse con `useRef` para almacenar valores que no causan re-renders.
// Este ejemplo muestra cómo usar `useRef` para almacenar el valor anterior de un estado.

const PreviousValueExample = () => {
  const [value, setValue] = useState("");
  const previousValue = useRef("");

  useEffect(() => {
    previousValue.current = value;
  }, [value]); // El efecto se ejecuta cada vez que `value` cambia.

  return (
    <div>
      <input
        type="text"
        value={value}
        onChange={(e) => setValue(e.target.value)}
        placeholder="Escribe algo..."
      />
      <p>Valor actual: {value}</p>
      <p>Valor anterior: {previousValue.current}</p>
    </div>
  );
};

/********************************************
 * ESCENARIO 8: Temporizador con `useEffect`
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
 * ESCENARIO 9: Validación de formulario en tiempo real
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
 * ESCENARIO 10: Efecto con dependencias múltiples
 *******************************************/
// `useEffect` puede tener múltiples dependencias.
// Este ejemplo muestra cómo ejecutar un efecto cuando cualquiera de las dependencias cambia.

const MultipleDependenciesExample = () => {
  const [count, setCount] = useState(0);
  const [text, setText] = useState("");

  useEffect(() => {
    console.log(`El contador es ${count} y el texto es "${text}".`);
  }, [count, text]); // El efecto se ejecuta cuando `count` o `text` cambian.

  return (
    <div>
      <p>Contador: {count}</p>
      <button onClick={() => setCount(count + 1)}>Incrementar</button>
      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Escribe algo..."
      />
    </div>
  );
};

/********************************************
 * COMPONENTE PRINCIPAL: Muestra todos los escenarios
 *******************************************/
// Este componente centraliza todos los ejemplos para que el profesor pueda
// mostrarlos uno por uno en una única vista. Cada uno está comentado con su número y título.

const EjemplosUseEffect = () => {
  return (
    <div className="p-6 space-y-6">
      <h1 className="text-2xl font-bold">Ejemplos de useEffect en React</h1>

      <OnMountExample />              {/* ESCENARIO 1: Ejecutar código al montar */}
      <OnUnmountExample />            {/* ESCENARIO 2: Ejecutar código al desmontar */}
      <OnStateChangeExample />        {/* ESCENARIO 3: Ejecutar código cuando cambia un estado */}
      <ApiCallExample />              {/* ESCENARIO 4: Llamada a una API */}
      <DocumentTitleExample />        {/* ESCENARIO 5: Actualizar el título de la página */}
      <WindowResizeExample />         {/* ESCENARIO 6: Suscripción a eventos del navegador */}
      <PreviousValueExample />        {/* ESCENARIO 7: Uso de `useEffect` con `useRef` */}
      <TimerExample />                {/* ESCENARIO 8: Temporizador con `useEffect` */}
      <FormValidationExample />       {/* ESCENARIO 9: Validación de formulario en tiempo real */}
      <MultipleDependenciesExample /> {/* ESCENARIO 10: Efecto con dependencias múltiples */}
    </div>
  );
};

export default EjemplosUseEffect;