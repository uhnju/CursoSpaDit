import React from "react";
import {
  BrowserRouter,
  Routes,
  Route,
  Link,
  Outlet,
  useParams,
  useNavigate,
  useLocation,
  useSearchParams,
  useOutletContext,
} from "react-router-dom";

/********************************************
 * ESCENARIO 1: Navegación Básica con useNavigate
 *******************************************/
const NavegarInicio = () => {
  const navigate = useNavigate();
  return (
    <div>
      <p>Haz clic en el botón para ir a la página de inicio.</p>
      <button onClick={() => navigate("/")}>Ir a Inicio</button>
    </div>
  );
};

/********************************************
 * ESCENARIO 2: Acceso a Parámetros de la URL con useParams
 *******************************************/
const PerfilUsuario = () => {
  const { userId } = useParams();
  return <div>Perfil del Usuario con ID: {userId}</div>;
};

/********************************************
 * ESCENARIO 3: Obtención de la Ubicación Actual con useLocation
 *******************************************/
const MostrarUbicacion = () => {
  const location = useLocation();
  return <div>Estás en la ruta: {location.pathname}</div>;
};

/********************************************
 * ESCENARIO 4: Manejo de Parámetros de Consulta con useSearchParams
 *******************************************/
const PaginaBusqueda = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const filtro = searchParams.get("filtro") || "";
  return (
    <div>
      <p>Buscar término: {filtro}</p>
      <button onClick={() => setSearchParams({ filtro: "React" })}>
        Buscar "React"
      </button>
    </div>
  );
};

/********************************************
 * ESCENARIO 5: Uso de useOutletContext para Compartir Datos entre Rutas Anidadas
 *******************************************/
const ComponentePadre = () => {
  const datoCompartido = "Información compartida desde el componente padre.";
  return (
    <div>
      <h2>Componente Padre</h2>
      <Outlet context={datoCompartido} />
    </div>
  );
};

const ComponenteHijo = () => {
  const contexto = useOutletContext();
  return <div>Dato recibido: {contexto}</div>;
};

/********************************************
 * ESCENARIO 6: Redirección Condicional con useNavigate
 *******************************************/
const PaginaProtegida = () => {
  const navigate = useNavigate();
  const estaAutenticado = true;

  React.useEffect(() => {
    if (!estaAutenticado) navigate("/login");
  }, [estaAutenticado, navigate]);

  return <div>Página Protegida. Esta autenticado: {`${estaAutenticado}`}</div>;
};

/********************************************
 * ESCENARIO 7: Recuperación del Estado de Navegación con useLocation
 *******************************************/
const ReceptorEstado = () => {
  const location = useLocation();
  const state = location.state || {};
  return <div>Dato recibido: {state.message}</div>;
};

/********************************************
 * ESCENARIO 8: Manejo de Rutas No Encontradas (404)
 *******************************************/
const NotFound = () => {
  return <div>Página no encontrada</div>;
};

/********************************************
 * ESCENARIO 9: Navegación con Parámetros de Estado
 *******************************************/
const EnviarEstado = () => {
  const navigate = useNavigate();
  return (
    <div>
      <button
        onClick={() =>
          navigate("/recibir-estado", {
            state: { message: "Hola desde EnviarEstado" },
          })
        }
      >
        Enviar Estado
      </button>
    </div>
  );
};

/********************************************
 * ESCENARIO 10: Uso de useParams en Rutas Anidadas
 *******************************************/
const PaginaCategoria = () => {
  const { categoria, subcategoria } = useParams();
  return (
    <div>
      <h2>Categoría: {categoria}</h2>
      <h3>Subcategoría: {subcategoria}</h3>
    </div>
  );
};

/********************************************
 * COMPONENTE PRINCIPAL: Configuración de Rutas
 *******************************************/
const EjemplosRouter = () => {
  return (
    <BrowserRouter>
      <h1>Ejemplos de React Router</h1>
      <nav>
        <Link to="/">Inicio</Link>
        <Link to="/navegar-inicio">useNavigate</Link>
        <Link to="/usuario/42">useParams</Link>
        <Link to="/mostrar-ubicacion">useLocation</Link>
        <Link to="/busqueda?filtro=React">useSearchParams</Link>
        <Link to="/padre">useOutletContext</Link>
        <Link to="/protegida">Protegida</Link>
        <Link to="/enviar-estado">Enviar Estado</Link>
        <Link to="/recibir-estado">Recibir Estado</Link>
        <Link to="/categoria/libros/ficcion">Ruta Anidada</Link>
      </nav>
      <Routes>
        <Route path="/" element={<div>Inicio de la App</div>} />
        <Route path="/navegar-inicio" element={<NavegarInicio />} />
        <Route path="/usuario/:userId" element={<PerfilUsuario />} />
        <Route path="/mostrar-ubicacion" element={<MostrarUbicacion />} />
        <Route path="/busqueda" element={<PaginaBusqueda />} />
        <Route path="/padre" element={<ComponentePadre />}>
          <Route index element={<ComponenteHijo />} />
        </Route>
        <Route path="/protegida" element={<PaginaProtegida />} />
        <Route path="/enviar-estado" element={<EnviarEstado />} />
        <Route path="/recibir-estado" element={<ReceptorEstado />} />
        <Route path="/categoria/:categoria/:subcategoria" element={<PaginaCategoria />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
};

export default EjemplosRouter;
