import { IonContent, IonImg, IonHeader, IonPage, IonTitle, IonToolbar, IonInput, IonButton, IonCard, IonCardContent, IonButtons, IonBackButton, IonIcon, IonItem, IonText } from '@ionic/react';
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
import { List, ListItem } from '@mui/material';


const ResolveIncidences: React.FC = () => {


    const des = "Des Prueba"
    const mail = "Mail Prueba"
    const imagen = "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"

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
                    <>
                        {incidencias.map((element) => (
                            <List>
                                <ListItem >
                                    <IonImg src={`data:image/jpeg;base64,${element.imagenes}`} alt="Aqui irá una foto" />
                                </ListItem>
                                <ListItem>{element.email}</ListItem>
                                <ListItem>{element.fecha}</ListItem>
                                <ListItem>{element.ubicacion}</ListItem>
                                <ListItem>{element.descripcion}</ListItem>
                                <ListItem>
                                    <IonButton onClick={() => removeIncidence(element.id)}>Resolver incidencia</IonButton>
                                </ListItem>
                            </List>
                        ))}
                        <IonButton color="warning" onClick={() => loadIncidences()}>Cargar Incidencias</IonButton>
                    </>
                </Stack>

            </IonContent>
        </IonPage >
    );
};

export default ResolveIncidences;