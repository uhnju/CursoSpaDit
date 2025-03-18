import { useState } from "react";

// ✅ 1️⃣ Renderizar una lista de elementos
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

// ✅ 2️⃣ Renderizar una lista de objetos
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

// ✅ 3️⃣ Renderizar una lista con condición
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

// ✅ 4️⃣ Lista con botón para agregar elementos dinámicamente
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

// ✅ 5️⃣ Lista con botón para eliminar elementos
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

// ✅ 6️⃣ Renderizar una lista con índices alternos resaltados
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

// ✅ 7️⃣ Ordenar una lista antes de renderizarla
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

// ✅ 8️⃣ Renderizar una lista de números con filtrado
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

// ✅ 9️⃣ Renderizar una lista con búsqueda
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

// ✅ 🔟 Renderizar una lista con una operación asíncrona (fetch)
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
      {loading ? <p>Cargando...</p> : <ul>{data.map((item) => <li key={item.id}>{item.title}</li>)}</ul>}
    </div>
  );
};

// ✅ Componente principal con todos los ejemplos
const EjemplosRenderizadoListas = () => (
  <div style={{ padding: "20px", fontFamily: "Arial, sans-serif" }}>
    <h2>📘 10 Escenarios Útiles de Renderizado de Listas en React</h2>
    <SimpleList />
    <ObjectList />
    <ConditionalList />
    <DynamicList />
    <RemovableList />
    <StyledList />
    <SortedList />
    <FilteredList />
    <SearchableList />
    <AsyncList />
  </div>
);

export default EjemplosRenderizadoListas;
