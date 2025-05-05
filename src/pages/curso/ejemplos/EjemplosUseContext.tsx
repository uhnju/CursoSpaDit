import { SpaditContexto } from '@dit/spad-rdit_library'
import { useContext } from "react";
import { UsuarioContexto } from "../contextos/UsuarioContexto";
import { ContadorContexto } from "../contextos/ContadorContexto";

/********************************************
 * ESCENARIO 1: Consumir contexto con useContext
 *******************************************/

const ComponenteContador = () => {
  const { contador, setContador } = useContext(ContadorContexto);

  return (
    <div>
      <p>Contador: {contador}</p>
      <button onClick={() => setContador(contador + 1)}>Incrementar</button>
    </div>
  );
};

/********************************************
 * COMPONENTE PRINCIPAL: Muestra varios consumidores del contexto
 *******************************************/

const EjemplosUseContext = () => {
  const { contexto } = useContext(SpaditContexto)
  const usuario = useContext(UsuarioContexto)
  return (
    <>
      <h1>Ejemplos de useContext</h1>
      <h4>Objeto SpaditContexto:</h4>
      <pre>{JSON.stringify(contexto, null, 2)}</pre>
      <h4>Objeto Usuario del UsuarioContexto:</h4>
      <pre>{JSON.stringify(usuario, null, 2)}</pre>
      <ComponenteContador />
      <ComponenteContador />
    </>
  )
};

export default EjemplosUseContext;