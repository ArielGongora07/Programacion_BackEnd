// POR ARIEL ALONSO GONGORA TZIU
import axios from "axios";

const login = async () => {
    try {
        const respuesta = await axios.post(
            "https://reqres.in/api/login",
            {
                email: "eve.holt@reqres.in",
                password: "pistol"
            }
        );

        console.log("Token obtenido:", respuesta.data.token);

    } catch (error) {
        console.log("Error:", error.response?.data || error.message);
    }
};

login();