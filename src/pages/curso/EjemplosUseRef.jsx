import { useRef, useState, useEffect } from "react";

// ✅ 1️⃣ Enfocar un input al montar el componente
const AutoFocusInput = () => {
  const inputRef = useRef(null);

  useEffect(() => {
    inputRef.current.focus();
  }, []);

  return <input ref={inputRef} placeholder="Escribe aquí..." />;
};

// ✅ 2️⃣ Acceder al valor de un input sin estado
const ReadInputValue = () => {
  const inputRef = useRef(null);

  const handleClick = () => {
    alert(inputRef.current.value);
  };

  return (
    <div>
      <input ref={inputRef} type="text" placeholder="Escribe algo" />
      <button onClick={handleClick}>Mostrar Valor</button>
    </div>
  );
};

// ✅ 3️⃣ Contador sin renderizados innecesarios
const CounterWithoutRender = () => {
  const count = useRef(0);
  const [render, setRender] = useState(0);

  const increment = () => {
    count.current += 1;
    console.log("Contador:", count.current);
  };

  return (
    <div>
      <p>Re-renderizados: {render}</p>
      <button onClick={increment}>Incrementar sin renderizar</button>
      <button onClick={() => setRender(render + 1)}>Forzar render</button>
    </div>
  );
};

// ✅ 4️⃣ Acceder al tamaño de un div
const MeasureDiv = () => {
  const divRef = useRef(null);
  const [width, setWidth] = useState(0);

  useEffect(() => {
    setWidth(divRef.current.offsetWidth);
  }, []);

  return (
    <div ref={divRef} style={{ width: "50%", background: "lightblue", padding: "20px" }}>
      <p>El ancho de este div es: {width}px</p>
    </div>
  );
};

// ✅ 5️⃣ Reproducir / Pausar un video
const VideoPlayer = () => {
  const videoRef = useRef(null);

  const togglePlay = () => {
    if (videoRef.current.paused) {
      videoRef.current.play();
    } else {
      videoRef.current.pause();
    }
  };

  return (
    <div>
      <video ref={videoRef} width="300" controls>
        <source src="https://www.w3schools.com/html/mov_bbb.mp4" type="video/mp4" />
      </video>
      <button onClick={togglePlay}>Play / Pause</button>
    </div>
  );
};

// ✅ 6️⃣ Animar un elemento con `useRef`
const AnimateBox = () => {
  const boxRef = useRef(null);

  const moveBox = () => {
    boxRef.current.style.transform = "translateX(100px)";
  };

  return (
    <div>
      <div ref={boxRef} style={{ width: 50, height: 50, background: "red", transition: "0.5s" }}></div>
      <button onClick={moveBox}>Mover</button>
    </div>
  );
};

// ✅ 7️⃣ Detectar clics fuera de un modal
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

// ✅ 8️⃣ Guardar el valor anterior de un estado
const PreviousValue = () => {
  const [count, setCount] = useState(0);
  const prevCount = useRef(0);

  useEffect(() => {
    prevCount.current = count;
  }, [count]);

  return (
    <div>
      <p>Actual: {count}</p>
      <p>Anterior: {prevCount.current}</p>
      <button onClick={() => setCount(count + 1)}>Incrementar</button>
    </div>
  );
};

// ✅ 9️⃣ Temporizador con `useRef`
const Timer = () => {
  const [time, setTime] = useState(0);
  const intervalRef = useRef(null);

  const startTimer = () => {
    if (!intervalRef.current) {
      intervalRef.current = setInterval(() => {
        setTime((t) => t + 1);
      }, 1000);
    }
  };

  const stopTimer = () => {
    clearInterval(intervalRef.current);
    intervalRef.current = null;
  };

  return (
    <div>
      <p>Tiempo: {time}s</p>
      <button onClick={startTimer}>Iniciar</button>
      <button onClick={stopTimer}>Detener</button>
    </div>
  );
};

// ✅ 🔟 Scroll automático a un elemento
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

// ✅ Componente principal con todos los ejemplos
const EjemplosUseRef = () => {
  return (
    <div style={{ padding: "20px", fontFamily: "Arial, sans-serif" }}>
      <h2>📘 10 Escenarios Útiles de useRef</h2>
      <AutoFocusInput />
      <ReadInputValue />
      <CounterWithoutRender />
      <MeasureDiv />
      <VideoPlayer />
      <AnimateBox />
      <ClickOutsideModal />
      <PreviousValue />
      <Timer />
      <ScrollToElement />
    </div>
  );
};

export default EjemplosUseRef;
