import React, { useState, useRef } from "react";

const ArrayMethodsExample4useRef = () => {
  const [numbers, setNumbers] = useState([1, 2, 3, 4, 5]);
  const [people, setPeople] = useState([
    { name: "Alice", age: 25 },
    { name: "Bob", age: 30 },
    { name: "Charlie", age: 35 },
    { name: "David", age: 40 }
  ]);

  const numberInputRef = useRef(null);
  const nameInputRef = useRef(null);
  const ageInputRef = useRef(null);

  const addNumber = () => {
    const newNumber = numberInputRef.current.value;
    if (newNumber) {
      setNumbers([...numbers, Number(newNumber)]);
      numberInputRef.current.value = "";
    }
  };

  const removeNumber = (index) => {
    setNumbers(numbers.filter((_, i) => i !== index));
  };

  const addPerson = () => {
    const name = nameInputRef.current.value;
    const age = ageInputRef.current.value;
    if (name && age) {
      setPeople([...people, { name, age: Number(age) }]);
      nameInputRef.current.value = "";
      ageInputRef.current.value = "";
    }
  };

  const removePerson = (index) => {
    setPeople(people.filter((_, i) => i !== index));
  };

  return (
    <div className="p-4 space-y-4">
      <h1 className="text-xl font-bold">Ejemplos de Métodos de Arrays en React</h1>

      <div>
        <h2 className="text-lg font-semibold">Agregar Número</h2>
        <input 
          type="number" 
          ref={numberInputRef} 
          className="border p-2 mr-2" 
        />
        <button onClick={addNumber} className="bg-blue-500 text-white p-2">Añadir</button>
      </div>

      <div>
        <h2 className="text-lg font-semibold">Agregar Persona</h2>
        <input 
          type="text" 
          placeholder="Nombre" 
          ref={nameInputRef} 
          className="border p-2 mr-2" 
        />
        <input 
          type="number" 
          placeholder="Edad" 
          ref={ageInputRef} 
          className="border p-2 mr-2" 
        />
        <button onClick={addPerson} className="bg-green-500 text-white p-2">Añadir</button>
      </div>

      <div>
        <h2 className="text-lg font-semibold">Original Numbers</h2>
        <ul>
          {numbers.map((num, index) => (
            <li key={index} className="flex justify-between">
              {num} 
              <button onClick={() => removeNumber(index)} className="bg-red-500 text-white p-1 ml-2">Eliminar</button>
            </li>
          ))}
        </ul>
      </div>
      
      <div>
        <h2 className="text-lg font-semibold">People</h2>
        <ul>
          {people.map((person, index) => (
            <li key={index} className="flex justify-between">
              {person.name} - {person.age} 
              <button onClick={() => removePerson(index)} className="bg-red-500 text-white p-1 ml-2">Eliminar</button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default ArrayMethodsExample4useRef;
