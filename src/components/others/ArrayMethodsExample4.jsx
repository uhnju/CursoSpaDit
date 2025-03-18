import React, { useState } from "react";

const ArrayMethodsExample4 = () => {
  const [numbers, setNumbers] = useState([1, 2, 3, 4, 5]);
  const [people, setPeople] = useState([
    { name: "Alice", age: 25 },
    { name: "Bob", age: 30 },
    { name: "Charlie", age: 35 },
    { name: "David", age: 40 }
  ]);

  const [newNumber, setNewNumber] = useState("");
  const [newPerson, setNewPerson] = useState({ name: "", age: "" });

  const addNumber = () => {
    if (newNumber) {
      setNumbers([...numbers, Number(newNumber)]);
      setNewNumber("");
    }
  };

  const removeNumber = (index) => {
    setNumbers(numbers.filter((_, i) => i !== index));
  };

  const addPerson = () => {
    if (newPerson.name && newPerson.age) {
      setPeople([...people, { name: newPerson.name, age: Number(newPerson.age) }]);
      setNewPerson({ name: "", age: "" });
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
          value={newNumber} 
          onChange={(e) => setNewNumber(e.target.value)} 
          className="border p-2 mr-2" 
        />
        <button onClick={addNumber} className="bg-blue-500 text-white p-2">Añadir</button>
      </div>

      <div>
        <h2 className="text-lg font-semibold">Agregar Persona</h2>
        <input 
          type="text" 
          placeholder="Nombre" 
          value={newPerson.name} 
          onChange={(e) => setNewPerson({ ...newPerson, name: e.target.value })} 
          className="border p-2 mr-2" 
        />
        <input 
          type="number" 
          placeholder="Edad" 
          value={newPerson.age} 
          onChange={(e) => setNewPerson({ ...newPerson, age: e.target.value })} 
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

export default ArrayMethodsExample4;
