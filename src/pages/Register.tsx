import { IonBackButton, IonButtons, IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import { Link } from 'react-router-dom';
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
        <p>¿Ya tienes una cuenta? <Link to="/login">Inicia sesión</Link></p>
      </IonContent>
    </IonPage>
  );
};

export default Register;