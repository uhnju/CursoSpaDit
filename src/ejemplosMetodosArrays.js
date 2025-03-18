
console.log("Ejemplos de métodos de arrays en JavaScript");

// Ejemplos prácticos de métodos de arrays en JavaScript
// 1. forEach - Itera sobre cada elemento del array
const testArray = [1, 2, 3, 4, 5];
testArray.forEach(num => console.log(num * 2));
// 2. map - Crea un nuevo array con los resultados de una función aplicada a cada elemento
const mappedArray = testArray.map(num => num * 2);
console.log(mappedArray);
// 3. filter - Filtra los elementos que cumplen una condición
const filteredArray = testArray.filter(num => num > 2);
console.log(filteredArray);
// 4. find - Devuelve el primer elemento que cumple la condición
const foundElement = testArray.find(num => num > 2);
console.log(foundElement);
// 5. reduce - Reduce el array a un único valor
const sum = testArray.reduce((acc, num) => acc + num, 0);
console.log(sum);
// 6. some - Comprueba si al menos un elemento cumple una condición
const hasGreaterThanThree = testArray.some(num => num > 3);
console.log(hasGreaterThanThree);
// 7. every - Comprueba si todos los elementos cumplen una condición
const allGreaterThanZero = testArray.every(num => num > 0);
console.log(allGreaterThanZero);
// 8. includes - Verifica si un elemento está en el array
const includesThree = testArray.includes(3);
console.log(includesThree);
// 9. sort - Ordena el array (modifica el original)
testArray.sort((a, b) => b - a);
console.log(testArray);
// 10. reverse - Invierte el orden de los elementos (modifica el original)
testArray.reverse();
console.log(testArray);
// 11. slice - Devuelve una copia de una parte del array
const slicedArray = testArray.slice(1, 3);
console.log(slicedArray);
// 12. splice - Añade o elimina elementos en una posición específica
const splicedArray = [...testArray];
splicedArray.splice(2, 1, 99);
console.log(splicedArray);
// 13. push - Añade elementos al final
const pushArray = [...testArray];
pushArray.push(6);
console.log(pushArray);
// 14. pop - Elimina el último elemento
testArray.pop();
console.log(testArray);
// 15. keys - Devuelve un iterador con las claves del array
const keysIterator = testArray.keys();
console.log([...keysIterator]);
// 16. values - Devuelve un iterador con los valores del array
const valuesIterator = testArray.values();
console.log([...valuesIterator]);
// 17. entries - Devuelve un iterador con las parejas clave-valor
const entriesIterator = testArray.entries();
console.log([...entriesIterator]);




// Ejemplos prácticos de métodos de arrays en JavaScript con arrays de objetos
const people = [
  { name: "Alice", age: 25 },
  { name: "Bob", age: 30 },
  { name: "Charlie", age: 35 },
  { name: "David", age: 40 }
];
// 1. forEach - Itera sobre cada objeto en el array
people.forEach(person => console.log(person.name));
// 2. map - Crea un nuevo array con nombres en mayúsculas
const namesUppercase = people.map(person => person.name.toUpperCase());
console.log(namesUppercase);
// 3. filter - Filtra las personas mayores de 30 años
const olderThan30 = people.filter(person => person.age > 30);
console.log(olderThan30);
// 4. find - Encuentra la primera persona mayor de 30 años
const firstOlderThan30 = people.find(person => person.age > 30);
console.log(firstOlderThan30);
// 5. reduce - Suma todas las edades
const totalAge = people.reduce((acc, person) => acc + person.age, 0);
console.log(totalAge);
// 6. some - Verifica si hay alguna persona menor de 30 años
const hasYoungerThan30 = people.some(person => person.age < 30);
console.log(hasYoungerThan30);
// 7. every - Verifica si todas las personas son mayores de 20 años
const allOlderThan20 = people.every(person => person.age > 20);
console.log(allOlderThan20);
// 8. includes - No es útil directamente en objetos, pero aplicado a nombres:
const names = people.map(person => person.name);
console.log(names.includes("Alice"));
// 9. sort - Ordena las personas por edad de menor a mayor
people.sort((a, b) => a.age - b.age);
console.log(people);
// 10. reverse - Invierte el orden del array
people.reverse();
console.log(people);
// 11. slice - Toma una parte del array (los dos primeros elementos)
const firstTwoPeople = people.slice(0, 2);
console.log(firstTwoPeople);
// 12. splice - Modifica el array eliminando y agregando elementos
const splicedPeople = [...people];
splicedPeople.splice(1, 1, { name: "Eve", age: 28 });
console.log(splicedPeople);
// 13. push - Agrega una nueva persona al final
const pushPeople = [...people];
pushPeople.push({ name: "Frank", age: 45 });
console.log(pushPeople);
// 14. pop - Elimina la última persona
const popPeople = [...people];
popPeople.pop();
console.log(popPeople);
// 15. keys - Obtiene las claves de un array
const keysIteratorObjects = people.keys();
console.log([...keysIteratorObjects]);
// 16. values - Devuelve un iterador con los valores del array
const valuesIteratorObjects = people.values();
console.log([...valuesIteratorObjects]);
// 17. entries - Devuelve pares clave-valor
const entriesIteratorObjects = people.entries();
console.log([...entriesIteratorObjects]);



