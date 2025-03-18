// Ejemplos prácticos de desestructuración, operadores spread y rest en JavaScript

// 1. Desestructuración de Arrays
const numbers = [1, 2, 3, 4, 5];
const [first, second, ...restNumbers] = numbers;
console.log(first, second, restNumbers);

// 2. Desestructuración de Objetos
const person = { name: "Alice", age: 25, city: "New York" };
const { name, age, city } = person;
console.log(name, age, city);

// 3. Desestructuración con Alias
const { name: personName, age: personAge } = person;
console.log(personName, personAge);

// 4. Desestructuración en Parámetros de Función
function greet({ name, age }) {
  console.log(`Hola, mi nombre es ${name} y tengo ${age} años.`);
}
greet(person);

// 5. Operador Spread con Arrays
const moreNumbers = [6, 7, 8];
const allNumbers = [...numbers, ...moreNumbers];
console.log(allNumbers);

// 6. Operador Spread con Objetos
const updatedPerson = { ...person, country: "USA" };
console.log(updatedPerson);

// 7. Uso de Rest en Funciones
function sum(...nums) {
  return nums.reduce((acc, num) => acc + num, 0);
}
console.log(sum(1, 2, 3, 4, 5));

// 8. Uso de Rest en Desestructuración de Objetos
const { name: userName, ...restPerson } = person;
console.log(userName, restPerson);

// 9. Copia y Modificación de Arrays con Spread
const copiedNumbers = [...numbers];
copiedNumbers.push(99);
console.log(numbers, copiedNumbers);

// 10. Copia y Modificación de Objetos con Spread
const copiedPerson = { ...person };
copiedPerson.age = 30;
console.log(person, copiedPerson);

// 11. Combinar Arrays con Spread
const combinedArrays = [...numbers, ...moreNumbers];
console.log(combinedArrays);

// 12. Combinar Objetos con Spread
const additionalInfo = { job: "Developer", hobby: "Music" };
const fullProfile = { ...person, ...additionalInfo };
console.log(fullProfile);

// 13. Extraer Propiedades de Objetos con Desestructuración en Funciones
function showPerson({ name, age }) {
  console.log(`${name} tiene ${age} años.`);
}
showPerson(person);

// 14. Spread en Parámetros de Función
function multiply(a, b, c) {
  return a * b * c;
}
const values = [2, 3, 4];
console.log(multiply(...values));

// 15. Rest en Parámetros de Función con Otros Parámetros
function introduce(greeting, ...names) {
  console.log(`${greeting}, ${names.join(" y ")}!`);
}
introduce("Hola", "Carlos", "Ana", "Luis");
