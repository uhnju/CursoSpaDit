import React from "react";

const ArrayMethodsExample = () => {
  const numbers = [1, 2, 3, 4, 5];
  const people = [
    { name: "Alice", age: 25 },
    { name: "Bob", age: 30 },
    { name: "Charlie", age: 35 },
    { name: "David", age: 40 }
  ];

  // Métodos de Arrays aplicados
  const mappedNumbers = numbers.map(num => num * 2);
  const filteredPeople = people.filter(person => person.age > 30);
  const firstOlderThan30 = people.find(person => person.age > 30);
  const totalAge = people.reduce((acc, person) => acc + person.age, 0);
  const sortedPeople = [...people].sort((a, b) => a.age - b.age);
  const reversedNumbers = [...numbers].reverse();
  const slicedNumbers = numbers.slice(1, 3);
  const splicedNumbers = [...numbers];
  splicedNumbers.splice(2, 1, 99);

  return (
    <div className="p-4 space-y-4">
      <h1 className="text-xl font-bold">Ejemplos de Métodos de Arrays en React</h1>

      <div>
        <h2 className="text-lg font-semibold">Original Numbers</h2>
        <p>{JSON.stringify(numbers)}</p>
      </div>

      <div>
        <h2 className="text-lg font-semibold">Map (Multiplica por 2)</h2>
        <p>{JSON.stringify(mappedNumbers)}</p>
      </div>

      <div>
        <h2 className="text-lg font-semibold">Filter (Edad &gt; 30)</h2>
        <p>{JSON.stringify(filteredPeople)}</p>
      </div>

      <div>
        <h2 className="text-lg font-semibold">Find (Primera Persona &gt; 30)</h2>
        <p>{JSON.stringify(firstOlderThan30)}</p>
      </div>

      <div>
        <h2 className="text-lg font-semibold">Reduce (Suma Edades)</h2>
        <p>{totalAge}</p>
      </div>

      <div>
        <h2 className="text-lg font-semibold">Sort (Ordenado por Edad)</h2>
        <p>{JSON.stringify(sortedPeople)}</p>
      </div>

      <div>
        <h2 className="text-lg font-semibold">Reverse (Invertir Números)</h2>
        <p>{JSON.stringify(reversedNumbers)}</p>
      </div>

      <div>
        <h2 className="text-lg font-semibold">Slice (Del 1 al 3)</h2>
        <p>{JSON.stringify(slicedNumbers)}</p>
      </div>

      <div>
        <h2 className="text-lg font-semibold">Splice (Reemplazo en Posición 2)</h2>
        <p>{JSON.stringify(splicedNumbers)}</p>
      </div>
    </div>
  );
};

export default ArrayMethodsExample;
