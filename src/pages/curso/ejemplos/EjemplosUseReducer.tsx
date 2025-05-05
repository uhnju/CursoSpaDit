import { useReducer} from "react";

/********************************************
 * ESCENARIO 1: Contador avanzado con useReducer
 *******************************************/

const reducerContador = (estado: { contador: number; }, accion: { tipo: any; }) => {
  switch (accion.tipo) {
    case "incrementar":
      return { contador: estado.contador + 1 };
    case "decrementar":
      return { contador: estado.contador - 1 };
    case "reiniciar":
      return { contador: 0 };
    default:
      return estado;
  }
};

const ContadorAvanzado = () => {
  const [estado, dispatch] = useReducer(reducerContador, { contador: 0 });

  return (
    <div>
      <h3>Contador avanzado</h3>
      <p>Contador: {estado.contador}</p>
      <button onClick={() => dispatch({ tipo: "incrementar" })}>+</button>
      <button onClick={() => dispatch({ tipo: "decrementar" })}>-</button>
      <button onClick={() => dispatch({ tipo: "reiniciar" })}>Reiniciar</button>
    </div>
  );
};

/********************************************
 * COMPONENTE PRINCIPAL: Muestra todos los escenarios
 *******************************************/

const EjemplosUseReducer = () => (
  <>
    <h1>Ejemplos de useReducer</h1>
    <ContadorAvanzado />         {/* ESCENARIO 1: Contador avanzado */}
  </>
);

export default EjemplosUseReducer;
