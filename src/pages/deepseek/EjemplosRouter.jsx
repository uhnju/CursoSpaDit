import React from "react";
import { BrowserRouter as Router, Route, Routes, Link, useParams, useNavigate, Outlet } from "react-router-dom";

/********************************************
 * ESCENARIO 1: Navegación básica
 *******************************************/
// Este ejemplo muestra cómo configurar rutas básicas en una aplicación React.
// Es útil para entender cómo funciona el enrutamiento en React Router.

const Home = () => <p>Bienvenido a la página de inicio.</p>;
const About = () => <p>Esta es la página "Acerca de".</p>;

const BasicRoutingExample = () => {
  return (
    <Router>
      <nav>
        <Link to="/">Inicio</Link> | <Link to="/about">Acerca de</Link>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </Router>
  );
};

/********************************************
 * ESCENARIO 2: Rutas dinámicas
 *******************************************/
// Este ejemplo muestra cómo usar parámetros dinámicos en las rutas.
// Es útil cuando necesitas mostrar contenido basado en un ID o slug.

const UserProfile = () => {
  const { userId } = useParams();
  return <p>Perfil del usuario: {userId}</p>;
};

const DynamicRoutingExample = () => {
  return (
    <Router>
      <nav>
        <Link to="/user/1">Usuario 1</Link> | <Link to="/user/2">Usuario 2</Link>
      </nav>
      <Routes>
        <Route path="/user/:userId" element={<UserProfile />} />
      </Routes>
    </Router>
  );
};

/********************************************
 * ESCENARIO 3: Rutas anidadas
 *******************************************/
// Este ejemplo muestra cómo crear rutas anidadas.
// Es útil cuando tienes una jerarquía de componentes que dependen de una ruta principal.

const Dashboard = () => (
  <div>
    <p>Dashboard</p>
    <Outlet />
  </div>
);

const DashboardHome = () => <p>Bienvenido al Dashboard.</p>;
const DashboardSettings = () => <p>Configuración del Dashboard.</p>;

const NestedRoutingExample = () => {
  return (
    <Router>
      <nav>
        <Link to="/dashboard">Dashboard</Link> |{" "}
        <Link to="/dashboard/settings">Configuración</Link>
      </nav>
      <Routes>
        <Route path="/dashboard" element={<Dashboard />}>
          <Route index element={<DashboardHome />} />
          <Route path="settings" element={<DashboardSettings />} />
        </Route>
      </Routes>
    </Router>
  );
};

/********************************************
 * ESCENARIO 4: Redirección
 *******************************************/
// Este ejemplo muestra cómo redirigir a los usuarios a otra ruta.
// Es útil cuando necesitas redirigir a los usuarios después de una acción o si una ruta no existe.

const Login = () => {
  const navigate = useNavigate();
  const handleLogin = () => {
    // Simular inicio de sesión
    navigate("/dashboard");
  };

  return (
    <div>
      <p>Por favor, inicia sesión.</p>
      <button onClick={handleLogin}>Iniciar sesión</button>
    </div>
  );
};

const RedirectExample = () => {
  return (
    <Router>
      <nav>
        <Link to="/login">Iniciar sesión</Link>
      </nav>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/dashboard" element={<DashboardHome />} />
      </Routes>
    </Router>
  );
};

/********************************************
 * ESCENARIO 5: Rutas protegidas
 *******************************************/
// Este ejemplo muestra cómo proteger rutas para que solo usuarios autenticados puedan acceder.
// Es útil cuando necesitas restringir el acceso a ciertas partes de la aplicación.

const ProtectedRoute = ({ children }) => {
  const isAuthenticated = true; // Simular autenticación
  const navigate = useNavigate();

  if (!isAuthenticated) {
    navigate("/login");
    return null;
  }

  return children;
};

const ProtectedPage = () => <p>Esta es una página protegida.</p>;

const ProtectedRoutingExample = () => {
  return (
    <Router>
      <nav>
        <Link to="/protected">Página protegida</Link> |{" "}
        <Link to="/login">Iniciar sesión</Link>
      </nav>
      <Routes>
        <Route
          path="/protected"
          element={
            <ProtectedRoute>
              <ProtectedPage />
            </ProtectedRoute>
          }
        />
        <Route path="/login" element={<Login />} />
      </Routes>
    </Router>
  );
};

/********************************************
 * ESCENARIO 6: Rutas con carga perezosa (Lazy Loading)
 *******************************************/
// Este ejemplo muestra cómo cargar componentes de manera perezosa usando `React.lazy`.
// Es útil para mejorar el rendimiento de la aplicación cargando solo lo necesario.

const LazyComponent = React.lazy(() => import("./LazyComponent"));

const LazyLoadingExample = () => {
  return (
    <Router>
      <nav>
        <Link to="/lazy">Cargar componente perezoso</Link>
      </nav>
      <Routes>
        <Route
          path="/lazy"
          element={
            <React.Suspense fallback={<p>Cargando...</p>}>
              <LazyComponent />
            </React.Suspense>
          }
        />
      </Routes>
    </Router>
  );
};

/********************************************
 * ESCENARIO 7: Rutas con parámetros de consulta (Query Parameters)
 *******************************************/
// Este ejemplo muestra cómo manejar parámetros de consulta en las rutas.
// Es útil cuando necesitas pasar datos adicionales en la URL.

const SearchResults = () => {
  const queryParams = new URLSearchParams(window.location.search);
  const query = queryParams.get("q");

  return <p>Resultados de búsqueda para: {query}</p>;
};

const QueryParamsExample = () => {
  return (
    <Router>
      <nav>
        <Link to="/search?q=react">Buscar "React"</Link> |{" "}
        <Link to="/search?q=router">Buscar "Router"</Link>
      </nav>
      <Routes>
        <Route path="/search" element={<SearchResults />} />
      </Routes>
    </Router>
  );
};

/********************************************
 * ESCENARIO 8: Rutas con rutas comodín (Wildcard)
 *******************************************/
// Este ejemplo muestra cómo usar rutas comodín para manejar rutas no definidas.
// Es útil para mostrar una página 404 cuando la ruta no existe.

const NotFound = () => <p>Página no encontrada.</p>;

const WildcardRoutingExample = () => {
  return (
    <Router>
      <nav>
        <Link to="/">Inicio</Link> | <Link to="/unknown">Ruta desconocida</Link>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
};

/********************************************
 * ESCENARIO 9: Rutas con animaciones
 *******************************************/
// Este ejemplo muestra cómo agregar animaciones al cambiar de ruta.
// Es útil para mejorar la experiencia del usuario con transiciones suaves.

const AnimatedRoute = () => {
  return (
    <div style={{ transition: "opacity 0.5s", opacity: 1 }}>
      <p>Esta es una ruta con animación.</p>
    </div>
  );
};

const AnimatedRoutingExample = () => {
  return (
    <Router>
      <nav>
        <Link to="/animated">Ruta animada</Link>
      </nav>
      <Routes>
        <Route path="/animated" element={<AnimatedRoute />} />
      </Routes>
    </Router>
  );
};

/********************************************
 * ESCENARIO 10: Rutas con autenticación y roles
 *******************************************/
// Este ejemplo muestra cómo manejar rutas basadas en roles de usuario.
// Es útil cuando tienes diferentes niveles de acceso en tu aplicación.

const AdminPage = () => <p>Página de administrador.</p>;
const UserPage = () => <p>Página de usuario.</p>;

const RoleBasedRoutingExample = () => {
  const userRole = "admin"; // Simular rol de usuario

  return (
    <Router>
      <nav>
        <Link to="/admin">Admin</Link> | <Link to="/user">Usuario</Link>
      </nav>
      <Routes>
        {userRole === "admin" && <Route path="/admin" element={<AdminPage />} />}
        <Route path="/user" element={<UserPage />} />
      </Routes>
    </Router>
  );
};

/********************************************
 * COMPONENTE PRINCIPAL: Muestra todos los escenarios
 *******************************************/
// Este componente centraliza todos los ejemplos para que el profesor pueda
// mostrarlos uno por uno en una única vista. Cada uno está comentado con su número y título.

const EjemplosRouter = () => {
  return (
    <div className="p-6 space-y-6">
      <h1 className="text-2xl font-bold">Ejemplos de React Router</h1>

      <BasicRoutingExample />          {/* ESCENARIO 1: Navegación básica */}
      <DynamicRoutingExample />        {/* ESCENARIO 2: Rutas dinámicas */}
      <NestedRoutingExample />         {/* ESCENARIO 3: Rutas anidadas */}
      <RedirectExample />              {/* ESCENARIO 4: Redirección */}
      <ProtectedRoutingExample />      {/* ESCENARIO 5: Rutas protegidas */}
      <LazyLoadingExample />           {/* ESCENARIO 6: Rutas con carga perezosa */}
      <QueryParamsExample />           {/* ESCENARIO 7: Rutas con parámetros de consulta */}
      <WildcardRoutingExample />       {/* ESCENARIO 8: Rutas con rutas comodín */}
      <AnimatedRoutingExample />       {/* ESCENARIO 9: Rutas con animaciones */}
      <RoleBasedRoutingExample />      {/* ESCENARIO 10: Rutas con autenticación y roles */}
    </div>
  );
};

export default EjemplosRouter;