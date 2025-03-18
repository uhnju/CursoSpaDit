import React, { useState } from "react";

// 1. Contador
const Counter = () => {
  const [count, setCount] = useState(0);
  return (
    <div>
      <p>Contador: {count}</p>
      <button onClick={() => setCount(count + 1)}>Incrementar</button>
    </div>
  );
};

// 2. Toggle de estado
const Toggle = () => {
  const [isOn, setIsOn] = useState(false);
  return (
    <div>
      <p>Estado: {isOn ? "Encendido" : "Apagado"}</p>
      <button onClick={() => setIsOn(!isOn)}>Alternar</button>
    </div>
  );
};

// 3. Input controlado
const FormInput = () => {
  const [text, setText] = useState("");
  return (
    <div>
      <input value={text} onChange={(e) => setText(e.target.value)} />
      <p>Escribiste: {text}</p>
    </div>
  );
};

// 4. Cambio dinámico de estilo
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

// 5. Lista de compras
const ShoppingList = () => {
  const [items, setItems] = useState([]);
  const addItem = () => setItems([...items, `Item ${items.length + 1}`]);
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

// 6. Mostrar/Ocultar contenido
const VisibilityToggle = () => {
  const [visible, setVisible] = useState(true);
  return (
    <div>
      <button onClick={() => setVisible(!visible)}>Mostrar/Ocultar</button>
      {visible && <p>Este contenido puede ocultarse</p>}
    </div>
  );
};

// 7. Generar número aleatorio
const RandomNumber = () => {
  const [number, setNumber] = useState(Math.random());
  return (
    <div>
      <p>Número aleatorio: {number}</p>
      <button onClick={() => setNumber(Math.random())}>Generar</button>
    </div>
  );
};

// 8. Botón de "me gusta"
const LikeButton = () => {
  const [likes, setLikes] = useState(0);
  return (
    <div>
      <button onClick={() => setLikes(likes + 1)}>Me gusta ({likes})</button>
    </div>
  );
};

// 9. Contador con pasos
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

// 10. Formulario con múltiples campos
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

const EjemplosUseState = () => {
  return (
    <div className="p-6 space-y-6">
      <h1 className="text-2xl font-bold">Ejemplos de useState en React</h1>
      <Counter />
      <Toggle />
      <FormInput />
      <DynamicStyle />
      <ShoppingList />
      <VisibilityToggle />
      <RandomNumber />
      <LikeButton />
      <StepCounter />
      <MultiFieldForm />
    </div>
  );
};

export default EjemplosUseState;
