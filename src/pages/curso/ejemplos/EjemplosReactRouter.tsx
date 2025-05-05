import { Link, useNavigate, useLocation, useSearchParams, useParams } from "react-router-dom";

/********************************************
 * ESCENARIO 1: Navegación Básica con Link
 *******************************************/
export const NavegarConLink = () => {
  return (
    <div>
      <Link to="/">Inicio</Link>
      <br />
      <Link to="/EjemplosSintaxisJSX">SintaxisJSX</Link>
      <br />
      <Link to="/EjemplosEventos">Eventos</Link>
    </div>
  );
};

/********************************************
 * ESCENARIO 2: Navegación Básica con useNavigate
 *******************************************/
export const NavegarConUseNavigate = () => {
  const navigate = useNavigate();
  return (
    <div>
      <button onClick={() => navigate("/")}>Ir a Inicio</button>
      <button onClick={() => navigate("/EjemplosSintaxisJSX")}>Ir a SintaxisJSX</button>
      <button onClick={() => navigate("/EjemplosEventos")}>Ir a Eventos</button>
      <button onClick={() => navigate(-1)}>Atrás</button>
    </div>
  );
};

/********************************************
 * ESCENARIO 3: Obtención de la Ubicación Actual con useLocation
 *******************************************/
export const MostrarUbicacion = () => {
  const location = useLocation();
  return <div>Estás en la ruta: {location.pathname}</div>;
};


/********************************************
 * ESCENARIO 4: Manejo de Parámetros de Consulta con useSearchParams
 *******************************************/
export const LeerSearchParams = () => {
  const [searchParams] = useSearchParams();
  const filtro = searchParams.get("filtro") || "";
  return (
    <div>
      <p>Buscar término: {filtro}</p>
    </div>
  );
};

/********************************************
 * ESCENARIO 5: Acceso a Parámetros de la URL con useParams
 *******************************************/
export const LeerParams = () => {
  const { userId } = useParams();
  return <div>Perfil del Usuario con ID: {userId}</div>;
};

/********************************************
 * ESCENARIO 6: Navegación con Parámetros de Estado
 *******************************************/
export const NavegarEnviandoEstado = () => {
  const navigate = useNavigate();
  return (
    <div>
      <button
        onClick={() =>
          navigate("/NavegarRecibiendoEstado", {
            state: { message: "Hola desde NavegarEnviandoEstado" },
          })
        }
      >
        Enviar Estado
      </button>
    </div>
  );
};

/********************************************
 * ESCENARIO 7: Recuperación del Estado de Navegación con useLocation
 *******************************************/
export const NavegarRecibiendoEstado = () => {
  const location = useLocation();
  const state = location.state || {};
  return <div>Dato recibido: {state.message}</div>;
};
