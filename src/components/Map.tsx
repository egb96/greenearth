import { GoogleMap, Marker, useJsApiLoader } from '@react-google-maps/api';
import { MAPS_API_KEY } from '../environment';


export type Coordenadas = {
    latitud: number,
    longitud: number
}

const SimpleMap = ({ latitud, longitud }: Coordenadas) => {
    const containerStyle = {
        width: '100%',
        height: '100%'
    };

    const center = {
        lat: latitud,
        lng: longitud
    };

    const { isLoaded } = useJsApiLoader({
        id: 'google-map-script',
        googleMapsApiKey: MAPS_API_KEY
    })

    return isLoaded ? (
        <GoogleMap
            mapContainerStyle={containerStyle}
            center={center}
            zoom={10}
        >
            <Marker
                position={center}
            />
        </GoogleMap>
    ) : <></>



}

export default SimpleMap