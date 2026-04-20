// hecho por Ariel Alonso Gongora Tziu

// Importamos las librerías necesarias
import express from "express"; // Framework para crear el servidor web
import axios from "axios";     // Librería para hacer peticiones HTTP a APIs

// Creamos la aplicación de Express
const app = express();

// Definimos el puerto donde correrá el servidor
const port = 3000;

// Configuramos EJS como motor de vistas (para renderizar HTML dinámico)
app.set("view engine", "ejs");

// Indicamos que la carpeta "public" contendrá archivos estáticos (CSS, imágenes, etc.)
app.use(express.static("public"));

// Definimos la ruta principal "/"
app.get("/", async (req, res) => {
  try {
    // Realizamos una petición GET a la API de Rick and Morty
    const result = await axios.get("https://rickandmortyapi.com/api/character");

    // Generamos un número aleatorio para seleccionar un personaje distinto cada vez
    const randomIndex = Math.floor(Math.random() * result.data.results.length);

    // Seleccionamos un personaje aleatorio del arreglo de resultados
    const character = result.data.results[randomIndex];

    // Mostramos en consola SOLO el personaje que se está mostrando en la web
    console.log("Personaje mostrado:");
    console.log(JSON.stringify(character, null, 2));

    // Renderizamos la vista "index.ejs" y enviamos los datos al frontend
    res.render("index", {
      name: character.name,       // Nombre del personaje
      image: character.image,     // URL de la imagen
      species: character.species, // Especie
      status: character.status,   // Estado (vivo, muerto, etc.)
    });

  } catch (error) {
    // En caso de error, lo mostramos en consola
    console.log("ERROR:");
    console.log(error.response?.data || error.message);

    // Enviamos un mensaje de error al navegador
    res.status(500).send("Error al obtener datos");
  }
});

// Iniciamos el servidor en el puerto definido
app.listen(port, () => {
  console.log(`Servidor corriendo en http://localhost:${port}`);
});