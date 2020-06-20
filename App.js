import React, {useEffect} from 'react';
import { StyleSheet, Text, View } from 'react-native';
import AuthEmailPasswordScreen from './src/screens/Login'
import { Provider } from "react-redux"
import { composeWithDevTools } from 'redux-devtools-extension';
import * as firebase from "firebase";
import { store } from "./src/store/configureStore";
import Navigator from "./src/navigation";
import { DefaultTheme, Provider as PaperProvider } from 'react-native-paper';

export default function App() {
    const firebaseConfig = {
        apiKey: "AIzaSyC9LcsHmJ7jMBdqLHVYsJ1nP0J26V-RVFo",
        authDomain: "expo-login-90db4.firebaseapp.com",
        databaseURL: "https://expo-login-90db4.firebaseio.com",
        projectId: "expo-login-90db4",
        storageBucket: "expo-login-90db4.appspot.com",
        messagingSenderId: "393429440360",
        appId: "1:393429440360:web:e40a11a715d4f1dd86e8dd",
        measurementId: "G-PN38TRP7TM"
    };
    useEffect(() => {
        firebase.initializeApp(firebaseConfig)
    }, []);


  return (
      <Provider store={store}>
          {/*<PaperProvider theme={DefaultTheme}>*/}
            <Navigator/>
          {/*</PaperProvider>*/}
      </Provider>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
      width: '100%'
  },
});
