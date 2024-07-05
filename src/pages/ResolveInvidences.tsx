import { IonContent, IonImg, IonHeader, IonPage, IonTitle, IonToolbar, IonInput, IonButton, IonCard, IonCardContent, IonButtons, IonBackButton, IonIcon, IonItem } from '@ionic/react';
import { isPlatform } from '@ionic/react';
import SimpleMap, { Coordenadas } from '../components/Map';
import { Timestamp, doc, setDoc } from 'firebase/firestore';
import { Link, useHistory } from 'react-router-dom';
import { useForm } from "react-hook-form";
import { registerUser, RegisterErrors } from '../firebase/services/auth/register';
import { appAuth, appDB, storage } from '../firebase/firebase';
import { Camera, CameraResultType } from "@capacitor/camera";
import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectFade, EffectCoverflow, Pagination, EffectCreative } from "swiper";
import { ref, uploadString, uploadBytes } from "firebase/storage";
import Stack from '@mui/material/Stack';
import { Incidencia, ReturnIncidencia } from '../utils/Incidencia';
import { showIncidences } from '../firebase/services/auth/showIncidences';

import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "./styles.css";
import "swiper/css/effect-fade";
import "swiper/css/effect-creative";
import { deleteIncidences } from '../firebase/services/auth/deleteIncidences';


const ResolveIncidences: React.FC = () => {

    const [incidencias, setIncidencias] = useState<Array<ReturnIncidencia>>([]);

    const removeIncidence = async (id: string) => {
        await deleteIncidences(id)
        await loadIncidences()
    }

    const loadIncidences = async () => {
        showIncidences().then((value) => {
            setIncidencias(value);
        })
        console.log(incidencias)
    }

    return (
        <IonPage>
            <IonHeader>
                <IonToolbar>
                    <IonButtons slot="start">
                        <IonBackButton defaultHref='/home'></IonBackButton>
                    </IonButtons>
                    <IonTitle >Resolver Incidencias</IonTitle>
                </IonToolbar>
            </IonHeader>
            <IonContent>
                <Stack spacing={2}>
                    {incidencias.map((element) => (
                        <>
                            <IonItem key={element.id}>
                                {element.id}
                            </IonItem>
                            <IonButton onClick={() => removeIncidence(element.id)}>
                                Cerrar incidencia
                            </IonButton>
                        </>
                    ))}
                </Stack>
                <IonButton onClick={() => loadIncidences()}>Cargar Incidencias</IonButton>
            </IonContent>
        </IonPage >
    );
};

export default ResolveIncidences;