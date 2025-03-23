import React, { useState } from "react";

/********************************************
 * ESCENARIO 1: Contador básico
 *******************************************/
// Este ejemplo es el clásico contador que incrementa su valor al hacer clic en un botón.
// Se inicializa un estado `count` con valor 0, y cada vez que el usuario pulsa el botón,
// se actualiza este estado sumando 1. Es ideal para introducir `useState` y mostrar
// cómo React renderiza automáticamente cuando el estado cambia.

const Counter = () => {
  const [count, setCount] = useState(0);

  return (
    <div>
      <p>Contador: {count}</p>
      <button onClick={() => setCount(count + 1)}>Incrementar</button>
    </div>
  );
};

/********************************************
 * ESCENARIO 2: Input controlado
 *******************************************/
// Aquí se muestra cómo controlar el valor de un input con React.
// A medida que el usuario escribe, el evento `onChange` actualiza el estado `text`,
// que a su vez se refleja en la interfaz. Este patrón se llama "input controlado".

const ControlledInput = () => {
  const [inputValue, setInputValue] = useState("");

  return (
    <div>
      <input
        type="text"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
      />
      <p>Valor del input: {inputValue}</p>
    </div>
  );
};

/********************************************
 * ESCENARIO 3: Mostrar/Ocultar elemento
 *******************************************/
// Se usa un booleano para mostrar o esconder un bloque de contenido.
// Este patrón se utiliza mucho para desplegables, secciones colapsables, modales, etc.

const ToggleVisibility = () => {
  const [isVisible, setIsVisible] = useState(true);

  return (
    <div>
      {isVisible && <p>¡Este elemento es visible!</p>}
      <button onClick={() => setIsVisible(!isVisible)}>
        {isVisible ? "Ocultar" : "Mostrar"}
      </button>
    </div>
  );
};

/********************************************
 * ESCENARIO 4: Lista de tareas
 *******************************************/
// Este componente muestra cómo trabajar con arrays como estado.
// Cada vez que el usuario pulsa el botón, se añade un nuevo ítem a la lista utilizando el operador spread (`...`).
// Es fundamental mostrar que el estado no se modifica directamente, sino que se genera una nueva copia.

const TodoList = () => {
  const [todos, setTodos] = useState([]);
  const [newTodo, setNewTodo] = useState("");

  const addTodo = () => {
    setTodos([...todos, newTodo]);
    setNewTodo("");
  };

  return (
    <div>
      <input
        type="text"
        value={newTodo}
        onChange={(e) => setNewTodo(e.target.value)}
      />
      <button onClick={addTodo}>Añadir tarea</button>
      <ul>
        {todos.map((todo, index) => (
          <li key={index}>{todo}</li>
        ))}
      </ul>
    </div>
  );
};

/********************************************
 * ESCENARIO 5: Contador con valor inicial
 *******************************************/
// useState puede recibir un valor inicial. En este caso, el contador
// comienza en 10 en lugar de 0.

const CounterWithInitialValue = ({ initialValue }) => {
  const [count, setCount] = useState(initialValue);

  return (
    <div>
      <p>Contador: {count}</p>
      <button onClick={() => setCount(count + 1)}>Incrementar</button>
    </div>
  );
};

/********************************************
 * ESCENARIO 6: Formulario con múltiples campos
 *******************************************/
// Este formulario maneja múltiples campos dentro de un único objeto de estado (`formData`).
// Se utiliza la técnica de "spread operator" para mantener las demás propiedades del objeto intactas
// cuando solo se actualiza una de ellas. Es esencial en formularios reales con varios inputs.

const MultiFieldForm = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    age: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({
      ...form,
      [name]: value,
    });
  };

  return (
    <div>
      <input
        type="text"
        name="name"
        value={form.name}
        onChange={handleChange}
        placeholder="Nombre"
      />
      <input
        type="email"
        name="email"
        value={form.email}
        onChange={handleChange}
        placeholder="Email"
      />
      <input
        type="number"
        name="age"
        value={form.age}
        onChange={handleChange}
        placeholder="Edad"
      />
      <p>Nombre: {form.name}</p>
      <p>Email: {form.email}</p>
      <p>Edad: {form.age}</p>
    </div>
  );
};

/********************************************
 * ESCENARIO 7: Select con opciones
 *******************************************/
// Aquí usamos useState para controlar la opción seleccionada en un elemento <select>.
// El estado se actualiza cada vez que el usuario selecciona una opción diferente.

const SelectOptions = () => {
  const [selectedOption, setSelectedOption] = useState("opcion1");

  return (
    <div>
      <select
        value={selectedOption}
        onChange={(e) => setSelectedOption(e.target.value)}
      >
        <option value="opcion1">Opción 1</option>
        <option value="opcion2">Opción 2</option>
        <option value="opcion3">Opción 3</option>
      </select>
      <p>Opción seleccionada: {selectedOption}</p>
    </div>
  );
};

/********************************************
 * ESCENARIO 8: Contador con incremento personalizado
 *******************************************/
// En este escenario, el contador aumenta en una cantidad personalizada
// (en este caso, 5) cada vez que se hace clic en el botón.

const CustomIncrementCounter = () => {
  const [count, setCount] = useState(0);

  return (
    <div>
      <p>Contador: {count}</p>
      <button onClick={() => setCount(count + 5)}>Incrementar en 5</button>
    </div>
  );
};

/********************************************
 * ESCENARIO 9: Temporizador simple
 *******************************************/
// Usamos useState junto con useEffect para crear un temporizador que
// aumenta cada segundo. El estado almacena el tiempo transcurrido.

const SimpleTimer = () => {
  const [time, setTime] = useState(0);

  React.useEffect(() => {
    const interval = setInterval(() => {
      setTime((prevTime) => prevTime + 1);
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div>
      <p>Tiempo transcurrido: {time} segundos</p>
    </div>
  );
};

/********************************************
 * ESCENARIO 10: Contador con límite
 *******************************************/
// Aquí el contador tiene un límite superior. Cuando el contador alcanza
// el límite, no se puede incrementar más.

const LimitedCounter = () => {
  const [count, setCount] = useState(0);
  const limit = 10;

  return (
    <div>
      <p>Contador: {count}</p>
      <button
        onClick={() => setCount(count + 1)}
        disabled={count >= limit}
      >
        Incrementar
      </button>
      {count >= limit && <p>¡Límite alcanzado!</p>}
    </div>
  );
};

/********************************************
 * COMPONENTE PRINCIPAL: Muestra todos los escenarios
 *******************************************/
// Este componente centraliza todos los ejemplos para que el profesor pueda
// mostrarlos uno por uno en una única vista. Cada uno está comentado con su número y título.

const EjemplosUseState = () => {
  return (
    <div className="p-6 space-y-6">
      <h1 className="text-2xl font-bold">Ejemplos de useState en React</h1>

      <Counter />                      {/* ESCENARIO 1: Contador básico */}
      <ControlledInput />             {/* ESCENARIO 2: Input controlado */}
      <ToggleVisibility />             {/* ESCENARIO 3: Mostrar/Ocultar elemento */}
      <TodoList />                    {/* ESCENARIO 4: Lista de tareas */}
      <CounterWithInitialValue initialValue={10} /> {/* ESCENARIO 5: Contador con valor inicial */}
      <MultiFieldForm />              {/* ESCENARIO 6: Formulario con múltiples campos */}
      <SelectOptions />                {/* ESCENARIO 7: Select con opciones */}
      <CustomIncrementCounter />       {/* ESCENARIO 8: Contador con incremento personalizado */}
      <SimpleTimer />                  {/* ESCENARIO 9: Temporizador simple */}
      <LimitedCounter />               {/* ESCENARIO 10: Contador con límite */}
    </div>
  );
};

export default EjemplosUseState;