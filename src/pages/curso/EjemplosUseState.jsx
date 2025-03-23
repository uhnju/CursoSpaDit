import React, { useState } from "react";

/********************************************
 * ESCENARIO 1: Contador
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
 * ESCENARIO 2: Toggle de estado
 *******************************************/
// Este escenario usa un estado booleano para alternar entre dos valores posibles:
// "Encendido" y "Apagado". Muy útil para switches, activaciones, toggles de visibilidad, etc.

const Toggle = () => {
  const [isOn, setIsOn] = useState(false);

  return (
    <div>
      <p>Estado: {isOn ? "Encendido" : "Apagado"}</p>
      <button onClick={() => setIsOn(!isOn)}>Alternar</button>
    </div>
  );
};

/********************************************
 * ESCENARIO 3: Input controlado
 *******************************************/
// Aquí se muestra cómo controlar el valor de un input con React.
// A medida que el usuario escribe, el evento `onChange` actualiza el estado `text`,
// que a su vez se refleja en la interfaz. Este patrón se llama "input controlado".

const FormInput = () => {
  const [text, setText] = useState("");

  return (
    <div>
      <input value={text} onChange={(e) => setText(e.target.value)} />
      <p>Escribiste: {text}</p>
    </div>
  );
};

/********************************************
 * ESCENARIO 4: Cambio dinámico de estilo
 *******************************************/
// Utilizando el estado `color`, se puede cambiar dinámicamente el estilo de un elemento,
// en este caso, el color del texto. Es una forma sencilla de introducir la idea de estilos reactivos.

const DynamicStyle = () => {
  const [color, setColor] = useState("black");

  return (
    <div>
      <p style={{ color }}>Este texto cambia de color</p>
      <button onClick={() => setColor(color === "black" ? "red" : "black")}>
        Cambiar Color
      </button>
    </div>
  );
};

/********************************************
 * ESCENARIO 5: Lista de compras
 *******************************************/
// Este componente muestra cómo trabajar con arrays como estado.
// Cada vez que el usuario pulsa el botón, se añade un nuevo ítem a la lista utilizando el operador spread (`...`).
// Es fundamental mostrar que el estado no se modifica directamente, sino que se genera una nueva copia.

const ShoppingList = () => {
  const [items, setItems] = useState([]);

  const addItem = () => {
    setItems([...items, `Item ${items.length + 1}`]);
  };

  return (
    <div>
      <button onClick={addItem}>Añadir ítem</button>
      <ul>
        {items.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
};

/********************************************
 * ESCENARIO 6: Mostrar/Ocultar contenido
 *******************************************/
// Se usa un booleano para mostrar o esconder un bloque de contenido.
// Este patrón se utiliza mucho para desplegables, secciones colapsables, modales, etc.

const VisibilityToggle = () => {
  const [visible, setVisible] = useState(true);

  return (
    <div>
      <button onClick={() => setVisible(!visible)}>Mostrar/Ocultar</button>
      {visible && <p>Este contenido puede ocultarse</p>}
    </div>
  );
};

/********************************************
 * ESCENARIO 7: Generar número aleatorio
 *******************************************/
// Este ejemplo ilustra cómo usar funciones dentro de `setState`.
// Al pulsar el botón, se genera un número aleatorio con `Math.random()`
// y se actualiza el estado `number`, provocando un nuevo render.

const RandomNumber = () => {
  const [number, setNumber] = useState(Math.random());

  return (
    <div>
      <p>Número aleatorio: {number}</p>
      <button onClick={() => setNumber(Math.random())}>Generar</button>
    </div>
  );
};

/********************************************
 * ESCENARIO 8: Botón de "me gusta"
 *******************************************/
// Este componente representa un botón de "me gusta" que aumenta su contador.
// Es similar al contador básico, pero contextualizado a una acción común en aplicaciones sociales.

const LikeButton = () => {
  const [likes, setLikes] = useState(0);

  return (
    <div>
      <button onClick={() => setLikes(likes + 1)}>Me gusta ({likes})</button>
    </div>
  );
};

/********************************************
 * ESCENARIO 9: Contador con pasos
 *******************************************/
// Aquí tenemos dos estados: uno para el valor del contador y otro para definir el paso de incremento.
// Esto permite que el usuario decida de cuánto en cuánto quiere que aumente el contador.

const StepCounter = () => {
  const [count, setCount] = useState(0);
  const [step, setStep] = useState(1);

  return (
    <div>
      <p>Contador: {count}</p>
      <input
        type="number"
        value={step}
        onChange={(e) => setStep(Number(e.target.value))}
      />
      <button onClick={() => setCount(count + step)}>Incrementar</button>
    </div>
  );
};

/********************************************
 * ESCENARIO 10: Formulario con múltiples campos
 *******************************************/
// Este formulario maneja múltiples campos dentro de un único objeto de estado (`formData`).
// Se utiliza la técnica de "spread operator" para mantener las demás propiedades del objeto intactas
// cuando solo se actualiza una de ellas. Es esencial en formularios reales con varios inputs.

const MultiFieldForm = () => {
  const [formData, setFormData] = useState({ name: "", email: "" });

  return (
    <div>
      <input
        type="text"
        placeholder="Nombre"
        value={formData.name}
        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
      />
      <input
        type="email"
        placeholder="Email"
        value={formData.email}
        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
      />
      <p>Nombre: {formData.name}, Email: {formData.email}</p>
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

      <Counter />              {/* ESCENARIO 1: Contador */}
      <Toggle />               {/* ESCENARIO 2: Toggle de estado */}
      <FormInput />            {/* ESCENARIO 3: Input controlado */}
      <DynamicStyle />         {/* ESCENARIO 4: Cambio dinámico de estilo */}
      <ShoppingList />         {/* ESCENARIO 5: Lista de compras */}
      <VisibilityToggle />     {/* ESCENARIO 6: Mostrar/Ocultar contenido */}
      <RandomNumber />         {/* ESCENARIO 7: Generar número aleatorio */}
      <LikeButton />           {/* ESCENARIO 8: Botón de "me gusta" */}
      <StepCounter />          {/* ESCENARIO 9: Contador con pasos */}
      <MultiFieldForm />       {/* ESCENARIO 10: Formulario con múltiples campos */}
    </div>
  );
};

export default EjemplosUseState;
