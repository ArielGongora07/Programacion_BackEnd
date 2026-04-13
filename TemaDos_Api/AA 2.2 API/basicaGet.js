// POR ARIEL ALONSO GONGORA TZIU
import axios from "axios";

const obtenerUsuario = async () => {
    try {
        const respuesta = await axios.get('https://reqres.in/api/users/4',{

            headers: {
                'Authorization': 'Basic' + Buffer.from('arielgongora@gmail.com').toString('base64'),
                "x-api-key": "pro_6788824c57bbcb80789d8b69c55deb04811396efdc710eeb56b0af598ceefdc6"
            }
        });
        console.log('Usuario obtenido:', respuesta.data);
    } catch (error) {
        console.error('Error al obtener usuario:', error.response.data);
    }
};

obtenerUsuario();