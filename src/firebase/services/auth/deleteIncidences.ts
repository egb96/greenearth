import { appDB } from "../../firebase";
import { doc, deleteDoc } from "firebase/firestore";

type DeleteResult = {
    success: boolean;
    textoError?: string;
}

export const deleteIncidences = async (id: string): Promise<DeleteResult> => {

    try {
        await deleteDoc(doc(appDB, "incidencias", id));
    } catch (error) {
        return {
            success: false,
            textoError: "Error al borrar el documento"
        }
    }

    return {
        success: true
    }
}