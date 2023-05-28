import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import LoginForm from '../components/LoginForm';

const Login: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle className='ion-text-center'>Iniciar sesión</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent >
        <LoginForm />
      </IonContent>
    </IonPage>
  );
};

export default Login;