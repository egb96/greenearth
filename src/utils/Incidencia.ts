
import { Timestamp } from 'firebase/firestore';
import { Coordenadas } from '../components/Map';

export type Incidencia = {
    email: string | null | undefined
    descripcion: string
    fecha: Timestamp
    resuelto: boolean
    ubicacion: Coordenadas
    imagenes: string
}

export type ReturnIncidencia = {
    id: string
    email: string | null | undefined
    descripcion: string
    fecha: Timestamp
    resuelto: boolean
    ubicacion: Coordenadas
    imagenes: string
}