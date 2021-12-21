import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { Button } from 'react-native';
import { MegatlonLogo } from '../components/MegatlonLogo';
import { ReservasScreen } from '../screens/Reservas/ReservasScreen';
import { DetailScreen } from '../screens/Reservas/DetailScreen';
import InfoIcon from '../components/InfoIcon';
import CartIcon from '../components/CartIcon';
import { useNavigation } from '@react-navigation/native';

export const ReservasNavigator = () => {

    const Stack = createNativeStackNavigator();

    const navigation = useNavigation();

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
                        <InfoIcon navigation={navigation} />
                    ),
                    headerRight: () => (
                        <CartIcon navigation={navigation} />
                    )

                }}
            />

            <Stack.Screen
                name="Detail"
                component={DetailScreen}
                options={({ route }) => ({ title: route.params.name })}


            />
        </Stack.Navigator>
    )


}
