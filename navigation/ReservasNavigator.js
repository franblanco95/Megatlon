import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { ReservasScreen } from '../screens/Reservas/ReservasScreen';
import { DetailScreen } from '../screens/Reservas/DetailScreen';
import InfoScreen from '../screens/Home/InfoScreen'
import InfoIcon from '../components/InfoIcon';
import CartIcon from '../components/CartIcon';

export const ReservasNavigator = () => {

    const Stack = createNativeStackNavigator();

    return (
        <Stack.Navigator
            screenOptions={{
                headerStyle: {
                    backgroundColor: '#161819',
                },
                headerTintColor: 'white',
                headerTitleStyle: { fontWeight: 'bold' },
                headerTitleAlign: 'center',
            }}>

            <Stack.Screen
                name="RESERVAS"
                component={ReservasScreen}
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
                name="Detail"
                component={DetailScreen}
                options={({ route }) => ({ title: route.params.name })}
            />

            {/* <Stack.Screen
                name="Info"
                component={InfoScreen}
            /> */}

        </Stack.Navigator>
    )


}
