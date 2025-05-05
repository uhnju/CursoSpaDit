/********************************************
 * ESCENARIO 1: Lista simple de cadenas de texto
 *******************************************/

const ListaSimple = () => {
  const frutas = ["Manzana", "Banana", "Cereza", "Melocotón"];

  return (
    <ul>
      {frutas.map((fruta, index) => (
        <li key={index}>{fruta}</li>
      ))}
    </ul>
  );
};

/********************************************
 * ESCENARIO 2: Lista de objetos
 *******************************************/

const ListaObjetos = () => {
  const usuarios = [
    { id: 1, nombre: "Juan" },
    { id: 2, nombre: "María" },
    { id: 3, nombre: "Carlos" },
  ];

  return (
    <ul>
      {usuarios.map((usuario) => (
        <li key={usuario.id}>{usuario.nombre}</li>
      ))}
    </ul>
  );
};

/********************************************
 * ESCENARIO 3: Lista ordenada al renderizar
 *******************************************/

const ListaOrdenada = () => {
  const frutas = ["Manzana", "Banana", "Cereza", "Melocotón"];

  return (
    <ul>
      {frutas
        .slice()
        .sort()
        .map((fruta, index) => (
          <li key={index}>{fruta}</li>
        ))}
    </ul>
  );
};

/********************************************
 * ESCENARIO 4: Filtrado de lista (números pares)
 *******************************************/

const ListaFiltradaNumeros = () => {
  const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9];

  return (
    <ul>
      {numeros
        .filter((n) => n % 2 === 0)
        .map((n, index) => (
          <li key={index}>{n}</li>
        ))}
    </ul>
  );
};

/********************************************
 * COMPONENTE PRINCIPAL: Muestra todos los escenarios
 *******************************************/

const EjemplosRenderizadoListas = () => (
  <>
    <h1>Ejemplos de renderizado de listas</h1>

    <ListaSimple />                {/* ESCENARIO 1: Lista simple de strings */}
    <ListaObjetos />              {/* ESCENARIO 2: Lista de objetos con id */}
    <ListaOrdenada />             {/* ESCENARIO 3: Lista ordenada alfabéticamente */}
    <ListaFiltradaNumeros />      {/* ESCENARIO 4: Filtrado de números pares */}
  </>
);

export default EjemplosRenderizadoListas;
