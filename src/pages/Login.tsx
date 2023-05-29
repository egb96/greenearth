import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonButtons, IonBackButton } from '@ionic/react';
import LoginForm from '../components/LoginForm';

const Login: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonButtons slot="start">
            <IonBackButton defaultHref='/'></IonBackButton>
          </IonButtons>
          <IonTitle >Iniciar sesión</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent >
        <LoginForm />
      </IonContent>
    </IonPage>
  );
};

export default Login;