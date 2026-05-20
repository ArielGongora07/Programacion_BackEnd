//ARIEL ALONSO GONGORA TZIU
const {
    sumarDiez, obtenerUsuario, retornarNulo, retornarIndefinido, retornarDefinido,
    obtenerSaludo, obtenerFrutas, obtenerNumero, promesaExitosa, promesaFallida
} = require('./matchers');

// a. Igualdad exacta con toBe
test('10 + 10 es igual a 20', () => {
    expect(sumarDiez(10)).toBe(20);
});

// b. Comparación de objetos con toEqual
// Nota: toBe falla con objetos porque verifica espacio en memoria, toEqual verifica el contenido.
test('El usuario debe llamarse Juan y tener 25 años', () => {
    const usuarioEsperado = { nombre: 'Juan', edad: 25 };
    expect(obtenerUsuario()).toEqual(usuarioEsperado);
});

// c. Valores nulos, indefinidos y definidos
test('Verifica valores null, undefined y definidos', () => {
    expect(retornarNulo()).toBeNull();
    expect(retornarIndefinido()).toBeUndefined();
    expect(retornarDefinido()).toBeDefined();
});

// d. Comparaciones numéricas
test('Compara números (mayor, menor, igual)', () => {
    const valor = 15;
    expect(valor).toBeGreaterThan(10);           
    expect(valor).toBeLessThan(20);              
    expect(valor).toBeGreaterThanOrEqual(15);    
});

// e. Coincidencia de cadenas con toMatch (acepta expresiones regulares)
test('El saludo debe contener la palabra "Mundo"', () => {

    expect(obtenerSaludo()).toMatch(/Mundo/);
});

// f. Verificación de Contenido en Arrays con toContain
test('El arreglo de frutas debe contener una "pera"', () => {
    expect(obtenerFrutas()).toContain('pera');
});

// g. Negación de Matchers con .not.toBe
test('El número no debe ser igual a 10', () => {
    expect(obtenerNumero()).not.toBe(10);
});

// h. Pruebas asíncronas con Promesas (.resolves y .rejects)
test('La promesa debe resolverse con éxito', () => {
    // Al probar promesas, SIEMPRE debes retornar (return) la expectativa
    return expect(promesaExitosa()).resolves.toBe("Operación exitosa");
});

test('La promesa debe ser rechazada con error', () => {
    return expect(promesaFallida()).rejects.toBe("Hubo un error");
});