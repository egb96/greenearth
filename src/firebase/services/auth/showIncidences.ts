import { CollectionReference, collection, getDocs } from "firebase/firestore";
import { appDB } from "../../firebase";
import { ReturnIncidencia } from "../../../utils/Incidencia";
import { fromLatLng } from "react-geocode";
import { MAPS_API_KEY } from "../../../environment";

export const showIncidences = async (): Promise<Array<ReturnIncidencia>> => {
    var incidencias = Array<ReturnIncidencia>()
    try {
        const querySnapshot = await getDocs(collection(appDB, "incidencias"));

        querySnapshot.forEach((doc) => {
            var datos = doc.data()
            var tiempo = Intl.DateTimeFormat('es-ES').format(datos.fecha)

            fromLatLng(datos.data.ubicacion.latitud, datos.data.ubicacion.longitud, MAPS_API_KEY)
                .then(({ results }) => {
                    var direccion = results[0].formatted_address;
                    var incidencia: ReturnIncidencia = {
                        id: doc.id,
                        email: datos.data.email,
                        descripcion: datos.data.descripcion,
                        fecha: tiempo,
                        resuelto: datos.data.resuelto,
                        ubicacion: direccion,
                        imagenes: datos.data.imagenes
                    };

                    incidencias.push(incidencia)
                })

        });
    } catch (error) {
        console.log(error)
    }

    return incidencias
}
