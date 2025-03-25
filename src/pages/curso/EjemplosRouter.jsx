import React from "react";
import {
 BrowserRouter as Router,
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
const NavigateHome = () => {
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
const UserProfile = () => {
 const { userId } = useParams();
 return <div>Perfil del Usuario con ID: {userId}</div>;
};

/********************************************
 * ESCENARIO 3: Obtención de la Ubicación Actual con useLocation
 *******************************************/
const ShowLocation = () => {
 const location = useLocation();
 return <div>Estás en la ruta: {location.pathname}</div>;
};

/********************************************
 * ESCENARIO 4: Manejo de Parámetros de Consulta con useSearchParams
 *******************************************/
const SearchPage = () => {
 const [searchParams, setSearchParams] = useSearchParams();
 const term = searchParams.get("term") || "";
 return (
  <div>
   <p>Buscar término: {term}</p>
   <button onClick={() => setSearchParams({ term: "React" })}>
    Buscar "React"
   </button>
  </div>
 );
};

/********************************************
 * ESCENARIO 5: Uso de useOutletContext para Compartir Datos entre Rutas Anidadas
 *******************************************/
const ParentComponent = () => {
 const sharedData = "Información compartida desde el componente padre.";
 return (
  <div>
   <h2>Componente Padre</h2>
   <Outlet context={sharedData} />
  </div>
 );
};

const ChildComponent = () => {
 const context = useOutletContext();
 return <div>Dato recibido: {context}</div>;
};

/********************************************
 * ESCENARIO 6: Redirección Condicional con useNavigate
 *******************************************/
const ProtectedPage = () => {
 const navigate = useNavigate();
 const isAuthenticated = false;

 React.useEffect(() => {
  if (!isAuthenticated) navigate("/login");
 }, [isAuthenticated, navigate]);

 return <div>Página Protegida</div>;
};

/********************************************
 * ESCENARIO 7: Recuperación del Estado de Navegación con useLocation
 *******************************************/
const StateReceiver = () => {
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
const StateSender = () => {
 const navigate = useNavigate();
 return (
  <div>
   <button
    onClick={() =>
     navigate("/receive-state", {
      state: { message: "Hola desde StateSender" },
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
const CategoryPage = () => {
 const { category, subcategory } = useParams();
 return (
  <div>
   <h2>Categoría: {category}</h2>
   <h3>Subcategoría: {subcategory}</h3>
  </div>
 );
};

/********************************************
 * COMPONENTE PRINCIPAL: Configuración de Rutas
 *******************************************/
const EjemplosRouter = () => {
 return (
  <Router>
   <h1>Ejemplos de React Router</h1>
   <nav className="space-x-4">
    <Link to="/">Inicio</Link>
    <Link to="/navigate-home">useNavigate</Link>
    <Link to="/user/42">useParams</Link>
    <Link to="/show-location">useLocation</Link>
    <Link to="/search?term=React">useSearchParams</Link>
    <Link to="/parent">useOutletContext</Link>
    <Link to="/protected">Protegida</Link>
    <Link to="/send-state">Enviar Estado</Link>
    <Link to="/receive-state">Recibir Estado</Link>
    <Link to="/category/books/fiction">Ruta Anidada</Link>
   </nav>
   <Routes>
    <Route path="/" element={<div>Inicio de la App</div>} />
    <Route path="/navigate-home" element={<NavigateHome />} />
    <Route path="/user/:userId" element={<UserProfile />} />
    <Route path="/show-location" element={<ShowLocation />} />
    <Route path="/search" element={<SearchPage />} />
    <Route path="/parent" element={<ParentComponent />}>
     <Route index element={<ChildComponent />} />
    </Route>
    <Route path="/protected" element={<ProtectedPage />} />
    <Route path="/send-state" element={<StateSender />} />
    <Route path="/receive-state" element={<StateReceiver />} />
    <Route path="/category/:category/:subcategory" element={<CategoryPage />} />
    <Route path="*" element={<NotFound />} />
   </Routes>
  </Router>
 );
};

export default EjemplosRouter;

