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
 * ESCENARIO 4: Estilos condicionales por índice
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
 * ESCENARIO 5: Lista dinámica (añadir elementos)
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
 * ESCENARIO 6: Lista con opción de eliminar
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
 * ESCENARIO 8: Lista con ordenación
 *******************************************/
// Este ejemplo muestra cómo ordenar una lista basado en una propiedad.
// Es útil cuando necesitas mostrar los elementos en un orden específico.

const SortedListExample = () => {
 const fruits = [
  { name: "Manzana", price: 1.5 },
  { name: "Banana", price: 0.5 },
  { name: "Naranja", price: 1.0 },
 ];

 // const sortedFruits = fruits.sort((a, b) => a.price - b.price);
 const sortedFruits = fruits.toSorted((a, b) => a.price - b.price);

 return (
  <ul>
   {sortedFruits.map((fruit, index) => (
    <li key={index}>
     {fruit.name} - ${fruit.price}
    </li>
   ))}
  </ul>
 );
};


/********************************************
 * ESCENARIO 9: Filtrado de una lista (números pares)
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
 * ESCENARIO 10: Lista con filtrado
 *******************************************/
// Este ejemplo muestra cómo filtrar una lista basado en una condición.
// Es útil cuando necesitas mostrar solo ciertos elementos de la lista.

const FilteredListExample = () => {
 const fruits = ["Manzana", "Banana", "Naranja", "Uva", "Kiwi"];
 const [filter, setFilter] = useState("");

 const filteredFruits = fruits.filter((fruit) =>
  fruit.toLowerCase().includes(filter.toLowerCase())
 );

 return (
  <div>
   <input
    type="text"
    value={filter}
    onChange={(e) => setFilter(e.target.value)}
    placeholder="Filtrar frutas"
   />
   <ul>
    {filteredFruits.map((fruit, index) => (
     <li key={index}>{fruit}</li>
    ))}
   </ul>
  </div>
 );
};

/********************************************
 * ESCENARIO 11: Lista con datos asíncronos (fetch)
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
  <SimpleList />     {/* ESCENARIO 1: Lista simple */}
  <ObjectList />     {/* ESCENARIO 2: Lista de objetos */}
  <ConditionalList />  {/* ESCENARIO 3: Lista condicional */}
  <StyledList />     {/* ESCENARIO 4: Estilos condicionales */}
  <DynamicList />    {/* ESCENARIO 5: Lista dinámica (añadir elementos) */}
  <RemovableList />   {/* ESCENARIO 6: Lista con opción de eliminar */}
  <SortedList />     {/* ESCENARIO 7: Lista ordenada */}
  <SortedListExample /> {/* ESCENARIO 8: Lista con ordenación */}
  <FilteredList />    {/* ESCENARIO 9: Filtrado de una lista (números pares) */}
  <FilteredListExample /> {/* ESCENARIO 10: Lista con campo de filtro */}
  <AsyncList />     {/* ESCENARIO 11: Cargar lista con fetch */}
 </div>
);
export default EjemplosRenderizadoListas;

