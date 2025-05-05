import { useState, useEffect } from "react";
import { axiosAPI, Utilidades } from "@dit/spad-rdit_library";

/********************************************
 * ESCENARIO 1: Ejecutar al montar y desmontar el componente
 *******************************************/

const EfectoAlMontarYDesmontar = () => {
  useEffect(() => {
    console.log("El componente se ha montado.");
    return () => console.log("El componente se ha desmontado.");
  }, []);

  return <p>Efecto ejecutado al montar y desmontar.</p>;
};

/********************************************
 * Ejecutar en cada renderizado (SIN dependencias)
 *******************************************/

/********************************************
 * ESCENARIO 2: Escuchar cambios de estado específicos
 *******************************************/

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
 * ESCENARIO 3: Escuchar cambios de estado específicos. con Storage
 *******************************************/

const EfectoEstadoConStorage = () => {
  const [contador, setContador] = useState<number>(() => {
    const valorGuardado = localStorage.getItem("micontador");
    return parseInt(valorGuardado || "0");
  });

  useEffect(() => {
    console.log("El contador cambió:", contador);
    document.title = `Clicks: ${contador}`;
    localStorage.setItem("micontador", contador.toString());
  }, [contador]);

  return (
    <div>
      <p>Contador: {contador}</p>
      <button onClick={() => setContador(contador + 1)}>Incrementar</button>
    </div>
  );
};


/********************************************
 * ESCENARIO 4: Suscripción a eventos del navegador
 *******************************************/

const EfectoTeclado = () => {
  useEffect(() => {
    const handleKeyDown = (evento: KeyboardEvent) => {
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

export interface RespuestaJSON {
  status: string;
  mensaje: string;
  respuesta: Respuesta;
}

export interface Respuesta {
  personas: Persona[];
}

export interface Persona {
  nombre: string;
  edad: number;
  email: string;
  lenguajes: string[];
}

const EfectoAxios = () => {
  const [datos, setDatos] = useState<RespuestaJSON | null>(null);

  const urlInicial = Utilidades.getUrl("/wlpl/SPAD-RDIT/EjemploRESTService");
  const realizarPeticionGET = async () => {
    try {
      const params = { parametro: "valor" };
      const data = await axiosAPI.get<RespuestaJSON>(urlInicial, params)
      setDatos(data);
    } catch (err) {
      console.log(err)
      setDatos(null);
    }
  };

  useEffect(() => { realizarPeticionGET() }, []);

  return (
    <>
      {datos ? <pre>{JSON.stringify(datos, null, 2)}</pre> : "Cargando..."}
      {JSON.stringify(datos?.respuesta.personas, null, 2)}
      {JSON.stringify(datos?.respuesta.personas[0], null, 2)}
      {datos?.respuesta.personas[0].nombre}
      <hr />
      {datos?.respuesta.personas.map((persona) => (persona.nombre) + " - ")}
      <hr />
      {datos?.respuesta.personas.map((persona) => (`${persona.nombre} - `))}
      <hr />
      <ul>
        {datos?.respuesta.personas.map((persona) => (
          <li key={persona.nombre}>{persona.nombre}</li>
        ))}
      </ul>
    </>
  );
};

/********************************************
 * ESCENARIO 6: Guardar texto en localStorage
 *******************************************/

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
 * ESCENARIO 7: Temporizador con useEffect
 *******************************************/

const EfectoTemporizador = () => {
  const [tiempo, setTiempo] = useState(0);

  useEffect(() => {
    const intervalo = setInterval(() => {
      setTiempo((tiempoAnterior) => tiempoAnterior + 1);
      console.log("Calculando...");
    }, 1000);

    return () => clearInterval(intervalo);
  }, []);

  return <p>Tiempo transcurrido: {tiempo} segundos</p>;
};

/********************************************
 * COMPONENTE PRINCIPAL: Muestra todos los escenarios
 *******************************************/

const EjemplosUseEffect = () => {
  return (
    <>
      <h1>Ejemplos de useEffect</h1>

      <EfectoAlMontarYDesmontar /> {/* ESCENARIO 1 */}
      <EfectoEstado />             {/* ESCENARIO 2 */}
      <EfectoEstadoConStorage />   {/* ESCENARIO 3 */}
      <EfectoTeclado />            {/* ESCENARIO 4 */}
      <EfectoAxios />              {/* ESCENARIO 5 */}
      <EfectoLocalStorage />       {/* ESCENARIO 6 */}
      <EfectoTemporizador />       {/* ESCENARIO 7 */}
    </>
  );
};

export default EjemplosUseEffect;