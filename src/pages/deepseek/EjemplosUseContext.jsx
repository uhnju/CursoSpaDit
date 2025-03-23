import React, { createContext, useContext, useState } from "react";

/********************************************
 * ESCENARIO 1: Tema claro/oscuro
 *******************************************/
// Este ejemplo muestra cómo usar `useContext` para manejar un tema global (light/dark).
// `useContext` es útil para compartir estados entre componentes sin necesidad de pasar props manualmente.

const ThemeContext = createContext();

const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState("light");

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

const ThemeComponent = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <div style={{ background: theme === "light" ? "#fff" : "#333", color: theme === "light" ? "#000" : "#fff", padding: "20px" }}>
      <p>El tema actual es: {theme}</p>
      <button onClick={toggleTheme}>Cambiar tema</button>
    </div>
  );
};

/********************************************
 * ESCENARIO 2: Autenticación simulada
 *******************************************/
// Este ejemplo muestra cómo usar `useContext` para manejar el estado de autenticación.
// `useContext` es ideal para compartir el estado de autenticación en toda la aplicación.

const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [user, setUser] = useState(null);

  const login = (username) => {
    setIsAuthenticated(true);
    setUser(username);
  };

  const logout = () => {
    setIsAuthenticated(false);
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ isAuthenticated, user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

const AuthComponent = () => {
  const { isAuthenticated, user, login, logout } = useContext(AuthContext);
  const [username, setUsername] = useState("");

  const handleLogin = () => {
    if (username.trim()) {
      login(username);
    }
  };

  return (
    <div>
      {isAuthenticated ? (
        <div>
          <p>Bienvenido, {user}!</p>
          <button onClick={logout}>Cerrar sesión</button>
        </div>
      ) : (
        <div>
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            placeholder="Nombre de usuario"
          />
          <button onClick={handleLogin}>Iniciar sesión</button>
        </div>
      )}
    </div>
  );
};

/********************************************
 * ESCENARIO 3: Configuración de idioma
 *******************************************/
// Este ejemplo muestra cómo usar `useContext` para manejar la configuración de idioma.
// `useContext` es útil para compartir el idioma seleccionado en toda la aplicación.

const LanguageContext = createContext();

const LanguageProvider = ({ children }) => {
  const [language, setLanguage] = useState("es");

  const toggleLanguage = () => {
    setLanguage((prevLanguage) => (prevLanguage === "es" ? "en" : "es"));
  };

  return (
    <LanguageContext.Provider value={{ language, toggleLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
};

const LanguageComponent = () => {
  const { language, toggleLanguage } = useContext(LanguageContext);

  return (
    <div>
      <p>Idioma actual: {language === "es" ? "Español" : "Inglés"}</p>
      <button onClick={toggleLanguage}>Cambiar idioma</button>
    </div>
  );
};

/********************************************
 * ESCENARIO 4: Notificaciones globales
 *******************************************/
// Este ejemplo muestra cómo usar `useContext` para manejar notificaciones globales.
// `useContext` es útil para mostrar mensajes de notificación en toda la aplicación.

const NotificationContext = createContext();

const NotificationProvider = ({ children }) => {
  const [notification, setNotification] = useState(null);

  const showNotification = (message) => {
    setNotification(message);
    setTimeout(() => setNotification(null), 3000);
  };

  return (
    <NotificationContext.Provider value={{ notification, showNotification }}>
      {children}
    </NotificationContext.Provider>
  );
};

const NotificationComponent = () => {
  const { notification, showNotification } = useContext(NotificationContext);

  return (
    <div>
      {notification && <p style={{ color: "green" }}>{notification}</p>}
      <button onClick={() => showNotification("¡Notificación mostrada!")}>
        Mostrar notificación
      </button>
    </div>
  );
};

/********************************************
 * ESCENARIO 5: Carrito de compras global
 *******************************************/
// Este ejemplo muestra cómo usar `useContext` para manejar un carrito de compras global.
// `useContext` es ideal para compartir el estado del carrito en toda la aplicación.

const CartContext = createContext();

const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  const addToCart = (item) => {
    setCart([...cart, item]);
  };

  const removeFromCart = (itemId) => {
    setCart(cart.filter((item) => item.id !== itemId));
  };

  return (
    <CartContext.Provider value={{ cart, addToCart, removeFromCart }}>
      {children}
    </CartContext.Provider>
  );
};

const CartComponent = () => {
  const { cart, addToCart, removeFromCart } = useContext(CartContext);

  return (
    <div>
      <button onClick={() => addToCart({ id: Date.now(), name: "Producto" })}>
        Añadir al carrito
      </button>
      <ul>
        {cart.map((item) => (
          <li key={item.id}>
            {item.name} <button onClick={() => removeFromCart(item.id)}>Eliminar</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

/********************************************
 * ESCENARIO 6: Configuración de usuario
 *******************************************/
// Este ejemplo muestra cómo usar `useContext` para manejar la configuración de usuario.
// `useContext` es útil para compartir la configuración del usuario en toda la aplicación.

const UserSettingsContext = createContext();

const UserSettingsProvider = ({ children }) => {
  const [settings, setSettings] = useState({ theme: "light", notifications: true });

  const toggleNotifications = () => {
    setSettings((prevSettings) => ({
      ...prevSettings,
      notifications: !prevSettings.notifications,
    }));
  };

  return (
    <UserSettingsContext.Provider value={{ settings, toggleNotifications }}>
      {children}
    </UserSettingsContext.Provider>
  );
};

const UserSettingsComponent = () => {
  const { settings, toggleNotifications } = useContext(UserSettingsContext);

  return (
    <div>
      <p>Notificaciones: {settings.notifications ? "Activadas" : "Desactivadas"}</p>
      <button onClick={toggleNotifications}>
        {settings.notifications ? "Desactivar" : "Activar"} notificaciones
      </button>
    </div>
  );
};

/********************************************
 * ESCENARIO 7: Filtros de búsqueda
 *******************************************/
// Este ejemplo muestra cómo usar `useContext` para manejar filtros de búsqueda globales.
// `useContext` es útil para compartir los filtros seleccionados en toda la aplicación.

const FilterContext = createContext();

const FilterProvider = ({ children }) => {
  const [filters, setFilters] = useState({ category: "all", price: "any" });

  const updateFilters = (newFilters) => {
    setFilters({ ...filters, ...newFilters });
  };

  return (
    <FilterContext.Provider value={{ filters, updateFilters }}>
      {children}
    </FilterContext.Provider>
  );
};

const FilterComponent = () => {
  const { filters, updateFilters } = useContext(FilterContext);

  return (
    <div>
      <p>Categoría: {filters.category}</p>
      <p>Precio: {filters.price}</p>
      <button onClick={() => updateFilters({ category: "electronics" })}>
        Filtrar por electrónica
      </button>
      <button onClick={() => updateFilters({ price: "low" })}>
        Filtrar por precio bajo
      </button>
    </div>
  );
};

/********************************************
 * ESCENARIO 8: Estado de carga global
 *******************************************/
// Este ejemplo muestra cómo usar `useContext` para manejar un estado de carga global.
// `useContext` es útil para mostrar un spinner de carga en toda la aplicación.

const LoadingContext = createContext();

const LoadingProvider = ({ children }) => {
  const [isLoading, setIsLoading] = useState(false);

  const startLoading = () => {
    setIsLoading(true);
    setTimeout(() => setIsLoading(false), 2000);
  };

  return (
    <LoadingContext.Provider value={{ isLoading, startLoading }}>
      {children}
    </LoadingContext.Provider>
  );
};

const LoadingComponent = () => {
  const { isLoading, startLoading } = useContext(LoadingContext);

  return (
    <div>
      {isLoading && <p>Cargando...</p>}
      <button onClick={startLoading}>Iniciar carga</button>
    </div>
  );
};

/********************************************
 * ESCENARIO 9: Estado de error global
 *******************************************/
// Este ejemplo muestra cómo usar `useContext` para manejar un estado de error global.
// `useContext` es útil para mostrar mensajes de error en toda la aplicación.

const ErrorContext = createContext();

const ErrorProvider = ({ children }) => {
  const [error, setError] = useState(null);

  const showError = (message) => {
    setError(message);
    setTimeout(() => setError(null), 3000);
  };

  return (
    <ErrorContext.Provider value={{ error, showError }}>
      {children}
    </ErrorContext.Provider>
  );
};

const ErrorComponent = () => {
  const { error, showError } = useContext(ErrorContext);

  return (
    <div>
      {error && <p style={{ color: "red" }}>{error}</p>}
      <button onClick={() => showError("¡Algo salió mal!")}>Mostrar error</button>
    </div>
  );
};

/********************************************
 * ESCENARIO 10: Estado de sesión global
 *******************************************/
// Este ejemplo muestra cómo usar `useContext` para manejar el estado de sesión global.
// `useContext` es útil para compartir el estado de sesión en toda la aplicación.

const SessionContext = createContext();

const SessionProvider = ({ children }) => {
  const [session, setSession] = useState(null);

  const startSession = (username) => {
    setSession({ username });
  };

  const endSession = () => {
    setSession(null);
  };

  return (
    <SessionContext.Provider value={{ session, startSession, endSession }}>
      {children}
    </SessionContext.Provider>
  );
};

const SessionComponent = () => {
  const { session, startSession, endSession } = useContext(SessionContext);
  const [username, setUsername] = useState("");

  const handleLogin = () => {
    if (username.trim()) {
      startSession(username);
    }
  };

  return (
    <div>
      {session ? (
        <div>
          <p>Bienvenido, {session.username}!</p>
          <button onClick={endSession}>Cerrar sesión</button>
        </div>
      ) : (
        <div>
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            placeholder="Nombre de usuario"
          />
          <button onClick={handleLogin}>Iniciar sesión</button>
        </div>
      )}
    </div>
  );
};

/********************************************
 * COMPONENTE PRINCIPAL: Muestra todos los escenarios
 *******************************************/
// Este componente centraliza todos los ejemplos para que el profesor pueda
// mostrarlos uno por uno en una única vista. Cada uno está comentado con su número y título.

const EjemplosUseContext = () => {
  return (
    <div className="p-6 space-y-6">
      <h1 className="text-2xl font-bold">Ejemplos de useContext en React</h1>

      <ThemeProvider>
        <ThemeComponent />      {/* ESCENARIO 1: Tema claro/oscuro */}
      </ThemeProvider>

      <AuthProvider>
        <AuthComponent />       {/* ESCENARIO 2: Autenticación simulada */}
      </AuthProvider>

      <LanguageProvider>
        <LanguageComponent />  {/* ESCENARIO 3: Configuración de idioma */}
      </LanguageProvider>

      <NotificationProvider>
        <NotificationComponent /> {/* ESCENARIO 4: Notificaciones globales */}
      </NotificationProvider>

      <CartProvider>
        <CartComponent />       {/* ESCENARIO 5: Carrito de compras global */}
      </CartProvider>

      <UserSettingsProvider>
        <UserSettingsComponent /> {/* ESCENARIO 6: Configuración de usuario */}
      </UserSettingsProvider>

      <FilterProvider>
        <FilterComponent />      {/* ESCENARIO 7: Filtros de búsqueda */}
      </FilterProvider>

      <LoadingProvider>
        <LoadingComponent />     {/* ESCENARIO 8: Estado de carga global */}
      </LoadingProvider>

      <ErrorProvider>
        <ErrorComponent />       {/* ESCENARIO 9: Estado de error global */}
      </ErrorProvider>

      <SessionProvider>
        <SessionComponent />     {/* ESCENARIO 10: Estado de sesión global */}
      </SessionProvider>
    </div>
  );
};

export default EjemplosUseContext;