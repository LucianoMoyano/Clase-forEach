# Clase-forEach()

Esta es una clase de las mesas de estudio que se dan por Twitch!
Tenemos distintos ejercicios y una breve explicación a este metodo!

//El método forEach() ejecuta la función indicada una vez por cada elemento del array.

const array1 = ['a', 'b', 'c'];

array1.forEach(element => console.log(element));

// expected output: "a"
// expected output: "b"
// expected output: "c"

//Nota : No hay forma de detener o cortar un bucle forEach que no sea lanzar una excepción. Si necesita dicho comportamiento, el método .forEach() es la herramienta equivocada, use una simple iteración en su lugar. 
