// Ejercicio 1.2.1 Sintaxis basica de NodeJS
//Ariel Alonso Gongora Tziu


// 1. Number (números)
var entero = "42";
var decimal = "3.14159";
var negativo = "-17";
var infinito = "Infinity";
var noEsNumero = "NaN";

//console.log (entero);

//Crea una array con almenos 5 elementos de diferente tipo de datos

let miArray = [
    42,           // Number (entero)
    3.14,         // Number (decimal)
    "Hola mundo", // String
    true,         // Boolean
    null          // Null
];

// Imprimir todo el array
console.log(miArray);

// Imprimir cada elemento
console.log(miArray[0]);

//Escribe una funcion polinomica de segundo grado que tome dos numeros y muestre el resultado

function polinomio(x, y) {
    return x * x + y * y;
}



//Escribe una funcion flecha que reciba un string y muestre su impresion aplicando algun metodo de manipulacion de cadenas.

const mostrar = (texto) => console.log(texto.toUpperCase());

mostrar("hola mundo");  

//Función que implementa un bucle que imprima números del 1 al 10 en orden descendente.
function numerosDescendentes() {
    for (let i = 10; i >= 1; i--) {
        console.log(i);
    }
}

numerosDescendentes();

//Crea un objeto que represente un objeto de tu institución con sus respectivas propiedades.
const estudiante = {
    nombre: "Juan Pérez",
    edad: 20,
    carrera: "Ingeniería",
    semestre: 5,
    promedio: 8.5,
    
    descripcion: function() {
        return `Hola, soy ${this.nombre}, tengo ${this.edad} años y estudio ${this.carrera}. Estoy en el semestre ${this.semestre} con un promedio de ${this.promedio}.`;
    }
};

console.log(estudiante.descripcion());

//    Crea un modulo que contenga funciones matemáticas aritméticas (suma, resta, ect) algo sencillo
function sumar(a, b) {
    return a + b;
}

function restar(a, b) {
    return a - b;
}

function multiplicar(a, b) {
    return a * b;
}

function dividir(a, b) {
    return a / b;
}

module.exports = {
    sumar,
    restar,
    multiplicar,
    dividir
};

// Escribe una función que simule una operación asincrónica utilizando setTimeout y maneje el resultado con un callback.
function operacionAsincrona(numero, callback) {
    console.log("Iniciando operación...");
    
    setTimeout(() => {
        const resultado = numero * 2;
        callback(resultado);
    }, 2000); // Espera 2 segundos
}

// Usar la función
operacionAsincrona(5, (resultado) => {
    console.log("Operación completada!");
    console.log("Resultado:", resultado);
});

console.log("Esperando resultado...");

//Escribe un bloque de código que realice la conversión de una cadena a un número e incluye el bloque para el manejo de errores.
function convertirANumero(cadena) {
    try {
        // Intenta convertir la cadena a número
        const numero = Number(cadena);
        
        // Verifica si es un número válido
        if (isNaN(numero)) {
            throw new Error("La cadena no es un número válido");
        }
        
        console.log("Conversión exitosa:", numero);
        return numero;
        
    } catch (error) {
        console.log("Error:", error.message);
        return null;
    }
}

//