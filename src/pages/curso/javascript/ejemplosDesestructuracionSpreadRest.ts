// Ejemplos prácticos de desestructuración, operadores spread y rest en TypeScript

// 1. Desestructuración de Arrays
const numeros = [1, 2, 3, 4, 5];
const [primero, segundo, ...restoNumeros] = numeros;
console.log(primero, segundo, restoNumeros);

// 2. Desestructuración de Objetos
const persona = { nombre: "Alicia", edad: 25, ciudad: "Nueva York" };
const { nombre, edad, ciudad } = persona;
console.log(nombre, edad, ciudad);

// 3. Desestructuración con Alias
const { nombre: nombrePersona, edad: edadPersona } = persona;
console.log(nombrePersona, edadPersona);

// 4. Desestructuración en Parámetros de Función
function saludar({ nombre, edad }: { nombre: string; edad: number }) {
  console.log(`Hola, mi nombre es ${nombre} y tengo ${edad} años.`);
}
saludar(persona);

// 5. Operador Spread con Arrays
const masNumeros = [6, 7, 8];
const todosLosNumeros = [...numeros, ...masNumeros];
console.log(todosLosNumeros);

// 6. Operador Spread con Objetos
const personaActualizada = { ...persona, pais: "EE.UU." };
console.log(personaActualizada);

// 7. Uso de Rest en Funciones
function sumar(...nums: number[]): number {
  return nums.reduce((acum, num) => acum + num, 0);
}
console.log(sumar(1, 2, 3, 4, 5));

// 8. Uso de Rest en Desestructuración de Objetos
const { nombre: nombreUsuario, ...restoPersona } = persona;
console.log(nombreUsuario, restoPersona);

// 9. Copia y Modificación de Arrays con Spread
const numerosCopiados = [...numeros];
numerosCopiados.push(99);
console.log(numeros, numerosCopiados);

// 10. Copia y Modificación de Objetos con Spread
const personaCopiada = { ...persona };
personaCopiada.edad = 30;
console.log(persona, personaCopiada);

// 11. Combinar Arrays con Spread
const arraysCombinados = [...numeros, ...masNumeros];
console.log(arraysCombinados);

// 12. Combinar Objetos con Spread
const informacionAdicional = { trabajo: "Desarrollador", pasatiempo: "Música" };
const perfilCompleto = { ...persona, ...informacionAdicional };
console.log(perfilCompleto);

// 13. Extraer Propiedades de Objetos con Desestructuración en Funciones
function mostrarPersona({ nombre, edad }: { nombre: string; edad: number }) {
  console.log(`${nombre} tiene ${edad} años.`);
}
mostrarPersona(persona);

// 14. Spread en Parámetros de Función
function multiplicar(a: number, b: number, c: number): number {
  return a * b * c;
}
const valores: [number, number, number] = [2, 3, 4];
console.log(multiplicar(...valores));

// 15. Rest en Parámetros de Función con Otros Parámetros
function presentar(saludo: string, ...nombres: string[]) {
  console.log(`${saludo}, ${nombres.join(" y ")}!`);
}
presentar("Hola", "Carlos", "Ana", "Luis");
