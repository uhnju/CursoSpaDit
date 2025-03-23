import React, { useState } from "react";

/********************************************
 * ESCENARIO 1: Lista simple de strings
 *******************************************/
// Este ejemplo muestra una lista básica de elementos tipo string.
// Se usa `map` para recorrer el array y generar un <li> por cada elemento.

const SimpleList = () => {
  const items = ["Manzana", "Banana", "Cereza", "Durazno"];

  return (
    <ul>
      {items.map((item, index) => (
        <li key={index}>{item}</li>
      ))}
    </ul>
  );
};

/********************************************
 * ESCENARIO 2: Lista de objetos
 *******************************************/
// En este caso renderizamos una lista de usuarios (objetos).
// Se recomienda usar una propiedad única (como `id`) como `key` en el mapeo.

const ObjectList = () => {
  const users = [
    { id: 1, name: "Juan" },
    { id: 2, name: "María" },
    { id: 3, name: "Carlos" },
  ];

  return (
    <ul>
      {users.map((user) => (
        <li key={user.id}>{user.name}</li>
      ))}
    </ul>
  );
};

/********************************************
 * ESCENARIO 3: Lista condicional
 *******************************************/
// Este ejemplo muestra una lista solo si contiene elementos.
// Si el array está vacío, se muestra un mensaje alternativo.

const ConditionalList = () => {
  const items = ["Elemento 1", "Elemento 2", "Elemento 3"];

  return (
    <div>
      {items.length > 0 ? (
        <ul>
          {items.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      ) : (
        <p>No hay elementos en la lista</p>
      )}
    </div>
  );
};

/********************************************
 * ESCENARIO 4: Lista dinámica (añadir elementos)
 *******************************************/
// Se puede agregar elementos dinámicamente al hacer clic en un botón.
// Se utiliza el operador spread (`...`) para añadir nuevos valores al array.

const DynamicList = () => {
  const [items, setItems] = useState(["Elemento 1"]);

  const addItem = () => {
    setItems([...items, `Elemento ${items.length + 1}`]);
  };

  return (
    <div>
      <button onClick={addItem}>Agregar Elemento</button>
      <ul>
        {items.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
};

/********************************************
 * ESCENARIO 5: Lista con opción de eliminar
 *******************************************/
// Se muestra cómo eliminar elementos individuales de una lista.
// Cada botón elimina el elemento correspondiente al índice que representa.

const RemovableList = () => {
  const [items, setItems] = useState(["Elemento 1", "Elemento 2", "Elemento 3"]);

  const removeItem = (index) => {
    setItems(items.filter((_, i) => i !== index));
  };

  return (
    <ul>
      {items.map((item, index) => (
        <li key={index}>
          {item} <button onClick={() => removeItem(index)}>Eliminar</button>
        </li>
      ))}
    </ul>
  );
};

/********************************************
 * ESCENARIO 6: Estilos condicionales por índice
 *******************************************/
// Aquí alternamos el estilo de cada elemento según su posición en la lista.
// En este caso, los elementos en posiciones pares se muestran en negrita.

const StyledList = () => {
  const items = ["Manzana", "Pera", "Uva", "Mango", "Naranja"];

  return (
    <ul>
      {items.map((item, index) => (
        <li key={index} style={{ fontWeight: index % 2 === 0 ? "bold" : "normal" }}>
          {item}
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

const SortedList = () => {
  const items = ["Manzana", "Banana", "Cereza", "Durazno"];

  return (
    <ul>
      {items
        .slice()
        .sort()
        .map((item, index) => (
          <li key={index}>{item}</li>
        ))}
    </ul>
  );
};

/********************************************
 * ESCENARIO 8: Filtrado de una lista (números pares)
 *******************************************/
// Este componente filtra los elementos del array original antes de mostrarlos.
// Solo se renderizan los números pares mediante `filter`.

const FilteredList = () => {
  const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];

  return (
    <ul>
      {numbers
        .filter((num) => num % 2 === 0)
        .map((num, index) => (
          <li key={index}>{num}</li>
        ))}
    </ul>
  );
};

/********************************************
 * ESCENARIO 9: Lista con campo de búsqueda
 *******************************************/
// Permite al usuario escribir en un input para buscar entre los elementos de la lista.
// Se usa `includes()` para hacer coincidencias parciales ignorando mayúsculas/minúsculas.

const SearchableList = () => {
  const items = ["Manzana", "Banana", "Cereza", "Durazno", "Kiwi"];
  const [search, setSearch] = useState("");

  return (
    <div>
      <input
        type="text"
        placeholder="Buscar..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      <ul>
        {items
          .filter((item) => item.toLowerCase().includes(search.toLowerCase()))
          .map((item, index) => (
            <li key={index}>{item}</li>
          ))}
      </ul>
    </div>
  );
};

/********************************************
 * ESCENARIO 10: Lista con datos asíncronos (fetch)
 *******************************************/
// Se simula una llamada a una API para obtener una lista de tareas.
// Se usa `useState` para manejar tanto los datos como el estado de carga (`loading`).

const AsyncList = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);

  const fetchData = async () => {
    setLoading(true);
    const response = await fetch("https://jsonplaceholder.typicode.com/todos?_limit=5");
    const result = await response.json();
    setData(result);
    setLoading(false);
  };

  return (
    <div>
      <button onClick={fetchData}>Cargar Datos</button>
      {loading ? (
        <p>Cargando...</p>
      ) : (
        <ul>{data.map((item) => <li key={item.id}>{item.title}</li>)}</ul>
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
  <div className="p-6 space-y-6">
    <h1 className="text-2xl font-bold">Ejemplos de renderizado de listas en React</h1>

    <SimpleList />          {/* ESCENARIO 1: Lista simple */}
    <ObjectList />          {/* ESCENARIO 2: Lista de objetos */}
    <ConditionalList />     {/* ESCENARIO 3: Lista condicional */}
    <DynamicList />         {/* ESCENARIO 4: Añadir elementos */}
    <RemovableList />       {/* ESCENARIO 5: Eliminar elementos */}
    <StyledList />          {/* ESCENARIO 6: Estilos condicionales */}
    <SortedList />          {/* ESCENARIO 7: Lista ordenada */}
    <FilteredList />        {/* ESCENARIO 8: Números pares */}
    <SearchableList />      {/* ESCENARIO 9: Buscar en lista */}
    <AsyncList />           {/* ESCENARIO 10: Cargar lista con fetch */}
  </div>
);

export default EjemplosRenderizadoListas;
