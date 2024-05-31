import { IonContent, IonImg, IonHeader, IonPage, IonTitle, IonToolbar, IonInput, IonButton, IonCard, IonCardContent, IonButtons, IonBackButton, IonIcon } from '@ionic/react';
import { isPlatform } from '@ionic/react';
import SimpleMap, { Coordenadas } from '../components/Map';
import { Timestamp, doc, setDoc } from 'firebase/firestore';
import { Link, useHistory } from 'react-router-dom';
import { useForm } from "react-hook-form";
import { registerUser, RegisterErrors } from '../firebase/services/auth/register';
import { appAuth, appDB } from '../firebase/firebase';
import { Camera, CameraResultType } from "@capacitor/camera";
import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectFade, EffectCoverflow, Pagination, EffectCreative } from "swiper";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "./styles.css";
import "swiper/css/effect-fade";
import "swiper/css/effect-creative";

const CreateIncidences: React.FC = () => {

    type Incidencia = {
        email: string | null | undefined
        descripcion: string
        fecha: Timestamp
        resuelto: boolean
        ubicacion: Coordenadas
    }

    const [imgSrcs, setImgSrcs] = useState<Array<string | undefined>>(["./img/logo.png"]);
    const { register, formState: { errors }, handleSubmit } = useForm();
    const [errorMessage, setErrorMessage] = useState('')
    const history = useHistory()
    const [coords, setCoords] = useState<Coordenadas>({ latitud: 0, longitud: 0 });

    const takePicture = async () => {
        const image = await Camera.getPhoto({
            quality: 100,
            allowEditing: true,
            resultType: CameraResultType.Uri,
        });
        var imageUrl = image.webPath;
        setImgSrcs([...imgSrcs, imageUrl]);
    }

    const sendData = async (data: Incidencia) => {
        console.log(data)
        if (data.email == null || data.email == undefined) {
            data.email = "Anónimo";
        }
        await setDoc(doc(appDB, "incidencias", "Test2"),
            data
        );

    }

    return (
        <IonPage>
            <IonHeader>
                <IonToolbar>
                    <IonButtons slot="start">
                        <IonBackButton defaultHref='/'></IonBackButton>
                    </IonButtons>
                    <IonTitle >Crear Incidencias</IonTitle>
                </IonToolbar>
            </IonHeader>
            <IonContent>
                <Swiper
                    grabCursor={true}
                    effect={"creative"}
                    creativeEffect={{
                        prev: {
                            shadow: true,
                            translate: [0, 0, -400],
                        },
                        next: {
                            translate: ["100%", 0, 0],
                        },
                    }}
                    modules={[EffectCreative]}
                    className="mySwiper"
                >
                    {imgSrcs.map((src) => (
                        <SwiperSlide key={src}>
                            <IonImg src={src} alt="Aqui irá una foto" onClick={takePicture} />
                        </SwiperSlide>
                    ))}
                </Swiper>
                <SimpleMap latitud={coords.latitud} longitud={coords.longitud} />
                <IonButton onClick={() => sendData({ email: appAuth.currentUser?.email, descripcion: "", fecha: Timestamp.now(), resuelto: false, ubicacion: coords })}>
                    Enviar incidencia
                </IonButton>

            </IonContent>
        </IonPage >
    );
};

export default CreateIncidences;