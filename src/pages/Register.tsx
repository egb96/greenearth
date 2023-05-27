import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonInput, IonButton } from '@ionic/react';
import { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { registerUser, RegisterErrors } from '../firebase/services/auth/register';
import { VStack } from '@chakra-ui/react';

const Register: React.FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [cPassword, setCPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('')

  const [isTouched, setIsTouched] = useState(false);
  const [isValid, setIsValid] = useState<boolean>();

  const history = useHistory()

  const validateEmail = (email: string) => {
    return email.match(
      /^(?=.{1,254}$)(?=.{1,64}@)[a-zA-Z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-zA-Z0-9!#$%&'*+/=?^_`{|}~-]+)*@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/
    );
  };

  const validate = (ev: Event) => {
    const value = (ev.target as HTMLInputElement).value;

    setIsValid(undefined);

    if (value === '') return;

    validateEmail(value) !== null ? setIsValid(true) : setIsValid(false);
  };

  const markTouched = () => {
    setIsTouched(true);
  };


  async function handleClick() {
    console.log({ email, password });
    const { success, error } = await registerUser({ email, password })

    if (success) {
      history.push("/")
    }

    if (error && error === RegisterErrors.EMAIL_ALREADY_IN_USE) {
      setErrorMessage("Email en uso")
    }

  }

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle class='ion-text-center'>Registrese</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <VStack marginY={40}>
          <IonInput className={`${isValid && 'ion-valid'} ${isValid === false && 'ion-invalid'} ${isTouched && 'ion-touched'}`} type="email" label="Email" labelPlacement="floating" fill="outline"
            helperText="Enter a valid email"
            errorText="Invalid email"
            onIonInput={(event) => validate(event)}
            onIonBlur={() => markTouched()}
            onIonChange={(e: any) => { setEmail(e.target.value) }}>
          </IonInput>
          <IonInput type="password" label="Contraseña" labelPlacement="floating" fill="outline" onIonChange={(e: any) => { setPassword(e.target.value) }}></IonInput>
          <IonInput type="password" label="Confirmar contraseña" labelPlacement="floating" fill="outline" onIonChange={(e: any) => { setCPassword(e.target.value) }}></IonInput>
          <IonButton onClick={handleClick}>Registrarse</IonButton>
          <p>¿Ya tienes una cuenta? <Link to="/login">Inicia sesión</Link></p>
          <p>{errorMessage}</p>
        </VStack>
      </IonContent>
    </IonPage>
  );
};

export default Register;