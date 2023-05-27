import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonInput, IonButton, IonCard, IonCardContent } from '@ionic/react';
import { HStack, VStack, Box, Textarea, Button } from '@chakra-ui/react';
import { isPlatform } from '@ionic/react';

// import { Preferences } from '@capacitor/preferences';
// import { Capacitor } from '@capacitor/core';
// import usePhotoGallery from '../hooks/usePhotoGallery';
import { Camera, CameraResultType } from "@capacitor/camera";
import { useState } from "react";



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
                    <IonTitle class='ion-text-center'>Crear Incidencias</IonTitle>
                </IonToolbar>
            </IonHeader>
            <IonContent >
                <VStack w={"full"} h='40px' color={"blackAlpha.800"} alignItems={'center'} paddingX={10}>
                    <HStack w={"full"} justifyContent={'center'}>
                        <Button bg={'red.500'} onClick={takePicture}>
                            Cámara
                        </Button>
                        <Button bg={'blue.500'}>
                            a
                        </Button>
                    </HStack>
                    <Textarea placeholder='Here is a sample placeholder' />
                    <Button colorScheme='teal' size="lg" paddingY={'8'}>
                        Enviar Incidencia
                    </Button>
                </VStack>
            </IonContent>
        </IonPage >
    );
};

export default CreateIncidences;