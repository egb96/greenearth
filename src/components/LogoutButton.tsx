import { logOutUser } from '../firebase/services/auth/logout';
import { useHistory } from 'react-router-dom';

const LogoutButton: React.FC = () => {
    const history = useHistory();
    async function closeSession() {
        const { success, textoError } = await logOutUser()
        if (success) {
            history.push("/");
        }
        else {
            console.log(textoError)
        }
    }

    return (
        <p className="ion-text-center" onClick={(e: any) => closeSession()}>Cerrar sesión</p>
    );
};

export default LogoutButton;