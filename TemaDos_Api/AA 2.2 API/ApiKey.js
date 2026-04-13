// POR ARIEL ALONSO GONGORA TZIU
import axios from "axios";

const obtenerClima = async () => {
    try {
        const respuesta = await axios.get(
            "https://api.openweathermap.org/data/2.5/weather",
            {
                params: {
                    q: "Cancun",
                    appid: "77aab164104a0b722e334e135725b407",
                    units: "metric"
                }
            }
        );

        console.log("Datos del clima:", respuesta.data);

    } catch (error) {
        console.error("Error:", error.response?.data || error.message);
    }
};

obtenerClima();