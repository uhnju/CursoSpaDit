import { useState, useRef } from "react";

// ✅ 1️⃣ Manejar eventos de clic
const ClickEvent = () => {
  const handleClick = () => alert("¡Botón clickeado!");

  return <button onClick={handleClick}>Haz clic aquí</button>;
};

// ✅ 2️⃣ Manejar eventos de cambio en un input
const InputChangeEvent = () => {
  const [text, setText] = useState("");

  return (
    <div>
      <input type="text" value={text} onChange={(e) => setText(e.target.value)} placeholder="Escribe algo..." />
      <p>Texto: {text}</p>
    </div>
  );
};

// ✅ 3️⃣ Manejar eventos de formulario (submit)
const FormSubmitEvent = () => {
  const [name, setName] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Formulario enviado con nombre: ${name}`);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" value={name} onChange={(e) => setName(e.target.value)} placeholder="Nombre" />
      <button type="submit">Enviar</button>
    </form>
  );
};

// ✅ 4️⃣ Manejar eventos de teclado
const KeyPressEvent = () => {
  const handleKeyPress = (e) => alert(`Tecla presionada: ${e.key}`);

  return <input type="text" placeholder="Presiona una tecla" onKeyDown={handleKeyPress} />;
};

// ✅ 5️⃣ Manejar eventos de doble clic
const DoubleClickEvent = () => {
  const handleDoubleClick = () => alert("¡Doble clic detectado!");

  return <button onDoubleClick={handleDoubleClick}>Haz doble clic aquí</button>;
};

// ✅ 6️⃣ Manejar eventos de enfoque y desenfoque
const FocusBlurEvent = () => {
  const handleFocus = () => console.log("Input enfocado");
  const handleBlur = () => console.log("Input desenfocado");

  return <input type="text" placeholder="Enfócate aquí" onFocus={handleFocus} onBlur={handleBlur} />;
};

// ✅ 7️⃣ Manejar eventos de cambio en un select
const SelectChangeEvent = () => {
  const [selected, setSelected] = useState("");

  return (
    <div>
      <select value={selected} onChange={(e) => setSelected(e.target.value)}>
        <option value="">Selecciona una opción</option>
        <option value="opcion1">Opción 1</option>
        <option value="opcion2">Opción 2</option>
      </select>
      <p>Opción seleccionada: {selected}</p>
    </div>
  );
};

// ✅ 8️⃣ Manejar eventos de mouse (hover y leave)
const MouseOverEvent = () => {
  const handleMouseOver = () => console.log("Mouse sobre el botón");
  const handleMouseLeave = () => console.log("Mouse salió del botón");

  return <button onMouseOver={handleMouseOver} onMouseLeave={handleMouseLeave}>Pasa el mouse aquí</button>;
};

// ✅ 9️⃣ Manejar eventos de scroll
const ScrollEvent = () => {
  const handleScroll = () => console.log("Scrolling...");

  return (
    <div onScroll={handleScroll} style={{ height: "100px", overflow: "auto", border: "1px solid black" }}>
      <div style={{ height: "200px" }}>Desplázate dentro de este cuadro</div>
    </div>
  );
};

// ✅ 🔟 Manejar eventos de copiar y pegar
const CopyPasteEvent = () => {
  const handleCopy = () => alert("¡Texto copiado!");
  const handlePaste = () => alert("¡Texto pegado!");

  return <input type="text" placeholder="Copia/Pega aquí" onCopy={handleCopy} onPaste={handlePaste} />;
};

// ✅ Componente principal con todos los ejemplos
const EjemplosEventos = () => (
  <div style={{ padding: "20px", fontFamily: "Arial, sans-serif" }}>
    <h2>📘 10 Escenarios Útiles de Manejo de Eventos en React</h2>
    <ClickEvent />
    <InputChangeEvent />
    <FormSubmitEvent />
    <KeyPressEvent />
    <DoubleClickEvent />
    <FocusBlurEvent />
    <SelectChangeEvent />
    <MouseOverEvent />
    <ScrollEvent />
    <CopyPasteEvent />
  </div>
);

export default EjemplosEventos;
