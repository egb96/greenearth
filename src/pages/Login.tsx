import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonInput, IonButton, IonCard, IonCardContent } from '@ionic/react';
import { useState } from 'react'; 

const Login: React.FC = () => {
  const [username,setUsername] = useState('');    
  const [password,setPassword] = useState('');


  function handleClick(){
    console.log({username,password});
  }

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle class='ion-text-center'>Iniciar sesión</IonTitle>
        </IonToolbar>
      </IonHeader>

      <IonContent >
            <IonInput type="email" label="Email" labelPlacement="floating" fill="outline" onIonChange={(e: any) => {setUsername(e.target.value)}}></IonInput>
            <IonInput type="password" label="Contraseña" labelPlacement="floating" fill="outline" onIonChange={(e: any) => {setPassword(e.target.value)}}></IonInput>
            <IonButton onClick={handleClick}>Iniciar sesión</IonButton>        
      </IonContent>
    </IonPage>
  );
};

export default Login;