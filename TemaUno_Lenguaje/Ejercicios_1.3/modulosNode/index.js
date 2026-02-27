//const fs = require('fs'); // Importa la herramienta de sistema de archivos


//fs.writeFile('archivo.txt', 'Hola desde NodeJS', (err) => {
//if (err) throw err;
//console.log('El archivo ha sido creado con éxito.');

//});
const fs = require('fs');

fs.writeFile('archivo.txt', 'Hola desde NodeJS', (err) => {
  if (err) throw err;

  console.log('El archivo ha sido creado con éxito.');

  // Ahora lo leemos
  fs.readFile('archivo.txt', 'utf8', (err, data) => {
    if (err) throw err;

    console.log('Contenido del archivo:');
    console.log(data);
  });
});