import React, { useState } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  useParams,
  useNavigate,
  Navigate,
} from "react-router-dom";

/********************************************
 * ESCENARIO 1: Rutas básicas con <Link> y <Route>
 *******************************************/
// Este primer escenario introduce el uso básico de React Router.
// Se definen dos rutas simples y se navega entre ellas usando <Link>.

const Home = () => <h2>🏠 Inicio</h2>;
const About = () => <h2>ℹ️ Sobre nosotros</h2>;

const BasicRouting = () => (
  <div>
    <h3>1️⃣ Rutas Básicas</h3>
    <nav>
      <Link to="/">Inicio</Link> | <Link to="/about">Sobre nosotros</Link>
    </nav>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
    </Routes>
  </div>
);

/********************************************
 * ESCENARIO 2: Rutas con parámetros dinámicos
 *******************************************/
// Este escenario muestra cómo capturar parámetros de la URL (por ejemplo, el nombre de un usuario).
// Muy útil para perfiles, páginas de detalles, etc.

const UserProfile = () => {
  const { username } = useParams();
  return <h2>👤 Perfil de usuario: {username}</h2>;
};

const DynamicRoute = () => (
  <div>
    <h3>2️⃣ Parámetros Dinámicos</h3>
    <Link to="/user/Juan">Perfil de Juan</Link> | <Link to="/user/Ana">Perfil de Ana</Link>
    <Routes>
      <Route path="/user/:username" element={<UserProfile />} />
    </Routes>
  </div>
);

/********************************************
 * ESCENARIO 3: Redirección automática
 *******************************************/
// Se utiliza el componente <Navigate /> para redirigir automáticamente a otra ruta.
// Ideal tras un formulario o acción finalizada.

const RedirectExample = () => {
  const [redirect, setRedirect] = useState(false);
  return redirect ? (
    <Navigate to="/" />
  ) : (
    <button onClick={() => setRedirect(true)}>Ir al Inicio</button>
  );
};

/********************************************
 * ESCENARIO 4: Navegación programada con useNavigate
 *******************************************/
// En lugar de usar <Link>, este ejemplo navega programáticamente al hacer clic en un botón.
// Muy útil para flujos condicionales o lógicos.

const NavigationExample = () => {
  const navigate = useNavigate();

  return (
    <div>
      <h3>4️⃣ Navegación Programada</h3>
      <button onClick={() => navigate("/")}>Ir al Inicio</button>
    </div>
  );
};

/********************************************
 * ESCENARIO 5: Ruta 404 (página no encontrada)
 *******************************************/
// Este patrón captura cualquier ruta no definida usando el path "*".
// Se utiliza para mostrar un mensaje de error personalizado al usuario.

const NotFound = () => <h2>❌ 404 - Página no encontrada</h2>;

const NotFoundExample = () => (
  <Routes>
    <Route path="*" element={<NotFound />} />
  </Routes>
);

/********************************************
 * ESCENARIO 6: Ruta protegida (requiere autenticación)
 *******************************************/
// Simula una ruta que solo se puede acceder si el usuario está autenticado.
// Si no lo está, redirige a una página de login.

const ProtectedRoute = ({ children }) => {
  const isAuthenticated = false; // Cambiar a true para simular acceso permitido
  return isAuthenticated ? children : <Navigate to="/login" />;
};

const Dashboard = () => <h2>📊 Panel de Control</h2>;

const ProtectedRouteExample = () => (
  <div>
    <h3>6️⃣ Ruta Protegida</h3>
    <Routes>
      <Route
        path="/dashboard"
        element={
          <ProtectedRoute>
            <Dashboard />
          </ProtectedRoute>
        }
      />
      <Route path="/login" element={<h2>🔑 Iniciar Sesión</h2>} />
    </Routes>
    <Link to="/dashboard">Ir al Dashboard</Link>
  </div>
);

/********************************************
 * ESCENARIO 7: Rutas anidadas
 *******************************************/
// Se definen rutas internas dentro de un mismo componente padre.
// Es útil para construir secciones o menús con subsecciones.

const Products = () => (
  <div>
    <h3>7️⃣ Rutas Anidadas</h3>
    <nav>
      <Link to="electronics">Electrónica</Link> | <Link to="clothing">Ropa</Link>
    </nav>
    <Routes>
      <Route path="electronics" element={<h4>🖥️ Sección Electrónica</h4>} />
      <Route path="clothing" element={<h4>👕 Sección Ropa</h4>} />
    </Routes>
  </div>
);

/********************************************
 * ESCENARIO 8: Ruta con búsqueda (query string)
 *******************************************/
// Aunque no es lo más común en React Router, también podemos leer parámetros
// de búsqueda usando el objeto `window.location.search` y `URLSearchParams`.

const SearchPage = () => {
  const searchParams = new URLSearchParams(window.location.search);
  const query = searchParams.get("query") || "Nada";

  return (
    <div>
      <h3>8️⃣ Búsqueda con Query Params</h3>
      <p>🔎 Buscando: {query}</p>
      <button
        onClick={() => {
          window.history.pushState({}, "", "?query=React");
          window.location.reload(); // Para simular el cambio
        }}
      >
        Buscar React
      </button>
    </div>
  );
};

/********************************************
 * ESCENARIO 9: Ruta con animación (simulada)
 *******************************************/
// En este ejemplo se aplica un estilo CSS con transición a un componente.
// Es un punto de partida para integrar librerías de animación como Framer Motion.

const AnimatedRoute = () => {
  return (
    <div style={{ transition: "opacity 0.5s", opacity: 1 }}>
      <h3>9️⃣ Ruta con Animación</h3>
      <p>Este contenido aparece con una animación simulada.</p>
    </div>
  );
};

/********************************************
 * ESCENARIO 10: Uso de layouts con rutas anidadas
 *******************************************/
// Se muestra cómo crear un layout persistente (navegación fija) con rutas hijas dentro.
// Ideal para paneles de usuario o estructuras con sidebar.

const Layout = ({ children }) => (
  <div style={{ border: "2px solid black", padding: "10px" }}>
    <h2>🔟 Layout con Persistencia</h2>
    <nav>
      <Link to="/layout/home">Inicio</Link> | <Link to="/layout/contact">Contacto</Link>
    </nav>
    {children}
  </div>
);

const LayoutExample = () => (
  <Routes>
    <Route
      path="/layout/*"
      element={
        <Layout>
          <Routes>
            <Route path="home" element={<h3>🏠 Página de Inicio</h3>} />
            <Route path="contact" element={<h3>📞 Contacto</h3>} />
          </Routes>
        </Layout>
      }
    />
  </Routes>
);

/********************************************
 * COMPONENTE PRINCIPAL: Muestra todos los escenarios
 *******************************************/
// Este componente agrupa todos los ejemplos y los muestra en orden.
// El profesor puede navegar por cada uno de los escenarios en clase.

const EjemplosRouter = () => (
  <Router>
    <div className="p-6 space-y-6">
      <h1 className="text-2xl font-bold">Ejemplos de React Router</h1>

      <BasicRouting />             {/* ESCENARIO 1 */}
      <DynamicRoute />             {/* ESCENARIO 2 */}
      <RedirectExample />          {/* ESCENARIO 3 */}
      <NavigationExample />        {/* ESCENARIO 4 */}
      <NotFoundExample />          {/* ESCENARIO 5 */}
      <ProtectedRouteExample />    {/* ESCENARIO 6 */}
      <Products />                 {/* ESCENARIO 7 */}
      <SearchPage />               {/* ESCENARIO 8 */}
      <AnimatedRoute />            {/* ESCENARIO 9 */}
      <LayoutExample />            {/* ESCENARIO 10 */}
    </div>
  </Router>
);

export default EjemplosRouter;
