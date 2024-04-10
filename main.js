console.log('Hola caracola');
// 1.  Ejercicios destructuring
// Dado el siguiente objeto:
const empleados = [
  { name: "Luis", email: "Luis@gmail.com" },
  { name: "Ana", email: "Ana@gmail.com" },
  { name: "Andrea", email: "Andrea@gmail.com" },
];
// Extrae la empleada Ana con todos sus datos personales:

const [,este] = empleados;
console.log(este)

// {"name":"Ana", "email":"Ana@gmail.com"}
// Extrae el email del empleado Luis --> Luis@gmail.com

const [esteOtro] = empleados;
const { name, email } = esteOtro;
console.log(email);

// Dado el siguiente objeto:
const pokemon = {
    name: "Bulbasaur",
    type: "grass",
    ability: {
        "primary": "Overgrow",
        "hidden": "Chlorophyll"
    },
    stats: {
        hp: 45,
        attack: 49,
        deffense: 59,
        speed: 45
    },
    moves: [
        "Growl", "Tackle", "Vine Whip", "Razor Leaf"
    ]
}
// Cambia el nombre de la propiedad “name” por “nombre

const {name: nombre, type, ability, stats, moves} = pokemon;
console.log(moves)

// Extrae el nombre del Pokemon

console.log(nombre);

// Extrae el tipo de Pokemon que es

console.log(type);

// Extrae el movimiento “Tackle”

const [,movimiento] = moves;
console.log(movimiento);

// 2. Ejercicios spread/rest
// Mergea el siguiente pokémon con el Pokemon del ejercicio anterior:
const pikachu = {
    name: "Pikachu",
    type: "electric",
    ability: {
        "primary": "Static",
        "hidden": "Lightning rod"
    },
    stats: {
        hp: 35,
        attack: 55,
        deffense: 40,
        speed: 90
    },
    moves: [
        "Quick Attack", "Volt Tackle", "Iron Tail", "Thunderbolt"
    ],
}

const allPokemons = {...pokemon, ...pikachu};
console.log(allPokemons);

// Escribe una función llamada sumEveryOther que pueda recibir cualquier cantidad de números y devuelva la suma de todos los demás argumentos.

const sumEveryOther = (...numbers) => {
    let suma = 0;
    for (let i = 0; i < numbers.length; i++) {
        suma += numbers[i];
    }
    console.log(suma);
}

sumEveryOther(6, 8, 2, 3, 1); //20
sumEveryOther(11, 3, 12); //26 

// Escribe una función llamada addOnlyNums que pueda recibir cualquier número de argumentos (incluyendo números y strings y retorne la suma solo de los números.

const addOnlyNums = (...something) => {
    let suma = 0;
    something.filter(number => {
        if (typeof number === 'number') {
            suma += number;
        } 
    })
    console.log(suma);
}

addOnlyNums(1, 'perro', 2, 4); //7


// Escribe una función llamada countTheArgs que pueda recibir cualquier número de argumentos y devuelva un número que indique cuántos argumentos ha recibido.

const countTheArgs = (...something) => {
    console.log(something.length);
}

countTheArgs('gato', 'perro'); //2
countTheArgs('gato', 'perro', 'pollo', 'oso'); //4

// Escribe una función llamada combineTwoArrays que reciba dos array cómo argumentos y devuelva solo un array que combine los dos (usando spread operator).

// const arr1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// const arr2 = ['hola', 'que', 'tal'];

const combineTwoArrays = (arr1, arr2) => {
    return [...arr1, ...arr2];
};

console.log(combineTwoArrays([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], ['hola', 'que', 'tal']));

// 3. Extras


// Dado el siguiente objeto:
const HIGH_TEMPERATURES = {
  yesterday: 30,
  today: 35,
  tomorrow: 32,
};
// Cambiar las siguientes líneas para guardar desestructurando los valores de temperaturas en las variables maximaHoy y maximaManana

const {yestarday, today, tomorrow} = HIGH_TEMPERATURES;
const maximaHoy = today;
const maximaManana = tomorrow;
console.log(maximaHoy);
console.log(tomorrow);

// const maximaHoy = HIGH_TEMPERATURES.today;
// const maximaManana = HIGH_TEMPERATURES.tomorrow;
// console.log(maximaHoy)
// console.log(maximaManana)


// Escriba una función llamada onlyUniques que acepte cualquier número de argumentos y devuelva un array de elementos únicos, sin repetidos.

const onlyUniques = (...something) => {
    console.log(Array.from(new Set(something)));
}

onlyUniques('gato', 'pollo', 'cerdo', 'cerdo');
// //['gato', 'pollo', 'cerdo']
onlyUniques(1, 1, 2, 2, 3, 6, 7, 8); //[1, 2, 3, 6, 7, 8]


// Escriba una función llamada combineAllArrays que pueda recibir cualquier cantidad de arrays como argumentos y los combine todos en un solo array.

const combineAllArrays = (...arrays) => {
    return arrays.reduce((mainArray, currentArray) => {
        return [...mainArray, ...currentArray];
    })
}

console.log(combineAllArrays([3, 6, 7, 8],[2, 7, 3, 1]))
// // [3, 6, 7, 8, 2, 7, 3, 1]
console.log(combineAllArrays([2, 7, 3, 1],[2, 7, 4, 12],[2, 44, 22, 7, 3, 1]));
// // [2, 7, 3, 1, 2, 7, 4, 12, 2, 44, 22, 7, 3, 1]


// Escriba una función llamada sumAndSquare que reciba cualquier número de argumentos, los eleve al cuadrado y devuelva la suma de todos los valores cuadrados.

const sumAndSquare = (...arrays) => {
    const fullArray = arrays.reduce((mainArray, currentArray) => {
        return [...mainArray, ...currentArray];
    });
    const numerosElevados = fullArray.map(numeritos => Math.pow(numeritos, 2));
    console.log(numerosElevados);
    const finalResult = numerosElevados.reduce((a, b) => a + b);
    console.log(finalResult);
}

sumAndSquare([5, 4, 3], [1, 2, 3]);