import { IonInput, IonButton, IonItem, IonText } from '@ionic/react';
import { useState } from 'react';
import { useForm } from "react-hook-form";
import { loginUser, LoginErrors, LogInProps } from '../firebase/services/auth/login';

const LoginForm: React.FC = () => {
    const { register, formState: { errors }, handleSubmit } = useForm();
    const [errorMessage, setErrorMessage] = useState<string | undefined>('')

    async function submit(data: any) {
        const { success, textoError } = await loginUser({ email: data.email, password: data.password })
        if (success) {
            console.log("Ajjaj que loco, funsiona")
        }
        else {
            //TODO Implementar Notificación informando del error
            console.log(textoError)
            setErrorMessage(textoError)
        }
    }

    return (
        <form onSubmit={handleSubmit(submit)} className="ion-padding">
            <IonItem>
                <IonInput {...register('email', {
                    required: true,
                    pattern: /^(?=.{1,254}$)(?=.{1,64}@)[a-zA-Z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-zA-Z0-9!#$%&'*+/=?^_`{|}~-]+)*@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/
                })} label='Email' labelPlacement='floating' />
                {errors.email?.type === 'required' && <IonText color="danger">Email obligatorio</IonText>}
                {errors.email?.type === 'pattern' && <IonText color="danger">Formato de email no reconocido</IonText>}
            </IonItem>
            <IonItem>
                <IonInput {...register('password', {
                    required: true
                })} type="password" label="Contraseña" labelPlacement='floating' />
                {errors.password?.type === 'required' && <IonText color="danger">Contraseña obligatoria</IonText>}
            </IonItem>
            <IonButton className="ion-margin-top" type="submit" expand="block">Iniciar Sesión</IonButton>
        </form>
    );
};

export default LoginForm;