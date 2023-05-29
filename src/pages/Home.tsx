import { IonContent, IonImg, IonText, IonHeader, IonPage, IonTitle, IonToolbar, IonInput, IonButton, IonCard, IonCardContent, IonGrid, IonRow, IonCol, IonAvatar, IonRouterLink } from '@ionic/react';
import { VStack, Link } from '@chakra-ui/react';
import { useState } from 'react';
import { ROUTES } from '../utils/routes';

import "./styles.css"

const Home: React.FC = () => {

  return (
    <IonPage>
      <IonContent>
        <div className='center'>
          <IonImg src='img\logo.png' />
          <IonRouterLink href={ROUTES.CREATE_INCIDENCES}>
            <IonButton>Crear Incidencia</IonButton>
          </IonRouterLink>
          <IonRouterLink href={ROUTES.LOGIN}>
            <IonButton color="warning">Iniciar sesión</IonButton>
          </IonRouterLink>
          <p className="ion-text-center">¿Quiere ser un colaborador? <IonRouterLink href={ROUTES.REGISTER}>Registrarse</IonRouterLink></p>
        </div>
      </IonContent>
    </IonPage >
  );
};

export default Home;


