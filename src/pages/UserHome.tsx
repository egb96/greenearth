import { IonButton, IonContent, IonImg, IonPage, IonText } from '@ionic/react';
import { ROUTES } from '../utils/routes';
import { Link } from 'react-router-dom';
import "./styles.css";
import { appAuth, appDB } from '../firebase/firebase';
import LogoutButton from '../components/LogoutButton';

const UserHome: React.FC = () => {
    const cabecera = "<h1>Bienbenido " + appAuth.currentUser?.email + "</h1>"
    return (
        <IonPage>
            <IonContent>
                <div className='center'>
                    <IonImg src='img\logo.png' />
                    <IonText color="primary">
                        Bienvenido
                    </IonText>
                    <Link to={ROUTES.CREATE_INCIDENCES}>
                        <IonButton>Crear Incidencia</IonButton>
                    </Link>
                    <Link to={ROUTES.RESOLVE_INCIDENCES}>
                        <IonButton color="warning">Resolver Incidencias</IonButton>
                    </Link>
                    <LogoutButton />
                </div>
            </IonContent>
        </IonPage >
    );
};

export default UserHome;