import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonButtons, IonBackButton } from '@ionic/react';
import RegisterForm from '../components/RegisterForm';

const Register: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonButtons slot="start">
            <IonBackButton defaultHref='/'></IonBackButton>
          </IonButtons>
          <IonTitle >Registrese</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <RegisterForm />
      </IonContent>
    </IonPage>
  );
};

export default Register;