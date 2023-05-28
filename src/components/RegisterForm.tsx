import { IonInput, IonButton, IonItem, IonText } from '@ionic/react';
import { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { registerUser, RegisterErrors } from '../firebase/services/auth/register';
import { useForm } from "react-hook-form";

// TODO Validar repetición de contraseña y notificaciones de error

const RegisterForm: React.FC = () => {
    const { register, formState: { errors }, handleSubmit } = useForm();
    const [errorMessage, setErrorMessage] = useState('')
    const history = useHistory()

    async function registrar(data: any) {
        const { success, error } = await registerUser({ email: data.email, password: data.password })

        if (success) {
            history.push("/")
        }

        if (error && error === RegisterErrors.EMAIL_ALREADY_IN_USE) {
            setErrorMessage("Email en uso")
        }

    }

    return (
        <form onSubmit={handleSubmit(registrar)} className='ion-padding'>
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
            <IonItem>
                <IonInput {...register('checkPassword', {
                    required: true
                })} type="password" label="Contraseña" labelPlacement='floating' />
                {errors.checkPassword?.type === 'required' && <IonText color="danger">Repita la contraseña</IonText>}
            </IonItem>
            <IonButton className="ion-margin-top" type="submit" expand="block">Registrarse</IonButton>
            <IonItem>
                <p>¿Ya tienes una cuenta? <Link to="/login">Inicia sesión</Link></p>
            </IonItem>
        </form>
    );
};

export default RegisterForm;