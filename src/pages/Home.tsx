import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonInput, IonButton, IonCard, IonCardContent, IonGrid, IonRow, IonCol, IonAvatar } from '@ionic/react';
import { VStack, Link } from '@chakra-ui/react';
import { useState } from 'react';
import { ROUTES } from '../utils/routes';

const Home: React.FC = () => {

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle class='ion-text-center'>TFG GREENEARTH</IonTitle>
        </IonToolbar>
      </IonHeader>

      <IonContent >
        <IonGrid fixed={true}>
          <IonRow>
            <IonCol>
              <IonAvatar style={{
              }}>
                {/*<Link to="/home"><img src='../../img/logo.png'/></Link>*/}
                {/*<img src='../../img/logo.png' />*/}
              </IonAvatar>
            </IonCol>
          </IonRow >
          <IonRow >
            <IonCol >
              <VStack>
                <Link href={ROUTES.CREATE_INCIDENCES}>Crear Incidencia</Link>
                <Link href={ROUTES.LOGIN}>Iniciar sesión</Link>
                <p className="ion-text-center">¿Quiere ser un colaborador? <Link href={ROUTES.REGISTER}>Registrarse</Link></p>
              </VStack>
            </IonCol>
          </IonRow>
        </IonGrid>
      </IonContent>
    </IonPage>
  );
};

export default Home;


