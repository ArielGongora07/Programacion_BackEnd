//Hecho por Ariel Alonso Gongora Tziu

import express from "express";
import bodyParser from "body-parser";

const app = express();
const PORT = 3000;

// a) Leer JSON como texto
const recetaJSON = `
[
  {
    "id": "0001",
    "tipo": "taco",
    "nombre": "Taco lechon",
    "precio": 20.00,
    "ingredientes": {
      "proteina": {
        "nombre": "Puerco",
        "preparacion": "Horneado"
      },
      "salsa": {
        "nombre": "Tomate verde",
        "picor": "Medio"
      }
    },
    "acompañamientos": [
      {
        "nombre": "Cebolla",
        "cantidad": "1 cucharada",
        "ingredientes": ["Cebolla blanca", "Cilantro", "Naranja", "Sal"]
      },
      {
        "nombre": "Guacamole",
        "cantidad": "2 cucharadas",
        "ingredientes": ["Aguacate", "Jugo de limón", "Sal", "Cebolla", "Cilantro"]
      }
    ]
  },
  {
    "id": "0002",
    "tipo": "taco",
    "nombre": "Taco cochinita pibil",
    "precio": 22.00,
    "ingredientes": {
      "proteina": {
        "nombre": "Cerdo",
        "preparacion": "Adobado y horneado"
      },
      "salsa": {
        "nombre": "Habanero",
        "picor": "Alto"
      }
    },
    "acompañamientos": [
      {
        "nombre": "Cebolla morada",
        "cantidad": "1 cucharada",
        "ingredientes": ["Cebolla morada", "Vinagre", "Orégano", "Sal"]
      },
      {
        "nombre": "Limón",
        "cantidad": "1 pieza",
        "ingredientes": ["Limón"]
      }
    ]
  },
  {
    "id": "0003",
    "tipo": "taco",
    "nombre": "Taco de pollo",
    "precio": 18.00,
    "ingredientes": {
      "proteina": {
        "nombre": "Pollo",
        "preparacion": "Asado"
      },
      "salsa": {
        "nombre": "Roja",
        "picor": "Medio"
      }
    },
    "acompañamientos": [
      {
        "nombre": "Lechuga",
        "cantidad": "1 porción",
        "ingredientes": ["Lechuga", "Sal"]
      },
      {
        "nombre": "Crema",
        "cantidad": "1 cucharada",
        "ingredientes": ["Crema", "Sal"]
      }
    ]
  },
  {
    "id": "0004",
    "tipo": "taco",
    "nombre": "Taco de res",
    "precio": 25.00,
    "ingredientes": {
      "proteina": {
        "nombre": "Res",
        "preparacion": "A la plancha"
      },
      "salsa": {
        "nombre": "Verde",
        "picor": "Bajo"
      }
    },
    "acompañamientos": [
      {
        "nombre": "Pico de gallo",
        "cantidad": "2 cucharadas",
        "ingredientes": ["Jitomate", "Cebolla", "Cilantro", "Limón", "Sal"]
      },
      {
        "nombre": "Frijoles",
        "cantidad": "1 porción",
        "ingredientes": ["Frijoles", "Sal"]
      }
    ]
  }
]
  `

// b) Convertir a objeto JS
const recetasTacos = JSON.parse(recetaJSON);

// c) Servir archivos estáticos
app.use(express.static("public"));

// d) Middleware bodyParser
app.use(bodyParser.json());

// e) Endpoint GET
app.get("/receta/:type", (req, res) => {
  const elegirTaco = recetasTacos.find(
    (r) =>
      r.ingredientes.proteina.nombre.toLowerCase() ===
      req.params.type.toLowerCase()
  );

  res.json(elegirTaco || { error: "Receta no encontrada" });
});

// Iniciar servidor
app.listen(PORT, () => {
  console.log(`Servidor en http://localhost:${PORT}`);
});