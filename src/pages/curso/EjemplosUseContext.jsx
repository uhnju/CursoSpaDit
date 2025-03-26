import React, { createContext, useContext, useState } from "react";

/********************************************
 * ESCENARIO 1: Tema global (Modo Oscuro)
 *******************************************/
// Este contexto gestiona el modo claro/oscuro de toda la aplicación.
// Permite que cualquier componente acceda al tema actual y lo cambie.

const ContextoTema = createContext();
const ContextoTemaProvider = ({ children }) => {
  const [tema, setTema] = useState("claro");
  return (
    <ContextoTema.Provider value={{
      tema,
      alternarTema: () => setTema(tema === "claro" ? "oscuro" : "claro"),
    }}>
      {children}
    </ContextoTema.Provider>
  );
};

const ComponenteTema = () => {
  const { tema, alternarTema } = useContext(ContextoTema);
  return (
    <div style={{
      background: tema === "claro" ? "#fff" : "#333",
      color: tema === "claro" ? "#000" : "#fff",
      padding: 20
    }}>
      <p>Modo: {tema}</p>
      <button onClick={alternarTema}>Cambiar Tema</button>
    </div>
  );
};

/********************************************
 * ESCENARIO 2: Idioma global (i18n)
 *******************************************/
// Se gestiona el idioma de la app globalmente, útil para traducciones.

const ContextoIdioma = createContext();
const ContextoIdiomaProvider = ({ children }) => {
  const [idioma, setIdioma] = useState("es");
  return (
    <ContextoIdioma.Provider value={{ idioma, setIdioma }}>
      {children}
    </ContextoIdioma.Provider>
  );
};

const ComponenteIdioma = () => {
  const { idioma, setIdioma } = useContext(ContextoIdioma);
  return (
    <div>
      <p>Idioma: {idioma === "es" ? "Español" : "Inglés"}</p>
      <button onClick={() => setIdioma(idioma === "es" ? "en" : "es")}>Cambiar Idioma</button>
    </div>
  );
};

/********************************************
 * ESCENARIO 3: Usuario autenticado
 *******************************************/
// Simula un sistema de login sencillo compartido por toda la app.

const ContextoAutenticacion = createContext();
const ContextoAutenticacionProvider = ({ children }) => {
  const [usuario, setUsuario] = useState(null);
  return (
    <ContextoAutenticacion.Provider value={{
      usuario,
      iniciarSesion: () => setUsuario("Juan"),
      cerrarSesion: () => setUsuario(null),
    }}>
      {children}
    </ContextoAutenticacion.Provider>
  );
};

const ComponenteAutenticacion = () => {
  const { usuario, iniciarSesion, cerrarSesion } = useContext(ContextoAutenticacion);
  return (
    <div>
      <p>{usuario ? `Bienvenido, ${usuario}` : "No has iniciado sesión"}</p>
      <button onClick={usuario ? cerrarSesion : iniciarSesion}>
        {usuario ? "Cerrar sesión" : "Iniciar sesión"}
      </button>
    </div>
  );
};

/********************************************
 * ESCENARIO 4: Carrito de compras
 *******************************************/
// Este contexto almacena los productos del carrito.

const ContextoCarrito = createContext();
const ContextoCarritoProvider = ({ children }) => {
  const [carrito, setCarrito] = useState([]);
  return (
    <ContextoCarrito.Provider value={{
      carrito,
      añadirAlCarrito: (producto) => setCarrito([...carrito, producto]),
    }}>
      {children}
    </ContextoCarrito.Provider>
  );
};

const ComponenteCarrito = () => {
  const { carrito, añadirAlCarrito } = useContext(ContextoCarrito);
  return (
    <div>
      <button onClick={() => añadirAlCarrito("Producto 1")}>Añadir al carrito</button>
      <p>Carrito: {carrito.join(", ") || "Vacío"}</p>
    </div>
  );
};

/********************************************
 * ESCENARIO 5: Contador global
 *******************************************/
// Permite incrementar un contador desde cualquier parte de la app.

const ContextoContador = createContext();
const ContextoContadorProvider = ({ children }) => {
  const [contador, setContador] = useState(0);
  return (
    <ContextoContador.Provider value={{
      contador,
      incrementar: () => setContador(contador + 1),
    }}>
      {children}
    </ContextoContador.Provider>
  );
};

const ComponenteContador = () => {
  const { contador, incrementar } = useContext(ContextoContador);
  return (
    <div>
      <p>Contador: {contador}</p>
      <button onClick={incrementar}>Incrementar</button>
    </div>
  );
};

/********************************************
 * ESCENARIO 6: Notificaciones globales
 *******************************************/
// Permite mostrar mensajes a lo largo de toda la app desde cualquier componente.

const ContextoNotificaciones = createContext();
const ContextoNotificacionesProvider = ({ children }) => {
  const [mensaje, setMensaje] = useState("");
  return (
    <ContextoNotificaciones.Provider value={{
      mensaje,
      notificar: (texto) => setMensaje(texto),
    }}>
      {children}
    </ContextoNotificaciones.Provider>
  );
};

const ComponenteNotificaciones = () => {
  const { mensaje, notificar } = useContext(ContextoNotificaciones);
  return (
    <div>
      <button onClick={() => notificar("¡Nueva notificación!")}>Enviar notificación</button>
      {mensaje && <p>Notificación: {mensaje}</p>}
    </div>
  );
};

/********************************************
 * ESCENARIO 7: Vista lista/cuadrícula
 *******************************************/
// Alterna entre diferentes formas de mostrar los datos (modo lista o cuadrícula).

const ContextoVista = createContext();
const ContextoVistaProvider = ({ children }) => {
  const [vista, setVista] = useState("lista");
  return (
    <ContextoVista.Provider value={{
      vista,
      alternarVista: () => setVista(vista === "lista" ? "cuadricula" : "lista"),
    }}>
      {children}
    </ContextoVista.Provider>
  );
};

const ComponenteVista = () => {
  const { vista, alternarVista } = useContext(ContextoVista);
  return (
    <div>
      <p>Vista actual: {vista === "lista" ? "Lista" : "Cuadrícula"}</p>
      <button onClick={alternarVista}>Cambiar vista</button>
    </div>
  );
};

/********************************************
 * ESCENARIO 8: Preferencias de usuario
 *******************************************/
// Guarda las preferencias del usuario, en este caso el tamaño de fuente.

const ContextoPreferencias = createContext();
const ContextoPreferenciasProvider = ({ children }) => {
  const [tamañoFuente, setTamañoFuente] = useState(16);
  return (
    <ContextoPreferencias.Provider value={{
      tamañoFuente,
      aumentarFuente: () => setTamañoFuente(tamañoFuente + 2),
    }}>
      {children}
    </ContextoPreferencias.Provider>
  );
};

const ComponentePreferencias = () => {
  const { tamañoFuente, aumentarFuente } = useContext(ContextoPreferencias);
  return (
    <div>
      <p style={{ fontSize: tamañoFuente }}>Texto con tamaño dinámico</p>
      <button onClick={aumentarFuente}>Aumentar tamaño</button>
    </div>
  );
};

/********************************************
 * ESCENARIO 9: Historial de navegación (breadcrumb)
 *******************************************/
// Simula el historial de navegación del usuario para mostrar rutas.

const ContextoHistorial = createContext();
const ContextoHistorialProvider = ({ children }) => {
  const [historial, setHistorial] = useState(["Inicio"]);
  return (
    <ContextoHistorial.Provider value={{
      historial,
      navegar: (pagina) => setHistorial([...historial, pagina]),
    }}>
      {children}
    </ContextoHistorial.Provider>
  );
};

const ComponenteHistorial = () => {
  const { historial, navegar } = useContext(ContextoHistorial);
  return (
    <div>
      <p>Ruta: {historial.join(" > ")}</p>
      <button onClick={() => navegar("Nueva página")}>Ir a nueva página</button>
    </div>
  );
};

/********************************************
 * ESCENARIO 10: Modo accesibilidad (alto contraste)
 *******************************************/
// Permite alternar entre un modo de visualización estándar y uno accesible con alto contraste.

const ContextoAccesibilidad = createContext();
const ContextoAccesibilidadProvider = ({ children }) => {
  const [contraste, setContraste] = useState(false);
  return (
    <ContextoAccesibilidad.Provider value={{
      contraste,
      alternarContraste: () => setContraste(!contraste),
    }}>
      {children}
    </ContextoAccesibilidad.Provider>
  );
};

const ComponenteAccesibilidad = () => {
  const { contraste, alternarContraste } = useContext(ContextoAccesibilidad);
  return (
    <div style={{
      background: contraste ? "black" : "white",
      color: contraste ? "yellow" : "black",
      padding: 20
    }}>
      <p>Modo alto contraste: {contraste ? "Activado" : "Desactivado"}</p>
      <button onClick={alternarContraste}>Alternar contraste</button>
    </div>
  );
};

/********************************************
 * COMPONENTE PRINCIPAL: Agrupa todos los contextos y componentes
 *******************************************/
// Este componente contiene la jerarquía completa de Providers necesarios
// para que cada componente pueda acceder a su contexto correspondiente.

const EjemplosUseContext = () => (
  <>
    <h1>Ejemplos de UseContext</h1>
    <ContextoTemaProvider>
      <ContextoIdiomaProvider>
        <ContextoAutenticacionProvider>
          <ContextoCarritoProvider>
            <ContextoContadorProvider>
              <ContextoNotificacionesProvider>
                <ContextoVistaProvider>
                  <ContextoPreferenciasProvider>
                    <ContextoHistorialProvider>
                      <ContextoAccesibilidadProvider>
                        <ComponenteTema />
                        <ComponenteIdioma />
                        <ComponenteAutenticacion />
                        <ComponenteCarrito />
                        <ComponenteContador />
                        <ComponenteNotificaciones />
                        <ComponenteVista />
                        <ComponentePreferencias />
                        <ComponenteHistorial />
                        <ComponenteAccesibilidad />
                      </ContextoAccesibilidadProvider>
                    </ContextoHistorialProvider>
                  </ContextoPreferenciasProvider>
                </ContextoVistaProvider>
              </ContextoNotificacionesProvider>
            </ContextoContadorProvider>
          </ContextoCarritoProvider>
        </ContextoAutenticacionProvider>
      </ContextoIdiomaProvider>
    </ContextoTemaProvider>
  </>
);

export default EjemplosUseContext;
