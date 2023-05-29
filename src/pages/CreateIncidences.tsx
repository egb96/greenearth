import { IonContent, IonImg, IonHeader, IonPage, IonTitle, IonToolbar, IonInput, IonButton, IonCard, IonCardContent, IonButtons, IonBackButton, IonIcon } from '@ionic/react';
import { isPlatform } from '@ionic/react';

// import { Preferences } from '@capacitor/preferences';
// import { Capacitor } from '@capacitor/core';
// import usePhotoGallery from '../hooks/usePhotoGallery';
import { Camera, CameraResultType } from "@capacitor/camera";
import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectFade, EffectCoverflow, Pagination, EffectCreative } from "swiper";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "./styles.css";
// import required modules
// import "@ionic/react/css/ionic-swiper.css";
import "swiper/css/effect-fade";
import "swiper/css/effect-creative";

// const { takePhoto } = usePhotoGallery()

// function takePicture() {
//     takePhoto()
// }


const CreateIncidences: React.FC = () => {
    const [imgSrcs, setImgSrcs] = useState<Array<string | undefined>>([""]);

    const takePicture = async () => {
        const image = await Camera.getPhoto({
            quality: 100,
            allowEditing: true,
            resultType: CameraResultType.Uri,
        });

        // image.webPath will contain a path that can be set as an image src.
        // You can access the original file using image.path, which can be
        // passed to the Filesystem API to read the raw data of the image,
        // if desired (or pass resultType: CameraResultType.Base64 to getPhoto)
        var imageUrl = image.webPath;

        setImgSrcs([...imgSrcs, imageUrl]);
    };

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


                <IonButton onClick={takePicture}>
                    Cámara
                </IonButton>
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
                            <IonImg src={src} alt="Aqui irá una foto" />
                        </SwiperSlide>
                    ))}
                </Swiper>
                <IonButton>
                    a
                </IonButton>

            </IonContent>
        </IonPage >
    );
};

export default CreateIncidences;