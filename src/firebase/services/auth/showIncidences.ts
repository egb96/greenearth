import { CollectionReference, collection, getDocs } from "firebase/firestore";
import { appDB } from "../../firebase";
import { ReturnIncidencia } from "../../../utils/Incidencia";

export const showIncidences = async (): Promise<Array<ReturnIncidencia>> => {
    var incidencias = Array<ReturnIncidencia>()
    const querySnapshot = await getDocs(collection(appDB, "incidencias"));

    querySnapshot.forEach((doc) => {
        //console.log(doc.id, " => ", doc.data());

        var incidencia: ReturnIncidencia = {
            id: doc.id,
            email: doc.data().email,
            descripcion: doc.data().descripcion,
            fecha: doc.data().fecha,
            resuelto: doc.data().resuelto,
            ubicacion: doc.data().ubicacion,
            imagenes: doc.data().imagenes
        };

        incidencias.push(incidencia)

    });

    return incidencias
}
