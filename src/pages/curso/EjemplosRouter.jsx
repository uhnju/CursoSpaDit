import { BrowserRouter as Router, Routes, Route, Link, useParams, useNavigate, Navigate } from "react-router-dom";
import { useState } from "react";

// ✅ 1️⃣ Rutas básicas con Link
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

// ✅ 2️⃣ Parámetros dinámicos en rutas
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

// ✅ 3️⃣ Redirección automática
const RedirectExample = () => {
  const [redirect, setRedirect] = useState(false);
  return redirect ? <Navigate to="/" /> : <button onClick={() => setRedirect(true)}>Ir al Inicio</button>;
};

// ✅ 4️⃣ Navegación programada con `useNavigate`
const NavigationExample = () => {
  const navigate = useNavigate();
  return (
    <div>
      <h3>4️⃣ Navegación Programada</h3>
      <button onClick={() => navigate("/")}>Ir al Inicio</button>
    </div>
  );
};

// ✅ 5️⃣ Página 404 (Not Found)
const NotFound = () => <h2>❌ 404 - Página no encontrada</h2>;
const NotFoundExample = () => (
  <Routes>
    <Route path="*" element={<NotFound />} />
  </Routes>
);

// ✅ 6️⃣ Rutas protegidas (Auth)
const ProtectedRoute = ({ children }) => {
  const isAuthenticated = false; // Cambiar a `true` para probar acceso
  return isAuthenticated ? children : <Navigate to="/login" />;
};
const Dashboard = () => <h2>📊 Panel de Control</h2>;
const ProtectedRouteExample = () => (
  <div>
    <h3>6️⃣ Ruta Protegida</h3>
    <Routes>
      <Route path="/dashboard" element={<ProtectedRoute><Dashboard /></ProtectedRoute>} />
      <Route path="/login" element={<h2>🔑 Iniciar Sesión</h2>} />
    </Routes>
    <Link to="/dashboard">Ir al Dashboard</Link>
  </div>
);

// ✅ 7️⃣ Anidación de rutas
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

// ✅ 8️⃣ Ruta con búsqueda en la URL (`useSearchParams`)
const SearchPage = () => {
  const [searchParams, setSearchParams] = new URLSearchParams(window.location.search);
  const query = searchParams.get("query") || "Nada";
  return (
    <div>
      <h3>8️⃣ Búsqueda con Query Params</h3>
      <p>🔎 Buscando: {query}</p>
      <button onClick={() => setSearchParams({ query: "React" })}>Buscar React</button>
    </div>
  );
};

// ✅ 9️⃣ Ruta con animaciones (simulada)
const AnimatedRoute = () => {
  return (
    <div style={{ transition: "opacity 0.5s", opacity: 1 }}>
      <h3>9️⃣ Ruta con Animación</h3>
      <p>Este contenido aparece con una animación simulada.</p>
    </div>
  );
};

// ✅ 🔟 Layouts y persistencia entre páginas
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
    <Route path="/layout/*" element={<Layout><Routes>
      <Route path="home" element={<h3>🏠 Página de Inicio</h3>} />
      <Route path="contact" element={<h3>📞 Contacto</h3>} />
    </Routes></Layout>} />
  </Routes>
);

// ✅ Componente principal con todos los ejemplos
const EjemplosRouter = () => (
  <Router>
    <div style={{ padding: "20px", fontFamily: "Arial, sans-serif" }}>
      <h2>📘 10 Escenarios Útiles de React Router</h2>
      <BasicRouting />
      <DynamicRoute />
      <RedirectExample />
      <NavigationExample />
      <NotFoundExample />
      <ProtectedRouteExample />
      <Products />
      <SearchPage />
      <AnimatedRoute />
      <LayoutExample />
    </div>
  </Router>
);

export default EjemplosRouter;
