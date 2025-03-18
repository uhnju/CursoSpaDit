import { useState, useEffect } from "react";

// ✅ 1️⃣ Ejecutar código al montar el componente (simulación de "componentDidMount")
const MountEffect = () => {
  useEffect(() => {
    console.log("El componente se ha montado.");
  }, []);

  return <p>✅ 1. Efecto ejecutado solo al montar.</p>;
};

// ✅ 2️⃣ Ejecutar código al desmontar (cleanup)
const UnmountEffect = () => {
  useEffect(() => {
    return () => console.log("El componente se desmontó.");
  }, []);

  return <p>✅ 2. Este efecto se limpiará al desmontarse.</p>;
};

// ✅ 3️⃣ Ejecutar código cuando cambia un estado
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

// ✅ 4️⃣ Detectar cambios en el tamaño de la ventana
const WindowResizeEffect = () => {
  const [width, setWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => setWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return <p>✅ 4. Ancho de ventana: {width}px</p>;
};

// ✅ 5️⃣ Hacer una petición a una API
const FetchEffect = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/todos/1")
      .then((response) => response.json())
      .then((json) => setData(json));
  }, []);

  return <p>✅ 5. Datos: {data ? JSON.stringify(data) : "Cargando..."}</p>;
};

// ✅ 6️⃣ Escuchar eventos de teclado
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

// ✅ 7️⃣ Animación al montar el componente
const AnimationEffect = () => {
  const [opacity, setOpacity] = useState(0);

  useEffect(() => {
    setTimeout(() => setOpacity(1), 500);
  }, []);

  return <p style={{ opacity, transition: "opacity 1s" }}>✅ 7. Animación con useEffect.</p>;
};

// ✅ 8️⃣ Cambiar dinámicamente el título de la página
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

// ✅ 9️⃣ Guardar estado en localStorage
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

// ✅ 🔟 Temporizador con `useEffect`
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

// ✅ Componente principal con todos los ejemplos
const EjemplosUseEffect = () => {
  return (
    <div style={{ padding: "20px", fontFamily: "Arial, sans-serif" }}>
      <h2>📘 10 Escenarios Útiles de useEffect</h2>
      <MountEffect />
      <UnmountEffect />
      <StateEffect />
      <WindowResizeEffect />
      <FetchEffect />
      <KeyPressEffect />
      <AnimationEffect />
      <DynamicTitleEffect />
      <LocalStorageEffect />
      <TimerEffect />
    </div>
  );
};

export default EjemplosUseEffect;
