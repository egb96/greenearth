import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonInput, IonButton, IonCard, IonCardContent } from '@ionic/react';
import { useState } from 'react';
import { loginUser, LoginErrors } from '../firebase/services/auth/login';

const Login: React.FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState<string | undefined>('')

  async function handleClick(e: any) {
    e.preventDefault();
    console.log(email + password);
    const { success, error } = await loginUser({ email, password })

    if (success) {
      console.log("Ajjaj que loco, funsiona")
    }
    else {
      console.log(error)
      setErrorMessage(error)
    }

  }

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle className='ion-text-center'>Iniciar sesión</IonTitle>
        </IonToolbar>
      </IonHeader>

      <IonContent >
        <IonInput type="email" label="Email" labelPlacement="floating" fill="outline" onIonChange={(e: any) => { setEmail(e.target.value) }}></IonInput>
        <IonInput type="password" label="Contraseña" labelPlacement="floating" fill="outline" onIonChange={(e: any) => { setPassword(e.target.value) }}></IonInput>
        <IonButton onClick={handleClick}>Iniciar sesión</IonButton>
      </IonContent>
    </IonPage>
  );
};

export default Login;