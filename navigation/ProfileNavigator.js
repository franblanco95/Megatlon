import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { ProfileScreen } from '../screens/Profile/ProfileScreen';
import InfoIcon from '../components/InfoIcon';
import CartIcon from '../components/CartIcon';
import TurnosScreen from '../screens/Profile/TurnosScreen';
import QrScreen from '../screens/Profile/QrScreen';
import IPersonalScreen from '../screens/Profile/IPersonalScreen';

export const ProfileNavigator = () => {

    const Stack = createNativeStackNavigator();

    return (
        <Stack.Navigator
            screenOptions={{
                headerStyle: { backgroundColor: '#161819' },
                headerTintColor: 'white',
                headerTitleStyle: { fontWeight: 'bold' },
                headerTitleAlign: 'center',
            }}>

            <Stack.Screen
                name="PERFIL"
                component={ProfileScreen}
                options={{
                    headerLeft: () => (
                        <InfoIcon />
                    ),
                    headerRight: () => (
                        <CartIcon />
                    )

                }}
            />
            <Stack.Screen
                name="Info Personal"
                component={IPersonalScreen}
            />
            <Stack.Screen
                name="Turnos"
                component={TurnosScreen}
            />
            <Stack.Screen
                name="Qr"
                component={QrScreen}
            />
        </Stack.Navigator>
    )


}
