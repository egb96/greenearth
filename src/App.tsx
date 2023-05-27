import { Redirect, Route, Router } from 'react-router-dom';
import { IonApp, IonRouterOutlet, setupIonicReact } from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';
import LogIn from './pages/Login';
import Register from './pages/Register';
import Home from './pages/Home';
import CreateIncidences from './pages/CreateIncidences';
import { ChakraProvider } from '@chakra-ui/react'

/* Core CSS required for Ionic components to work properly */
import '@ionic/react/css/core.css';

/* Basic CSS for apps built with Ionic */
import '@ionic/react/css/normalize.css';
import '@ionic/react/css/structure.css';
import '@ionic/react/css/typography.css';

/* Optional CSS utils that can be commented out */
import '@ionic/react/css/padding.css';
import '@ionic/react/css/float-elements.css';
import '@ionic/react/css/text-alignment.css';
import '@ionic/react/css/text-transformation.css';
import '@ionic/react/css/flex-utils.css';
import '@ionic/react/css/display.css';
import { ROUTES } from './utils/routes';

/* Theme variables */
//import './theme/variables.css';

setupIonicReact();

const App: React.FC = () => (
  <ChakraProvider>
    <IonApp>
      <IonReactRouter>
        <IonRouterOutlet>
          <Route exact path={ROUTES.HOME}>
            <Home />
          </Route>
          <Route exact path={ROUTES.LOGIN}>
            <LogIn />
          </Route>
          <Route exact path={ROUTES.REGISTER}>
            <Register />
          </Route>
          <Route exact path={ROUTES.CREATE_INCIDENCES}>
            <CreateIncidences />
          </Route>
        </IonRouterOutlet>
      </IonReactRouter>
    </IonApp>
  </ChakraProvider>
);

export default App;
