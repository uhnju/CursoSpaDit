import React, { createContext, useContext, useState } from "react";

/********************************************
 * ESCENARIO 1: Tema global (Dark Mode)
 *******************************************/
// Este contexto gestiona el modo claro/oscuro de toda la aplicación.
// Permite que cualquier componente acceda al tema actual y lo cambie.

const ThemeContext = createContext();
const ThemeProvider = ({ children }) => {
 const [theme, setTheme] = useState("light");
 return (
  <ThemeContext.Provider value={{
   theme,
   toggleTheme: () => setTheme(theme === "light" ? "dark" : "light"),
  }}>
   {children}
  </ThemeContext.Provider>
 );
};

const ThemeComponent = () => {
 const { theme, toggleTheme } = useContext(ThemeContext);
 return (
  <div style={{
   background: theme === "light" ? "#fff" : "#333",
   color: theme === "light" ? "#000" : "#fff",
   padding: 20
  }}>
   <p>Modo: {theme}</p>
   <button onClick={toggleTheme}>Cambiar Tema</button>
  </div>
 );
};

/********************************************
 * ESCENARIO 2: Idioma global (i18n)
 *******************************************/
// Se gestiona el idioma de la app globalmente, útil para traducciones.

const LanguageContext = createContext();
const LanguageProvider = ({ children }) => {
 const [language, setLanguage] = useState("es");
 return (
  <LanguageContext.Provider value={{ language, setLanguage }}>
   {children}
  </LanguageContext.Provider>
 );
};

const LanguageComponent = () => {
 const { language, setLanguage } = useContext(LanguageContext);
 return (
  <div>
   <p>Idioma: {language === "es" ? "Español" : "English"}</p>
   <button onClick={() => setLanguage(language === "es" ? "en" : "es")}>Cambiar Idioma</button>
  </div>
 );
};

/********************************************
 * ESCENARIO 3: Usuario autenticado
 *******************************************/
// Simula un sistema de login sencillo compartido por toda la app.

const AuthContext = createContext();
const AuthProvider = ({ children }) => {
 const [user, setUser] = useState(null);
 return (
  <AuthContext.Provider value={{
   user,
   login: () => setUser("Juan"),
   logout: () => setUser(null),
  }}>
   {children}
  </AuthContext.Provider>
 );
};

const AuthComponent = () => {
 const { user, login, logout } = useContext(AuthContext);
 return (
  <div>
   <p>{user ? `Bienvenido, ${user}` : "No has iniciado sesión"}</p>
   <button onClick={user ? logout : login}>
    {user ? "Cerrar sesión" : "Iniciar sesión"}
   </button>
  </div>
 );
};

/********************************************
 * ESCENARIO 4: Carrito de compras
 *******************************************/
// Este contexto almacena los productos del carrito.

const CartContext = createContext();
const CartProvider = ({ children }) => {
 const [cart, setCart] = useState([]);
 return (
  <CartContext.Provider value={{
   cart,
   addToCart: (item) => setCart([...cart, item]),
  }}>
   {children}
  </CartContext.Provider>
 );
};

const CartComponent = () => {
 const { cart, addToCart } = useContext(CartContext);
 return (
  <div>
   <button onClick={() => addToCart("Producto 1")}>Agregar al carrito</button>
   <p>Carrito: {cart.join(", ") || "Vacío"}</p>
  </div>
 );
};

/********************************************
 * ESCENARIO 5: Contador global
 *******************************************/
// Permite incrementar un contador desde cualquier parte de la app.

const CounterContext = createContext();
const CounterProvider = ({ children }) => {
 const [count, setCount] = useState(0);
 return (
  <CounterContext.Provider value={{
   count,
   increment: () => setCount(count + 1),
  }}>
   {children}
  </CounterContext.Provider>
 );
};

const CounterComponent = () => {
 const { count, increment } = useContext(CounterContext);
 return (
  <div>
   <p>Contador: {count}</p>
   <button onClick={increment}>Incrementar</button>
  </div>
 );
};

/********************************************
 * ESCENARIO 6: Notificaciones globales
 *******************************************/
// Permite mostrar mensajes a lo largo de toda la app desde cualquier componente.

const NotificationContext = createContext();
const NotificationProvider = ({ children }) => {
 const [message, setMessage] = useState("");
 return (
  <NotificationContext.Provider value={{
   message,
   notify: (msg) => setMessage(msg),
  }}>
   {children}
  </NotificationContext.Provider>
 );
};

const NotificationComponent = () => {
 const { message, notify } = useContext(NotificationContext);
 return (
  <div>
   <button onClick={() => notify("Nueva Notificación")}>Enviar Notificación</button>
   {message && <p>Notificación: {message}</p>}
  </div>
 );
};

/********************************************
 * ESCENARIO 7: Vista lista/cuadrícula
 *******************************************/
// Alterna entre diferentes formas de mostrar los datos (modo lista o cuadrícula).

const ViewContext = createContext();
const ViewProvider = ({ children }) => {
 const [view, setView] = useState("list");
 return (
  <ViewContext.Provider value={{
   view,
   toggleView: () => setView(view === "list" ? "grid" : "list"),
  }}>
   {children}
  </ViewContext.Provider>
 );
};

const ViewComponent = () => {
 const { view, toggleView } = useContext(ViewContext);
 return (
  <div>
   <p>Vista actual: {view === "list" ? "Lista" : "Cuadrícula"}</p>
   <button onClick={toggleView}>Cambiar Vista</button>
  </div>
 );
};

/********************************************
 * ESCENARIO 8: Preferencias de usuario
 *******************************************/
// Guarda las preferencias del usuario, en este caso el tamaño de fuente.

const PreferencesContext = createContext();
const PreferencesProvider = ({ children }) => {
 const [fontSize, setFontSize] = useState(16);
 return (
  <PreferencesContext.Provider value={{
   fontSize,
   increaseFont: () => setFontSize(fontSize + 2),
  }}>
   {children}
  </PreferencesContext.Provider>
 );
};

const PreferencesComponent = () => {
 const { fontSize, increaseFont } = useContext(PreferencesContext);
 return (
  <div>
   <p style={{ fontSize }}>Texto con tamaño dinámico</p>
   <button onClick={increaseFont}>Aumentar Tamaño</button>
  </div>
 );
};

/********************************************
 * ESCENARIO 9: Historial de navegación (breadcrumb)
 *******************************************/
// Simula el historial de navegación del usuario para mostrar rutas.

const HistoryContext = createContext();
const HistoryProvider = ({ children }) => {
 const [history, setHistory] = useState(["Inicio"]);
 return (
  <HistoryContext.Provider value={{
   history,
   navigate: (page) => setHistory([...history, page]),
  }}>
   {children}
  </HistoryContext.Provider>
 );
};

const HistoryComponent = () => {
 const { history, navigate } = useContext(HistoryContext);
 return (
  <div>
   <p>Ruta: {history.join(" > ")}</p>
   <button onClick={() => navigate("Página Nueva")}>Ir a nueva página</button>
  </div>
 );
};

/********************************************
 * ESCENARIO 10: Modo accesibilidad (alto contraste)
 *******************************************/
// Permite alternar entre un modo de visualización estándar y uno accesible con alto contraste.

const AccessibilityContext = createContext();
const AccessibilityProvider = ({ children }) => {
 const [highContrast, setHighContrast] = useState(false);
 return (
  <AccessibilityContext.Provider value={{
   highContrast,
   toggleContrast: () => setHighContrast(!highContrast),
  }}>
   {children}
  </AccessibilityContext.Provider>
 );
};

const AccessibilityComponent = () => {
 const { highContrast, toggleContrast } = useContext(AccessibilityContext);
 return (
  <div style={{
   background: highContrast ? "black" : "white",
   color: highContrast ? "yellow" : "black",
   padding: 20
  }}>
   <p>Modo Alto Contraste: {highContrast ? "Activado" : "Desactivado"}</p>
   <button onClick={toggleContrast}>Alternar Contraste</button>
  </div>
 );
};

/********************************************
 * COMPONENTE PRINCIPAL: Agrupa todos los contextos y componentes
 *******************************************/
// Este componente contiene la jerarquía completa de Providers necesarios
// para que cada componente pueda acceder a su contexto correspondiente.

const EjemplosUseContext = () => (
 <ThemeProvider>
  <LanguageProvider>
   <AuthProvider>
    <CartProvider>
     <CounterProvider>
      <NotificationProvider>
       <ViewProvider>
        <PreferencesProvider>
         <HistoryProvider>
          <AccessibilityProvider>
           <ThemeComponent />
           <LanguageComponent />
           <AuthComponent />
           <CartComponent />
           <CounterComponent />
           <NotificationComponent />
           <ViewComponent />
           <PreferencesComponent />
           <HistoryComponent />
           <AccessibilityComponent />
          </AccessibilityProvider>
         </HistoryProvider>
        </PreferencesProvider>
       </ViewProvider>
      </NotificationProvider>
     </CounterProvider>
    </CartProvider>
   </AuthProvider>
  </LanguageProvider>
 </ThemeProvider>
);

export default EjemplosUseContext;

