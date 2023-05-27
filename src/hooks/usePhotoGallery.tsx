import { Camera, CameraResultType, CameraSource, Photo } from '@capacitor/camera';

export default function usePhotoGallery() {
    let photo;
    const takePhoto = async () => {
        photo = await Camera.getPhoto({
            resultType: CameraResultType.Uri,
            source: CameraSource.Camera,
            quality: 100,
        });
    };

    return {
        takePhoto,
        photo
    };
}