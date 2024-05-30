import { IonButton, IonContent, IonImg, IonPage } from '@ionic/react';

import { ROUTES } from '../utils/routes';

import { Link } from 'react-router-dom';
import "./styles.css";

const Home: React.FC = () => {
  return (
    <IonPage>
      <IonContent>
        <div className='center'>
          <IonImg src='img\logo.png' />
          <Link to={ROUTES.CREATE_INCIDENCES}>
            <IonButton>Crear Incidencia</IonButton>
          </Link>
          <Link to={ROUTES.LOGIN}>
            <IonButton color="warning">Iniciar sesión</IonButton>
          </Link>
          <p className="ion-text-center">¿Quiere ser un colaborador? <Link to={ROUTES.REGISTER}>Registrarse</Link></p>
        </div>
      </IonContent>
    </IonPage >
  );
};

export default Home;


