import { UserCredential, createUserWithEmailAndPassword } from "firebase/auth";
import { appAuth } from "../../firebase";
import { FirebaseError } from "firebase/app";

type RegisterProps = {
    email: string;
    password: string;
}

//TODO: exportar a fichero externo
export enum RegisterErrors {
    EMAIL_ALREADY_IN_USE = "auth/email-already-in-use",
}

type RegisterResult = {
    success: boolean;
    error?: RegisterErrors;
}

export const registerUser = async ({ email, password }: RegisterProps): Promise<RegisterResult> => {
    try {
        await createUserWithEmailAndPassword(appAuth, email, password);
    } catch (error) {
        if (error instanceof FirebaseError) {
            if (error.code === RegisterErrors.EMAIL_ALREADY_IN_USE) {
                return {
                    success: false,
                    error: RegisterErrors.EMAIL_ALREADY_IN_USE
                }
            }
        }
    }
    return {
        success: true
    }
}
