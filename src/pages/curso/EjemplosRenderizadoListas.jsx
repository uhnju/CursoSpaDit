import React, { useState } from "react";

/********************************************
 * ESCENARIO 1: Lista simple de cadenas de texto
 *******************************************/
// Este ejemplo muestra una lista básica de elementos tipo string.
// Se usa `map` para recorrer el array y generar un <li> por cada elemento.

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
// En este caso renderizamos una lista de usuarios (objetos).
// Se recomienda usar una propiedad única (como `id`) como `key` en el mapeo.

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
 * ESCENARIO 3: Lista condicional
 *******************************************/
// Este ejemplo muestra una lista solo si contiene elementos.
// Si el array está vacío, se muestra un mensaje alternativo.

const ListaCondicional = () => {
  const elementos = ["Elemento 1", "Elemento 2", "Elemento 3"];

  return (
    <div>
      {elementos.length > 0 ? (
        <ul>
          {elementos.map((elemento, index) => (
            <li key={index}>{elemento}</li>
          ))}
        </ul>
      ) : (
        <p>No hay elementos en la lista</p>
      )}
    </div>
  );
};

/********************************************
 * ESCENARIO 4: Estilos condicionales por índice
 *******************************************/
// Aquí alternamos el estilo de cada elemento según su posición en la lista.
// En este caso, los elementos en posiciones pares se muestran en negrita.

const ListaConEstilos = () => {
  const frutas = ["Manzana", "Pera", "Uva", "Mango", "Naranja"];

  return (
    <ul>
      {frutas.map((fruta, index) => (
        <li key={index} style={{ fontWeight: index % 2 === 0 ? "bold" : "normal" }}>
          {fruta}
        </li>
      ))}
    </ul>
  );
};

/********************************************
 * ESCENARIO 5: Lista dinámica (añadir elementos)
 *******************************************/
// Se puede agregar elementos dinámicamente al hacer clic en un botón.
// Se utiliza el operador spread (`...`) para añadir nuevos valores al array.

const ListaDinamica = () => {
  const [elementos, setElementos] = useState(["Elemento 1"]);

  const añadirElemento = () => {
    setElementos([...elementos, `Elemento ${elementos.length + 1}`]);
  };

  return (
    <div>
      <button onClick={añadirElemento}>Añadir Elemento</button>
      <ul>
        {elementos.map((elemento, index) => (
          <li key={index}>{elemento}</li>
        ))}
      </ul>
    </div>
  );
};

/********************************************
 * ESCENARIO 6: Lista con opción de eliminar
 *******************************************/
// Se muestra cómo eliminar elementos individuales de una lista.
// Cada botón elimina el elemento correspondiente al índice que representa.

const ListaConEliminacion = () => {
  const [elementos, setElementos] = useState(["Elemento 1", "Elemento 2", "Elemento 3"]);

  const eliminarElemento = (indiceAEliminar) => {
    setElementos(elementos.filter((_, indice) => indice !== indiceAEliminar));
  };

  return (
    <ul>
      {elementos.map((elemento, index) => (
        <li key={index}>
          {elemento} <button onClick={() => eliminarElemento(index)}>Eliminar</button>
        </li>
      ))}
    </ul>
  );
};

/********************************************
 * ESCENARIO 7: Lista ordenada al renderizar
 *******************************************/
// Se ordena la lista alfabéticamente antes de renderizarla.
// Es importante usar `.slice()` para no modificar el array original.

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
 * ESCENARIO 8: Lista con ordenación por propiedad
 *******************************************/
// Este ejemplo muestra cómo ordenar una lista basada en una propiedad.
// Es útil cuando necesitas mostrar los elementos en un orden específico.

const ListaOrdenadaPorPropiedad = () => {
  const frutas = [
    { nombre: "Manzana", precio: 1.5 },
    { nombre: "Banana", precio: 0.5 },
    { nombre: "Naranja", precio: 1.0 },
  ];

  const frutasOrdenadas = frutas.toSorted((a, b) => a.precio - b.precio);

  return (
    <ul>
      {frutasOrdenadas.map((fruta, index) => (
        <li key={index}>
          {fruta.nombre} - €{fruta.precio}
        </li>
      ))}
    </ul>
  );
};

/********************************************
 * ESCENARIO 9: Filtrado de lista (números pares)
 *******************************************/
// Este componente filtra los elementos del array original antes de mostrarlos.
// Solo se renderizan los números pares mediante `filter`.

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
 * ESCENARIO 10: Lista con campo de búsqueda
 *******************************************/
// Este ejemplo muestra cómo filtrar una lista basado en texto introducido por el usuario.

const ListaConFiltro = () => {
  const frutas = ["Manzana", "Banana", "Naranja", "Uva", "Kiwi"];
  const [filtro, setFiltro] = useState("");

  const frutasFiltradas = frutas.filter((fruta) =>
    fruta.toLowerCase().includes(filtro.toLowerCase())
  );

  return (
    <div>
      <input
        type="text"
        value={filtro}
        onChange={(e) => setFiltro(e.target.value)}
        placeholder="Filtrar frutas"
      />
      <ul>
        {frutasFiltradas.map((fruta, index) => (
          <li key={index}>{fruta}</li>
        ))}
      </ul>
    </div>
  );
};

/********************************************
 * ESCENARIO 11: Lista con datos asíncronos (fetch)
 *******************************************/
// Se simula una llamada a una API para obtener una lista de tareas.
// Se usa `useState` para manejar tanto los datos como el estado de carga (`cargando`).

const ListaAsincrona = () => {
  const [datos, setDatos] = useState([]);
  const [cargando, setCargando] = useState(false);

  const obtenerDatos = async () => {
    setCargando(true);
    const respuesta = await fetch("https://jsonplaceholder.typicode.com/todos?_limit=5");
    const resultado = await respuesta.json();
    setDatos(resultado);
    setCargando(false);
  };

  return (
    <div>
      <button onClick={obtenerDatos}>Cargar Datos</button>
      {cargando ? (
        <p>Cargando...</p>
      ) : (
        <ul>{datos.map((tarea) => <li key={tarea.id}>{tarea.title}</li>)}</ul>
      )}
    </div>
  );
};

/********************************************
 * COMPONENTE PRINCIPAL: Muestra todos los escenarios
 *******************************************/
// Este componente agrupa todos los ejemplos de listas en una única vista.
// Cada uno demuestra una técnica diferente de renderizado, filtrado o gestión de listas.

const EjemplosRenderizadoListas = () => (
  <>
    <h1>Ejemplos de renderizado de listas</h1>
    <ListaSimple />                 {/* ESCENARIO 1 */}
    <ListaObjetos />               {/* ESCENARIO 2 */}
    <ListaCondicional />           {/* ESCENARIO 3 */}
    <ListaConEstilos />            {/* ESCENARIO 4 */}
    <ListaDinamica />              {/* ESCENARIO 5 */}
    <ListaConEliminacion />        {/* ESCENARIO 6 */}
    <ListaOrdenada />              {/* ESCENARIO 7 */}
    <ListaOrdenadaPorPropiedad />  {/* ESCENARIO 8 */}
    <ListaFiltradaNumeros />       {/* ESCENARIO 9 */}
    <ListaConFiltro />             {/* ESCENARIO 10 */}
    <ListaAsincrona />             {/* ESCENARIO 11 */}
  </>
);

export default EjemplosRenderizadoListas;
