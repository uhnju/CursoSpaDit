import React, { useRef, useEffect, useState } from "react";

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
 * ESCENARIO 2: Contador de renders
 *******************************************/
// `useRef` puede almacenar valores que persisten entre renders sin causar un nuevo render.
// Aquí se usa para contar cuántas veces el componente se ha renderizado.

const RenderCounter = () => {
  const renderCount = useRef(0);

  useEffect(() => {
    renderCount.current += 1;
  });

  return <p>Este componente se ha renderizado {renderCount.current} veces.</p>;
};

/********************************************
 * ESCENARIO 3: Almacenar un valor anterior
 *******************************************/
// `useRef` es útil para almacenar valores anteriores de un estado o prop.
// Este ejemplo muestra cómo guardar el valor anterior de un estado.

const PreviousValue = () => {
  const [value, setValue] = useState("");
  const previousValue = useRef("");

  useEffect(() => {
    previousValue.current = value;
  }, [value]);

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
 * ESCENARIO 4: Detener un intervalo
 *******************************************/
// `useRef` puede almacenar referencias a intervalos o timeouts.
// Este ejemplo muestra cómo iniciar y detener un intervalo usando `useRef`.

const IntervalExample = () => {
  const [count, setCount] = useState(0);
  const intervalRef = useRef(null);

  const startInterval = () => {
    intervalRef.current = setInterval(() => {
      setCount((prevCount) => prevCount + 1);
    }, 1000);
  };

  const stopInterval = () => {
    clearInterval(intervalRef.current);
  };

  return (
    <div>
      <p>Contador: {count}</p>
      <button onClick={startInterval}>Iniciar intervalo</button>
      <button onClick={stopInterval}>Detener intervalo</button>
    </div>
  );
};

/********************************************
 * ESCENARIO 5: Medir la altura de un elemento
 *******************************************/
// `useRef` puede usarse para medir dimensiones de un elemento del DOM.
// Este ejemplo muestra cómo obtener la altura de un div.

const MeasureElement = () => {
  const divRef = useRef(null);
  const [height, setHeight] = useState(0);

  useEffect(() => {
    if (divRef.current) {
      setHeight(divRef.current.clientHeight);
    }
  }, []);

  return (
    <div>
      <div ref={divRef} style={{ border: "1px solid black", padding: "10px" }}>
        Este es un div de ejemplo.
      </div>
      <p>La altura del div es: {height}px</p>
    </div>
  );
};

/********************************************
 * ESCENARIO 6: Enfocar un input al montar
 *******************************************/
// `useRef` es útil para enfocar un input automáticamente cuando el componente se monta.
// Este ejemplo muestra cómo hacerlo usando `useEffect` y `useRef`.

const AutoFocusInput = () => {
  const inputRef = useRef(null);

  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  }, []);

  return (
    <div>
      <input type="text" ref={inputRef} placeholder="Enfocado automáticamente" />
    </div>
  );
};

/********************************************
 * ESCENARIO 7: Almacenar un valor mutable
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
 * ESCENARIO 8: Reproducir un video
 *******************************************/
// `useRef` puede usarse para controlar elementos multimedia, como un video.
// Este ejemplo muestra cómo reproducir y pausar un video usando `useRef`.

const VideoPlayer = () => {
  const videoRef = useRef(null);

  const playVideo = () => {
    videoRef.current.play();
  };

  const pauseVideo = () => {
    videoRef.current.pause();
  };

  return (
    <div>
      <video ref={videoRef} width="320" height="240" controls>
        <source src="sample-video.mp4" type="video/mp4" />
        Tu navegador no soporta el elemento de video.
      </video>
      <button onClick={playVideo}>Reproducir</button>
      <button onClick={pauseVideo}>Pausar</button>
    </div>
  );
};

/********************************************
 * ESCENARIO 9: Scroll a un elemento
 *******************************************/
// `useRef` puede usarse para hacer scroll a un elemento específico en la página.
// Este ejemplo muestra cómo hacer scroll a un div usando `useRef`.

const ScrollToElement = () => {
  const elementRef = useRef(null);

  const scrollToElement = () => {
    elementRef.current.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div>
      <button onClick={scrollToElement}>Scroll al elemento</button>
      <div style={{ height: "1000px", background: "#f0f0f0" }}>
        Desplázate hacia abajo...
      </div>
      <div
        ref={elementRef}
        style={{ height: "200px", background: "#ccc", marginTop: "20px" }}
      >
        Este es el elemento al que se hace scroll.
      </div>
    </div>
  );
};

/********************************************
 * ESCENARIO 10: Contador sin re-render
 *******************************************/
// `useRef` puede almacenar valores que no causan un re-render cuando cambian.
// Este ejemplo muestra cómo usar `useRef` para contar clics sin causar un re-render.

const ClickCounter = () => {
  const clickCount = useRef(0);

  const handleClick = () => {
    clickCount.current += 1;
    console.log("Clics:", clickCount.current);
  };

  return (
    <div>
      <p>Haz clic en el botón (ver consola para ver el conteo).</p>
      <button onClick={handleClick}>Haz clic</button>
    </div>
  );
};

/********************************************
 * COMPONENTE PRINCIPAL: Muestra todos los escenarios
 *******************************************/
// Este componente centraliza todos los ejemplos para que el profesor pueda
// mostrarlos uno por uno en una única vista. Cada uno está comentado con su número y título.

const EjemplosUseRef = () => {
  return (
    <div className="p-6 space-y-6">
      <h1 className="text-2xl font-bold">Ejemplos de useRef en React</h1>

      <AccessDOMElement />      {/* ESCENARIO 1: Acceder a un elemento del DOM */}
      <RenderCounter />         {/* ESCENARIO 2: Contador de renders */}
      <PreviousValue />         {/* ESCENARIO 3: Almacenar un valor anterior */}
      <IntervalExample />       {/* ESCENARIO 4: Detener un intervalo */}
      <MeasureElement />        {/* ESCENARIO 5: Medir la altura de un elemento */}
      <AutoFocusInput />        {/* ESCENARIO 6: Enfocar un input al montar */}
      <MutableValue />          {/* ESCENARIO 7: Almacenar un valor mutable */}
      <VideoPlayer />           {/* ESCENARIO 8: Reproducir un video */}
      <ScrollToElement />       {/* ESCENARIO 9: Scroll a un elemento */}
      <ClickCounter />          {/* ESCENARIO 10: Contador sin re-render */}
    </div>
  );
};

export default EjemplosUseRef;