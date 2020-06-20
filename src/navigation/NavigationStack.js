
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Login from '../screens/Login';
import Home from '../screens/Home';
import {useSelector} from "react-redux";
import {navigationRef} from './NavigationService'
const Stack = createStackNavigator();
function NavStack() {
    const isLoggedIn = useSelector(state=>state.authReducer.isLoggedIn)

    return (
        <Stack.Navigator
            screenOptions={{
                headerTitleAlign: 'center',
                headerStyle: {
                    backgroundColor: 'purple',
                },
                headerTintColor: '#fff',
                headerTitleStyle :{
                    fontWeight: 'bold',
                },
            }}
        >
            {
                isLoggedIn ?
                    (
                        <Stack.Screen
                            name="Home"
                            component={Home}
                            options={{ title: 'Home' }}
                        />
                    ):(
                        <Stack.Screen
                            name="Login"
                            component={Login}
                            options={{ title: 'Login' }}
                        />
                    )
            }


        </Stack.Navigator>
    );
}

export default function App() {
    return (
        <NavigationContainer  ref={navigationRef}>
            <NavStack />
        </NavigationContainer>
    );
}
