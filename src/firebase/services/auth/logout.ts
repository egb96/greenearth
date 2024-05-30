import { signOut } from "firebase/auth";
import { appAuth } from "../../firebase";
import { FirebaseError } from "firebase/app";


export type LogInProps = {
    email: string;
    password: string;
}

type LogOutResult = {
    success: boolean;
    textoError?: string;
}

export const logOutUser = async (): Promise<LogOutResult> => {

    signOut(appAuth)
        .catch((error) => {
            if (error instanceof FirebaseError) {
                return {
                    success: false,
                    textoError: "Error durante el cierre de sesión: " + error.message
                }
            }
        });

    return {
        success: true
    }
}