// Ejemplos prácticos de métodos de arrays en TypeScript con arrays de objetos
export type Person = {
  name: string;
  age: number;
};

export const people: Person[] = [
  { name: "Alice", age: 25 },
  { name: "Bob", age: 30 },
  { name: "Charlie", age: 35 },
  { name: "David", age: 40 }
];

// 1. forEach - Itera sobre cada objeto en el array
people.forEach(person => console.log(person.name));

// 2. map - Crea un nuevo array con nombres en mayúsculas
const namesUppercase: string[] = people.map(person => person.name.toUpperCase());
console.log(namesUppercase);

// 3. filter - Filtra las personas mayores de 30 años
const olderThan30: Person[] = people.filter(person => person.age > 30);
console.log(olderThan30);

// 4. find - Encuentra la primera persona mayor de 30 años
const firstOlderThan30: Person | undefined = people.find(person => person.age > 30);
console.log(firstOlderThan30);

// 5. reduce - Suma todas las edades
const totalAge: number = people.reduce((acc, person) => acc + person.age, 0);
console.log(totalAge);

// 6. some - Verifica si hay alguna persona menor de 30 años
const hasYoungerThan30: boolean = people.some(person => person.age < 30);
console.log(hasYoungerThan30);

// 7. every - Verifica si todas las personas son mayores de 20 años
const allOlderThan20: boolean = people.every(person => person.age > 20);
console.log(allOlderThan20);

// 8. includes - No es útil directamente en objetos, pero aplicado a nombres:
const names: string[] = people.map(person => person.name);
console.log(names.includes("Alice"));

// 9. sort - Ordena las personas por edad de menor a mayor
people.sort((a, b) => a.age - b.age);
console.log(people);

// 10. reverse - Invierte el orden del array
people.reverse();
console.log(people);

// 11. slice - Toma una parte del array (los dos primeros elementos)
const firstTwoPeople: Person[] = people.slice(0, 2);
console.log(firstTwoPeople);

// 12. splice - Modifica el array eliminando y agregando elementos
const splicedPeople: Person[] = [...people];
splicedPeople.splice(1, 1, { name: "Eve", age: 28 });
console.log(splicedPeople);

// 13. push - Agrega una nueva persona al final
const pushPeople: Person[] = [...people];
pushPeople.push({ name: "Frank", age: 45 });
console.log(pushPeople);

// 14. pop - Elimina la última persona
const popPeople: Person[] = [...people];
popPeople.pop();
console.log(popPeople);

// 15. keys - Obtiene las claves de un array
const keysIteratorObjects: IterableIterator<number> = people.keys();
console.log([...keysIteratorObjects]);

// 16. values - Devuelve un iterador con los valores del array
const valuesIteratorObjects: IterableIterator<Person> = people.values();
console.log([...valuesIteratorObjects]);

// 17. entries - Devuelve pares clave-valor
const entriesIteratorObjects: IterableIterator<[number, Person]> = people.entries();
console.log([...entriesIteratorObjects]);

// Manteniendo los ejemplos con arrays numéricos
type NumArray = number[];
export const testArray: NumArray = [1, 2, 3, 4, 5];

testArray.forEach(num => console.log(num * 2));

const mappedArray: NumArray = testArray.map(num => num * 2);
console.log(mappedArray);

const filteredArray: NumArray = testArray.filter(num => num > 2);
console.log(filteredArray);

const foundElement: number | undefined = testArray.find(num => num > 2);
console.log(foundElement);

const sum: number = testArray.reduce((acc, num) => acc + num, 0);
console.log(sum);

const hasGreaterThanThree: boolean = testArray.some(num => num > 3);
console.log(hasGreaterThanThree);

const allGreaterThanZero: boolean = testArray.every(num => num > 0);
console.log(allGreaterThanZero);

const includesThree: boolean = testArray.includes(3);
console.log(includesThree);

testArray.sort((a, b) => b - a);
console.log(testArray);

testArray.reverse();
console.log(testArray);

const slicedArray: NumArray = testArray.slice(1, 3);
console.log(slicedArray);

const splicedArray: NumArray = [...testArray];
splicedArray.splice(2, 1, 99);
console.log(splicedArray);

const pushArray: NumArray = [...testArray];
pushArray.push(6);
console.log(pushArray);

testArray.pop();
console.log(testArray);

const keysIterator: IterableIterator<number> = testArray.keys();
console.log([...keysIterator]);

const valuesIterator: IterableIterator<number> = testArray.values();
console.log([...valuesIterator]);

const entriesIterator: IterableIterator<[number, number]> = testArray.entries();
console.log([...entriesIterator]);
