import React, { useState } from "react";

/********************************************
 * ESCENARIO 1: Renderizado básico de una lista
 *******************************************/
// Este ejemplo muestra cómo renderizar una lista básica usando `map`.
// Es útil cuando tienes un array de datos y quieres mostrar cada elemento en la interfaz.

const BasicListExample = () => {
  const items = ["Manzana", "Banana", "Naranja", "Uva"];

  return (
    <ul>
      {items.map((item, index) => (
        <li key={index}>{item}</li>
      ))}
    </ul>
  );
};

/********************************************
 * ESCENARIO 2: Lista con objetos
 *******************************************/
// Este ejemplo muestra cómo renderizar una lista de objetos.
// Es útil cuando tus datos son más complejos y tienen múltiples propiedades.

const ObjectListExample = () => {
  const fruits = [
    { id: 1, name: "Manzana", color: "Rojo" },
    { id: 2, name: "Banana", color: "Amarillo" },
    { id: 3, name: "Naranja", color: "Naranja" },
  ];

  return (
    <ul>
      {fruits.map((fruit) => (
        <li key={fruit.id}>
          {fruit.name} - {fruit.color}
        </li>
      ))}
    </ul>
  );
};

/********************************************
 * ESCENARIO 3: Lista con botones interactivos
 *******************************************/
// Este ejemplo muestra cómo renderizar una lista con botones interactivos.
// Es útil cuando necesitas agregar funcionalidad a cada elemento de la lista.

const InteractiveListExample = () => {
  const [items, setItems] = useState(["Manzana", "Banana", "Naranja"]);

  const removeItem = (index) => {
    const newItems = items.filter((_, i) => i !== index);
    setItems(newItems);
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
 * ESCENARIO 4: Lista con filtrado
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
 * ESCENARIO 5: Lista con ordenación
 *******************************************/
// Este ejemplo muestra cómo ordenar una lista basado en una propiedad.
// Es útil cuando necesitas mostrar los elementos en un orden específico.

const SortedListExample = () => {
  const fruits = [
    { name: "Manzana", price: 1.5 },
    { name: "Banana", price: 0.5 },
    { name: "Naranja", price: 1.0 },
  ];

  const sortedFruits = fruits.sort((a, b) => a.price - b.price);

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
 * ESCENARIO 6: Lista con paginación
 *******************************************/
// Este ejemplo muestra cómo implementar paginación en una lista.
// Es útil cuando tienes una lista larga y quieres dividirla en páginas.

const PaginatedListExample = () => {
  const items = Array.from({ length: 50 }, (_, i) => `Item ${i + 1}`);
  const [page, setPage] = useState(0);
  const itemsPerPage = 10;

  const paginatedItems = items.slice(page * itemsPerPage, (page + 1) * itemsPerPage);

  return (
    <div>
      <ul>
        {paginatedItems.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
      <button onClick={() => setPage(page - 1)} disabled={page === 0}>
        Anterior
      </button>
      <button
        onClick={() => setPage(page + 1)}
        disabled={(page + 1) * itemsPerPage >= items.length}
      >
        Siguiente
      </button>
    </div>
  );
};

/********************************************
 * ESCENARIO 7: Lista con carga dinámica
 *******************************************/
// Este ejemplo muestra cómo cargar más elementos en una lista dinámicamente.
// Es útil cuando tienes una lista larga y quieres cargar más elementos bajo demanda.

const DynamicLoadListExample = () => {
  const [items, setItems] = useState(Array.from({ length: 10 }, (_, i) => `Item ${i + 1}`));
  const [loading, setLoading] = useState(false);

  const loadMore = () => {
    setLoading(true);
    setTimeout(() => {
      const newItems = Array.from({ length: 10 }, (_, i) => `Item ${items.length + i + 1}`);
      setItems([...items, ...newItems]);
      setLoading(false);
    }, 1000);
  };

  return (
    <div>
      <ul>
        {items.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
      {loading ? (
        <p>Cargando...</p>
      ) : (
        <button onClick={loadMore}>Cargar más</button>
      )}
    </div>
  );
};

/********************************************
 * ESCENARIO 8: Lista con selección múltiple
 *******************************************/
// Este ejemplo muestra cómo manejar la selección múltiple en una lista.
// Es útil cuando necesitas que el usuario seleccione varios elementos de la lista.

const MultiSelectListExample = () => {
  const items = ["Manzana", "Banana", "Naranja", "Uva"];
  const [selectedItems, setSelectedItems] = useState([]);

  const toggleItem = (item) => {
    if (selectedItems.includes(item)) {
      setSelectedItems(selectedItems.filter((selected) => selected !== item));
    } else {
      setSelectedItems([...selectedItems, item]);
    }
  };

  return (
    <div>
      <ul>
        {items.map((item, index) => (
          <li key={index}>
            <label>
              <input
                type="checkbox"
                checked={selectedItems.includes(item)}
                onChange={() => toggleItem(item)}
              />
              {item}
            </label>
          </li>
        ))}
      </ul>
      <p>Seleccionados: {selectedItems.join(", ")}</p>
    </div>
  );
};

/********************************************
 * ESCENARIO 9: Lista con arrastrar y soltar (Drag and Drop)
 *******************************************/
// Este ejemplo muestra cómo implementar arrastrar y soltar en una lista.
// Es útil cuando necesitas que el usuario reordene los elementos de la lista.

const DragAndDropListExample = () => {
  const [items, setItems] = useState(["Manzana", "Banana", "Naranja", "Uva"]);

  const handleDragStart = (e, index) => {
    e.dataTransfer.setData("index", index);
  };

  const handleDrop = (e, newIndex) => {
    const oldIndex = e.dataTransfer.getData("index");
    const newItems = [...items];
    const [removed] = newItems.splice(oldIndex, 1);
    newItems.splice(newIndex, 0, removed);
    setItems(newItems);
  };

  return (
    <ul>
      {items.map((item, index) => (
        <li
          key={index}
          draggable
          onDragStart={(e) => handleDragStart(e, index)}
          onDrop={(e) => handleDrop(e, index)}
          onDragOver={(e) => e.preventDefault()}
        >
          {item}
        </li>
      ))}
    </ul>
  );
};

/********************************************
 * ESCENARIO 10: Lista con virtualización
 *******************************************/
// Este ejemplo muestra cómo implementar una lista virtualizada.
// Es útil cuando tienes una lista muy larga y quieres mejorar el rendimiento.

const VirtualizedListExample = () => {
  const items = Array.from({ length: 1000 }, (_, i) => `Item ${i + 1}`);
  const [visibleItems, setVisibleItems] = useState(items.slice(0, 20));
  const [scrollTop, setScrollTop] = useState(0);

  const handleScroll = (e) => {
    const { scrollTop, clientHeight, scrollHeight } = e.target;
    const startIndex = Math.floor((scrollTop / scrollHeight) * items.length);
    const endIndex = startIndex + 20;
    setVisibleItems(items.slice(startIndex, endIndex));
    setScrollTop(scrollTop);
  };

  return (
    <div
      style={{ height: "200px", overflowY: "scroll", border: "1px solid #ccc" }}
      onScroll={handleScroll}
    >
      <ul style={{ height: `${items.length * 20}px`, position: "relative" }}>
        {visibleItems.map((item, index) => (
          <li
            key={index}
            style={{
              position: "absolute",
              top: `${(scrollTop + index * 20)}px`,
              height: "20px",
            }}
          >
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
};

/********************************************
 * COMPONENTE PRINCIPAL: Muestra todos los escenarios
 *******************************************/
// Este componente centraliza todos los ejemplos para que el profesor pueda
// mostrarlos uno por uno en una única vista. Cada uno está comentado con su número y título.

const EjemplosRenderizadoListas = () => {
  return (
    <div className="p-6 space-y-6">
      <h1 className="text-2xl font-bold">Ejemplos de Renderizado de Listas en React</h1>

      <BasicListExample />              {/* ESCENARIO 1: Renderizado básico de una lista */}
      <ObjectListExample />             {/* ESCENARIO 2: Lista con objetos */}
      <InteractiveListExample />        {/* ESCENARIO 3: Lista con botones interactivos */}
      <FilteredListExample />           {/* ESCENARIO 4: Lista con filtrado */}
      <SortedListExample />             {/* ESCENARIO 5: Lista con ordenación */}
      <PaginatedListExample />          {/* ESCENARIO 6: Lista con paginación */}
      <DynamicLoadListExample />        {/* ESCENARIO 7: Lista con carga dinámica */}
      <MultiSelectListExample />        {/* ESCENARIO 8: Lista con selección múltiple */}
      <DragAndDropListExample />        {/* ESCENARIO 9: Lista con arrastrar y soltar */}
      <VirtualizedListExample />        {/* ESCENARIO 10: Lista con virtualización */}
    </div>
  );
};

export default EjemplosRenderizadoListas;