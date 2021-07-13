("-----------------------CLASE FOREACH()----------------------------")

//El método forEach() ejecuta la función indicada una vez por cada elemento del array.

const array1 = ['a', 'b', 'c'];

array1.forEach(element => console.log(element));

// expected output: "a"
// expected output: "b"
// expected output: "c"

//Nota : No hay forma de detener o cortar un bucle forEach que no sea lanzar una excepción. Si necesita dicho comportamiento, el método .forEach() es la herramienta equivocada, use una simple iteración en su lugar. 


/* Tenemos un array de números, y queremos crear un array nuevo con todos los números elevados al cuadrado.
let array = [1, 3, 5] ==> [1, 9, 25] */

let array = [1, 3, 5];
function squaredArray(array) {
    let newArray = []
    array.forEach(function (n, i) {
        newArray[i] = n * n
    })
    return newArray
}
squaredArray(array)

/* 
Tenemos un array de números en la variable numbers. Necesitamos calcular la suma total de todos los números en el array, utilizando forEach.
let numbers = [6, 1, 34, 94, 3, 17] ==> 155 */

let numbers = [6, 1, 34, 94, 3, 17];

function sumaTotal(numbers) {
  //crear la variable y pasarle un parametro

  let total = 0; //la variable total esta siendo utilizada como acumuladora

  numbers.forEach(function (number) {
    //a variable numbers le hicimos un forEach poara que recorra y haga un loop en todos los elementos del arreglo
    total += number;
  });
  return total;
}
sumaTotal(numbers);

/* Escribir una función llamada soloNumerosPares que acepta un array de números y retorna un nuevo array con solo los números pares que contiene el array original. Utilizar forEach para la solución.
let numbers = [6, 1, 34, 94, 3, 17] ==> [6, 34, 94] */

let numbers = [6, 1, 34, 94, 3, 17]
function soloNumerosPares(array) {
    let evenArray = []
    array.forEach(function (n) {
        if (n % 2 == 0) {
            evenArray.push(n)
        }}
    )
    return evenArray
}
soloNumerosPares(numbers)



/* Escribe una función biggest_smallest que tome como entrada un arreglo de números, y usando .forEach(),que devuelva un arreglo que contenga el menor número en la posición cero y el mayor número en la posición 1. let numbers = [6, 1, 34, 94, 3, 17] ==> [1, 94] */

let numbers = [6, 1, 34, 94, 3, 17];

function biggest_smallest(array){
    let biggest = array[0];
    let smallest = array[0];
    array.forEach(function(e){
        if (e>biggest){
            biggest = e
        }
        if (e<smallest){
            smallest = e
        }
    })
    return [smallest, biggest]
}
biggest_smallest(numbers)