// Ejemplos prácticos de métodos de arrays en TypeScript con arrays de objetos
export type Persona = {
  nombre: string;
  edad: number;
};

export const personas: Persona[] = [
  { nombre: "Alicia", edad: 25 },
  { nombre: "Roberto", edad: 30 },
  { nombre: "Carlos", edad: 35 },
  { nombre: "David", edad: 40 }
];

// 1. forEach - Itera sobre cada objeto en el array
personas.forEach(persona => console.log(persona.nombre));

// 2. map - Crea un nuevo array con nombres en mayúsculas
const nombresMayusculas: string[] = personas.map(persona => persona.nombre.toUpperCase());
console.log(nombresMayusculas);

// 3. filter - Filtra las personas mayores de 30 años
const mayoresDe30: Persona[] = personas.filter(persona => persona.edad > 30);
console.log(mayoresDe30);

// 4. find - Encuentra la primera persona mayor de 30 años
const primeraMayorDe30: Persona | undefined = personas.find(persona => persona.edad > 30);
console.log(primeraMayorDe30);

// 5. reduce - Suma todas las edades
const edadTotal: number = personas.reduce((acumulador, persona) => acumulador + persona.edad, 0);
console.log(edadTotal);

// 6. some - Verifica si hay alguna persona menor de 30 años
const hayMenoresDe30: boolean = personas.some(persona => persona.edad < 30);
console.log(hayMenoresDe30);

// 7. every - Verifica si todas las personas son mayores de 20 años
const todasMayoresDe20: boolean = personas.every(persona => persona.edad > 20);
console.log(todasMayoresDe20);

// 8. includes - Aplicado a nombres
const nombres: string[] = personas.map(persona => persona.nombre);
console.log(nombres.includes("Alicia"));

// 9. sort - Ordena las personas por edad de menor a mayor
personas.sort((a, b) => a.edad - b.edad);
console.log(personas);

// 10. reverse - Invierte el orden del array
personas.reverse();
console.log(personas);

// 11. slice - Toma una parte del array (los dos primeros elementos)
const dosPrimerasPersonas: Persona[] = personas.slice(0, 2);
console.log(dosPrimerasPersonas);

// 12. splice - Modifica el array eliminando y agregando elementos
const personasSpliceadas: Persona[] = [...personas];
personasSpliceadas.splice(1, 1, { nombre: "Eva", edad: 28 });
console.log(personasSpliceadas);

// 13. push - Agrega una nueva persona al final
const personasConNueva: Persona[] = [...personas];
personasConNueva.push({ nombre: "Francisco", edad: 45 });
console.log(personasConNueva);

// 14. pop - Elimina la última persona
const personasSinUltima: Persona[] = [...personas];
personasSinUltima.pop();
console.log(personasSinUltima);

// 15. keys - Obtiene las claves de un array
const iteradorClavesPersonas: IterableIterator<number> = personas.keys();
console.log([...iteradorClavesPersonas]);

// 16. values - Devuelve un iterador con los valores del array
const iteradorValoresPersonas: IterableIterator<Persona> = personas.values();
console.log([...iteradorValoresPersonas]);

// 17. entries - Devuelve pares clave-valor
const iteradorEntradasPersonas: IterableIterator<[number, Persona]> = personas.entries();
console.log([...iteradorEntradasPersonas]);

// Ejemplos con arrays numéricos
type ArrayNumeros = number[];
export const arrayPrueba: ArrayNumeros = [1, 2, 3, 4, 5];

arrayPrueba.forEach(numero => console.log(numero * 2));

const arrayMapeado: ArrayNumeros = arrayPrueba.map(numero => numero * 2);
console.log(arrayMapeado);

const arrayFiltrado: ArrayNumeros = arrayPrueba.filter(numero => numero > 2);
console.log(arrayFiltrado);

const elementoEncontrado: number | undefined = arrayPrueba.find(numero => numero > 2);
console.log(elementoEncontrado);

const suma: number = arrayPrueba.reduce((acum, numero) => acum + numero, 0);
console.log(suma);

const hayMayoresQueTres: boolean = arrayPrueba.some(numero => numero > 3);
console.log(hayMayoresQueTres);

const todosMayoresQueCero: boolean = arrayPrueba.every(numero => numero > 0);
console.log(todosMayoresQueCero);

const incluyeTres: boolean = arrayPrueba.includes(3);
console.log(incluyeTres);

arrayPrueba.sort((a, b) => b - a);
console.log(arrayPrueba);

arrayPrueba.reverse();
console.log(arrayPrueba);

const arraySegmentado: ArrayNumeros = arrayPrueba.slice(1, 3);
console.log(arraySegmentado);

const arraySpliceado: ArrayNumeros = [...arrayPrueba];
arraySpliceado.splice(2, 1, 99);
console.log(arraySpliceado);

const arrayConPush: ArrayNumeros = [...arrayPrueba];
arrayConPush.push(6);
console.log(arrayConPush);

arrayPrueba.pop();
console.log(arrayPrueba);

const iteradorClaves: IterableIterator<number> = arrayPrueba.keys();
console.log([...iteradorClaves]);

const iteradorValores: IterableIterator<number> = arrayPrueba.values();
console.log([...iteradorValores]);

const iteradorEntradas: IterableIterator<[number, number]> = arrayPrueba.entries();
console.log([...iteradorEntradas]);
