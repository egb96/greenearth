import { UserCredential, signInWithEmailAndPassword } from "firebase/auth";
import { appAuth } from "../../firebase";
import { FirebaseError } from "firebase/app";

type LogInProps = {
    email: string;
    password: string;
}

//TODO: exportar a fichero externo
export enum LoginErrors {
    INVALID_EMAIL = "auth/invalid-email",
    USER_DISABLED = "auth/user-disabled",
    NOT_FOUND = "auth/user-not-found",
    WRONG_PASSWORD = "auth/wrong-password"
}

type LoginResult = {
    success: boolean;
    //TODO cambiar nombre para evitar confusion con Excepción
    error?: string;
}

export const loginUser = async ({ email, password }: LogInProps): Promise<LoginResult> => {
    try {
        await signInWithEmailAndPassword(appAuth, email, password);
    } catch (error) {
        if (error instanceof FirebaseError) {
            switch (error.code) {
                case LoginErrors.INVALID_EMAIL:
                    return {
                        success: false,
                        error: "Email incorrecto"
                    }
                case LoginErrors.USER_DISABLED:
                    return {
                        success: false,
                        error: "Usuario deshabilitado"
                    }
                case LoginErrors.NOT_FOUND:
                    return {
                        success: false,
                        error: "Usuario no encontrado"
                    }
                case LoginErrors.WRONG_PASSWORD:
                    return {
                        success: false,
                        error: "Contraseña incorrecta"
                    }
            }
        }
    }

    return {
        success: true
    }
}