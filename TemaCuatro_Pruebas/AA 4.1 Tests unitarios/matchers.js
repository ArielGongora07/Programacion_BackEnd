//ARIEL ALONSO GONGORA TZIU
const sumarDiez = (num) => num + 10;

// b. Función para comparar objetos (toEqual)
const obtenerUsuario = () => {
    return { nombre: 'Juan', edad: 25 };
};

// c. Funciones para valores nulos y definidos
const retornarNulo = () => null;
const retornarIndefinido = () => undefined;
const retornarDefinido = () => "Hola";

// d. Comparaciones numéricas (no requiere función, lo probaremos directo)

// e. Coincidencia de cadenas (toMatch)
const obtenerSaludo = () => "Hola Mundo, ¿cómo estás?";

// f. Contenido en Arrays (toContain)
const obtenerFrutas = () => ["manzana", "pera", "platano"];

// g. Negación (not.toBe)
const obtenerNumero = () => 5;

// h. Pruebas asíncronas con Promesas (resolves y rejects)
const promesaExitosa = () => Promise.resolve("Operación exitosa");
const promesaFallida = () => Promise.reject("Hubo un error");


module.exports = {
    sumarDiez,
    obtenerUsuario,
    retornarNulo,
    retornarIndefinido,
    retornarDefinido,
    obtenerSaludo,
    obtenerFrutas,
    obtenerNumero,
    promesaExitosa,
    promesaFallida
};