import { useState, useEffect } from "react";

/********************************************
 * ESCENARIO 1: Ejecutar al montar el componente
 *******************************************/
// Este `useEffect` se ejecuta una sola vez cuando el componente se monta,
// simulando el comportamiento de `componentDidMount` en clases.

const EfectoAlMontar = () => {
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

const EfectoAlDesmontar = () => {
  useEffect(() => {
    return () => console.log("El componente se desmontó.");
  }, []);

  return <p>Este efecto se limpiará al desmontarse.</p>;
};

/********************************************
 * ESCENARIO 3: Escuchar cambios de estado
 *******************************************/
// El efecto se ejecuta cada vez que el valor de `contador` cambia.
// Ideal para reaccionar ante cambios de estado específicos.

const EfectoEstado = () => {
  const [contador, setContador] = useState(0);

  useEffect(() => {
    console.log("El contador cambió:", contador);
    document.title = `Clicks: ${contador}`;
  }, [contador]);

  return (
    <div>
      <p>Contador: {contador}</p>
      <button onClick={() => setContador(contador + 1)}>Incrementar</button>
    </div>
  );
};

/********************************************
 * ESCENARIO 4: Suscripción a eventos
 *******************************************/
// `useEffect` puede usarse para suscribirse a eventos del navegador, teclado, ratón, etc.
// Se detecta cualquier tecla presionada y se muestra por consola.
// Es útil para accesos rápidos o controles de accesibilidad.

const EfectoTeclado = () => {
  useEffect(() => {
    const handleKeyDown = (evento) => {
      console.log("Tecla presionada:", evento.key);
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  return <p>Presiona cualquier tecla y revisa la consola.</p>;
};

/********************************************
 * ESCENARIO 5: Hacer una petición a una API
 *******************************************/
// Este `useEffect` realiza una petición con `fetch` cuando el componente se monta.
// Se usa mucho para cargar datos desde el servidor.

const EfectoFetch = () => {
  const [datos, setDatos] = useState(null);

  useEffect(() => {
    fetch("https://www2.agenciatributaria.gob.aeat/wlpl/SPAD-RDIT/EjemploRESTService")
      .then((respuesta) => respuesta.json())
      .then((json) => setDatos(json));
  }, []);

  return <p>Datos: {datos ? JSON.stringify(datos) : "Cargando..."}</p>;
};

/********************************************
 * ESCENARIO 6: Guardar texto en localStorage
 *******************************************/
// Cada vez que cambia el contenido del textarea, se guarda automáticamente en localStorage.
// Así se mantiene persistente incluso tras cerrar o recargar la página.

const EfectoLocalStorage = () => {
  const [texto, setTexto] = useState(localStorage.getItem("texto") || "");

  useEffect(() => {
    localStorage.setItem("texto", texto);
  }, [texto]);

  return (
    <textarea
      value={texto}
      onChange={(e) => setTexto(e.target.value)}
      placeholder="Escribe algo..."
    />
  );
};

/********************************************
 * ESCENARIO 7: Temporizador con `useEffect`
 *******************************************/
// `useEffect` puede usarse para crear un temporizador que se actualiza cada segundo.
// Este ejemplo muestra cómo usar `useEffect` para crear un contador de tiempo.

const EfectoTemporizador = () => {
  const [tiempo, setTiempo] = useState(0);

  useEffect(() => {
    const intervalo = setInterval(() => {
      setTiempo((tiempoAnterior) => tiempoAnterior + 1);
    }, 1000);

    return () => clearInterval(intervalo);
  }, []);

  return <p>Tiempo transcurrido: {tiempo} segundos</p>;
};

/********************************************
 * ESCENARIO 8: Validación de formulario en tiempo real
 *******************************************/
// `useEffect` puede usarse para validar un formulario en tiempo real.
// Este ejemplo muestra cómo validar un input mientras el usuario escribe.

const EfectoValidacionFormulario = () => {
  const [valorInput, setValorInput] = useState("");
  const [esValido, setEsValido] = useState(false);

  useEffect(() => {
    setEsValido(valorInput.length >= 5);
  }, [valorInput]);

  return (
    <div>
      <input
        type="text"
        value={valorInput}
        onChange={(e) => setValorInput(e.target.value)}
        placeholder="Escribe al menos 5 caracteres"
      />
      <p>{esValido ? "✅ Válido" : "❌ No válido"}</p>
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
    <>
      <h1>Ejemplos de useEffect</h1>
      <EfectoAlMontar />               {/* ESCENARIO 1: Ejecutar al montar el componente */}
      <EfectoAlDesmontar />            {/* ESCENARIO 2: Ejecutar al desmontar (limpieza) */}
      <EfectoEstado />                 {/* ESCENARIO 3: Escuchar cambios de estado */}
      <EfectoTeclado />                {/* ESCENARIO 4: Suscripción a eventos */}
      <EfectoFetch />                  {/* ESCENARIO 5: Hacer una petición a una API */}
      <EfectoLocalStorage />           {/* ESCENARIO 6: Guardar texto en localStorage */}
      <EfectoTemporizador />           {/* ESCENARIO 7: Temporizador con `useEffect` */}
      <EfectoValidacionFormulario />   {/* ESCENARIO 8: Validación de formulario en tiempo real */}
    </>
  );
};

export default EjemplosUseEffect;

