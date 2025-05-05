import React, { Suspense } from "react";
import { Routes, Route, useNavigate } from "react-router-dom";
import { Dropdown } from '@dit/spad-rdit_library'

import EjemplosSintaxisJSX from "../pages/curso/ejemplos/EjemplosSintaxisJSX";
import EjemplosRenderizadoListas from "../pages/curso/ejemplos/EjemplosRenderizadoListas";
import EjemplosProps from "../pages/curso/ejemplos/EjemplosProps";
import EjemplosEventos from "../pages/curso/ejemplos/EjemplosEventos";
import EjemplosUseState from "../pages/curso/ejemplos/EjemplosUseState";
import EjemplosUseEffect from "../pages/curso/ejemplos/EjemplosUseEffect";
import EjemplosUseContext from "../pages/curso/ejemplos/EjemplosUseContext";
import EjemplosUseRef from "../pages/curso/ejemplos/EjemplosUseRef";
import EjemplosUseReducer from "../pages/curso/ejemplos/EjemplosUseReducer";
const OtrosEjemplos = React.lazy(() => import("../pages/curso/ejemplos/OtrosEjemplos"))

import { NavegarConLink, NavegarConUseNavigate, MostrarUbicacion, LeerSearchParams, NavegarEnviandoEstado, NavegarRecibiendoEstado, LeerParams } from "../pages/curso/ejemplos/EjemplosReactRouter";

import EjemplosAxios from "../pages/curso/ejemplos/EjemplosAxios";

import EjemploQueryForm from "../pages/curso/queryform/EjemploQueryForm";

import ConsultaEmpleados from "../pages/curso/casopractico/ConsultaEmpleados";

const AppIntraAEAT = () => {
  const navigate = useNavigate()
  return (
    <Suspense fallback={<div>Cargando...</div>}>
      <Dropdown title="Curso SpaDit">
        <Dropdown.Item onClick={() => navigate('/EjemplosSintaxisJSX')}>JSX</Dropdown.Item>
        <Dropdown.Item onClick={() => navigate('/EjemplosRenderizadoListas')}>Listas</Dropdown.Item>
        <Dropdown.Item onClick={() => navigate('/EjemplosEventos')}>Eventos</Dropdown.Item>
        <Dropdown.Item onClick={() => navigate('/EjemplosProps')}>Props</Dropdown.Item>
        <Dropdown.Item onClick={() => navigate('/EjemplosUseState')}>useState</Dropdown.Item>
        <Dropdown.Item onClick={() => navigate('/EjemplosUseEffect')}>useEffect</Dropdown.Item>
        <Dropdown.Item onClick={() => navigate('/EjemplosUseContext')}>useContext</Dropdown.Item>
        <Dropdown.Item onClick={() => navigate('/EjemplosUseRef')}>useRef</Dropdown.Item>
        <Dropdown.Item onClick={() => navigate('/EjemplosUseReducer')}>useReducer</Dropdown.Item>
        <Dropdown.Item onClick={() => navigate('/OtrosEjemplos')}>Otros</Dropdown.Item>
        <Dropdown.Divider />
        <Dropdown.Item onClick={() => navigate('/NavegarConLink')}>Navegar Con Link</Dropdown.Item>
        <Dropdown.Item onClick={() => navigate('/NavegarConUseNavigate')}>Navegar Con UseNavigate</Dropdown.Item>
        <Dropdown.Item onClick={() => navigate('/MostrarUbicacion')}>Mostrar Ubicacion</Dropdown.Item>
        <Dropdown.Item onClick={() => navigate('/LeerSearchParams?filtro=aeat')}>Leer Search Params</Dropdown.Item>
        <Dropdown.Item onClick={() => navigate('/LeerParams/123465')}>Leer Params</Dropdown.Item>
        <Dropdown.Item onClick={() => navigate('/NavegarEnviandoEstado')}>Navegar Enviando Estado</Dropdown.Item>
        <Dropdown.Divider />
        <Dropdown.Item onClick={() => navigate('/EjemplosAxios')}>Axios</Dropdown.Item>
        <Dropdown.Divider />
        <Dropdown.Item onClick={() => navigate('/EjemploQueryForm')}>QueryForm</Dropdown.Item>
        <Dropdown.Divider />
        <Dropdown.Item onClick={() => navigate('/ConsultaEmpleados')}>ConsultaEmpleados</Dropdown.Item>
      </Dropdown><br />

      <Routes>
        <Route path="/" element={<h1>Curso SpaDit</h1>} />

        <Route path="/EjemplosSintaxisJSX" element={<EjemplosSintaxisJSX />} />
        <Route path="/EjemplosRenderizadoListas" element={<EjemplosRenderizadoListas />} />
        <Route path="/EjemplosEventos" element={<EjemplosEventos />} />
        <Route path="/EjemplosProps" element={<EjemplosProps />} />
        <Route path="/EjemplosUseState" element={<EjemplosUseState />} />
        <Route path="/EjemplosUseEffect" element={<EjemplosUseEffect />} />
        <Route path="/EjemplosUseRef" element={<EjemplosUseRef />} />
        <Route path="/EjemplosUseContext" element={<EjemplosUseContext />} />
        <Route path="/EjemplosUseReducer" element={<EjemplosUseReducer />} />
        <Route path="/OtrosEjemplos" element={<OtrosEjemplos />} />

        <Route path="/NavegarConLink" element={<NavegarConLink />} />
        <Route path="/NavegarConUseNavigate" element={<NavegarConUseNavigate />} />
        <Route path="/MostrarUbicacion" element={<MostrarUbicacion />} />
        <Route path="/LeerSearchParams" element={<LeerSearchParams />} />
        <Route path="/LeerParams/:userId" element={<LeerParams />} />
        <Route path="/NavegarEnviandoEstado" element={<NavegarEnviandoEstado />} />
        <Route path="/NavegarRecibiendoEstado" element={<NavegarRecibiendoEstado />} />

        <Route path="/EjemplosAxios" element={<EjemplosAxios />} />

        <Route path="/EjemploQueryForm" element={<EjemploQueryForm />} />

        <Route path="/ConsultaEmpleados" element={<ConsultaEmpleados />} />
      </Routes>

    </Suspense>
  );
};

export default AppIntraAEAT;
