//1.1-Dado el siguiente array, crear otro que sea el resultado de elevar cada número a si mismo

const numeros = [4, 5, 6, 7, 8, 9, 10];
arraysElevados = numeros.map((x) => x ** x)


//1.2 FALTA Dado el siguiente array, generar un segundo array que consiga generar de salida el resultado esperado
//Resultado esperado
const foodList = ['Pizza', 'Ramen', 'Paella', 'Entrecot'];
const lugares = ["Italia", "Japón", "Valencia"];
let resultadoComidas = foodList.map((food, i) => {
    if (food !== 'Entrecot'){
        return `Como soy de ${lugares[i]}, amo comer ${food}`
    } else {
        return `Aunque no como carne, el ${food} es sabroso`
    }
  }
)
//1.3 Dado el siguiente array, crear un segundo array que forme frases como en el ejemplo accediendo a las propiedades del objeto proporcionado:
const staff = [{
      name: 'Pepe',
      role: 'The Boss',
      hobbies: ['leer', 'ver pelis']
    },
    {
      name: 'Ana',
      role: 'becaria',
      hobbies: ['nadar', 'bailar']
    },
    {
      name: 'Luis',
      role: 'programador',
      hobbies: ['dormir', 'comprar']
    },
    {
      name: 'Carlos',
      role: 'secretario',
      hobbies: ['futbol', 'queso']
    }
  ];
  
staff.map((x) => {return x.name + " es " + x.role + " y le gusta " + x.hobbies[0] + "y" + x.hobbies[1]})





// 2.1 - Crea un segundo array con que devuelva los impares

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

numbers.filter((z) => z % 2 !== 0)



//2.2 Dado el siguiente array, genera un segundo array que filtre los platos veganos y saque una sentencia como la del ejemplo

const foodList2 = [
    {
        name: 'Tempeh',
        isVeggie: true
    },
    {
        name: 'Cheesbacon burguer',
        isVeggie: false
    },
    {
        name: 'Tofu burguer',
        isVeggie: true
    },
    {
        name: 'Entrecot',
        isVeggie: false
    }]

const veganos = foodList2.filter((x) => x.isVeggie == true)
const frase = veganos.map((x) => x.name)
frase.map((x) => {return 'Que rico' + x +' me voy a comer'})


//2.3 Dado el siguiente array, devolver un array con los nombres de los elementos que valgan más de 300 euros
const inventory = [
    {
        name: 'Mobile phone',
        price: 199
    },
    {
        name: 'TV Samsung',
        price: 459
    },
    {
        name: 'Viaje a cancún',
        price: 600
    },
    {
        name: 'Mascarilla',
        price: 1
    }
];

const nombres = inventory.filter((x) => x.price>300)

nombres.map((x) => x.name)



//.3.1 Dado el siguiente array, obten la multiplicación de todos los elementos del array

const numeros1 = [39, 2, 4, 25, 62];
arraysMulti = numeros1.reduce((accumulator, currentValue) => accumulator * currentValue,);

//.3.2 Concatena todos los elementos del array con reduce para que devuelva una sola frase
let nombre = prompt("Please enter your name");
const sentenceElements = [
    'Me',
    'llamo',
    nombre,
    'y',
    'quiero',
    'sentir',
    'la',
    'fuerza',
    'con',
    'javascript'
];
arrayFrase = sentenceElements.reduce((accumulator, currentValue) => accumulator + " " + currentValue);

//.3.3 Obtener el monto total de los elementos que pertenecen a category "code"
const books = [
    {
        name: ' JS for dummies',

        author: 'Emily A. Vander Veer',
        price: 20,
        category: 'code'
    },
    {
        name: 'Don Quijote de la Mancha',
        author: 'Cervantes',
        price: 14,
        category: 'nobel'
    },
    {
        name: 'Juego de tronos',
        author: 'George R. Martin',
        price: 32,
        category: 'Fantasy'
    },
    {
        name: 'javascript the good parts',
        author: 'Douglas Crockford',
        price: 40,
        category: 'code'
    }
];

const filtrados = books.filter((x) => x.category == 'code')

filtrados.reduce ((acc,value) => acc + value.price,0)

const arr = [-6, 0, 2, 40]
function fixedPoint() {
for (let i = 0; i<arr.length; i++) {
if(arr[i]==i) {return true}} return false}

