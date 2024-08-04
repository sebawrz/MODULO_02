//1- Crear una función que reciba un número por parámetro e indique en consola si el número es par o impar.

console.log("1 - Crear una función que reciba un número por parámetro e indique en consola si el número es par o impar.");

function esPar(numero) {
    if (numero % 2 == 0) {
        return "Es par";
    }
    else {
        return "Es impar";
    }
}

console.log(esPar(1));
console.log(esPar(4));

//2- Crear una función que reciba dos números por parámetro e indique en consola que número es mayor, y si ninguno lo es, indicar por consola que son iguales.

console.log("2- Crear una función que reciba dos números por parámetro e indique en consola que número es mayor, y si ninguno lo es, indicar por consola que son iguales.");

function mayorMenorIgual(n1, n2) {
    if (n1 > n2) {
        return "n1 " + n1 + " es mayor que n2 " + n2;
    }
    else if (n2 > n1) {
        return "n2 " + n2 + " es mayor que n1 " + n1;
    }
    else {
        return "Los numeros son iguales";
    }
}

console.log(mayorMenorIgual(4, 1));
console.log(mayorMenorIgual(1, 4));
console.log(mayorMenorIgual(4, 4));

//3- Crear una función que reciba un número por parámetro e indique en consola si ese número es múltiplo de 5.

console.log("3- Crear una función que reciba un número por parámetro e indique en consola si ese número es múltiplo de 5.");

function multiplo5(n) {
    if (n % 5 == 0) return n + " es multiplo de 5"
    else return n + " no es multiplo de 5"
}

console.log(multiplo5(5));
console.log(multiplo5(10));
console.log(multiplo5(16));

//4- Crear una función que reciba un número por parámetro e imprima por consola todos los números desde el 0 hasta llegar a ese número.

console.log("4- Crear una función que reciba un número por parámetro e imprima por consola todos los números desde el 0 hasta llegar a ese número.");

function imprimirHasta(n) {
    for (let i = 0; i <= n; i++) {
        console.log(i);
    }
}

imprimirHasta(10);

//5 - Crear una función que reciba una palabra y un número por parámetro e imprima por consola esa palabra la cantidad correspondiente al número indicado.

console.log("5 - Crear una función que reciba una palabra y un número por parámetro e imprima por consola esa palabra la cantidad correspondiente al número indicado.");

function imprimirPalabra(palabra, numero) {
    for (let i = 0; i < numero; i++) {
        console.log(palabra);
    }
}

imprimirPalabra("NUCBA", 10);
imprimirPalabra("Full Stack", 3);

//6 - Crear una función que reciba un array por parámetro e imprima por consola todos los valores de ese array.

console.log("6 - Crear una función que reciba un array por parámetro e imprima por consola todos los valores de ese array.");

function imprimirArray(arreglo) {
    arreglo.forEach((element) => console.log(element));
}

imprimirArray([1, 2, 3, 4, 5, 6, 7]);
imprimirArray(["uno", "dos", "tres", "cuatro", "cinco", "seis", "siete"]);

//7 - Crear una función que reciba un array con 10 números e imprima por consola todos los valores de ese array, menos el que se encuentre en la 5ta posición del mismo. Ayuda: Recuerden que el primer índice de un array es "0".

console.log("7 - Crear una función que reciba un array con 10 números e imprima por consola todos los valores de ese array, menos el que se encuentre en la 5ta posición del mismo. Ayuda: Recuerden que el primer índice de un array es `0`.");

function imprimirArray2(arreglo) {
    for (let i = 0; i < arreglo.length; i++) {
        if (i != 4) {
            console.log(arreglo[i]);
        }
    }
}

imprimirArray2([10, 20, 30, 40, 50, 60, 70, 80, 90, 100]);

//8 - Crea una función que reciba un array de números y un número por parámetro e imprima por consola cada número del array multiplicado por el número pasado por parámetro.
console.log("8 - Crea una función que reciba un array de números y un número por parámetro e imprima por consola cada número del array multiplicado por el número pasado por parámetro.");

function imprimirArrayMultiplicado(arreglo, multiplicador) {
    for (let i = 0; i < arreglo.length; i++) {
        console.log(arreglo[i] * multiplicador);
    }
}

imprimirArrayMultiplicado([10, 20, 30, 40, 50, 60, 70, 80, 90, 100], 2);