import { StatusBar } from 'expo-status-bar';

var firebase = require('firebase/app');



const firebaseConfig = {
  apiKey: "AIzaSyDOobM2YwutUJxcch8CurCqJBdbIFc6FkA",
  authDomain: "fir-project-d2e3e.firebaseapp.com",
  projectId: "fir-project-d2e3e",
  storageBucket: "fir-project-d2e3e.appspot.com",
  messagingSenderId: "826916131031",
  appId: "1:826916131031:web:999ea1362c113ca947a092",
  measurementId: "G-ZW4338BN1K"
};


// if(firebase.apps.length === 0) {
//   firebase.initialiezeApp(firebaseConfig)
  
// }

import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'

import LandingScreen from './components/auth/Landing';
import RegisterScreen from './components/auth/Register';


const Stack = createStackNavigator();
export default function App() {
  return (
    <NavigationContainer>
    <Stack.Navigator initialRouteName="Landing">
      <Stack.Screen name = "Landing" component={LandingScreen} option={{ headerShown: false }} />
      <Stack.Screen name = "Register" component={RegisterScreen}  />

    </Stack.Navigator>
    </NavigationContainer>

  );
}


