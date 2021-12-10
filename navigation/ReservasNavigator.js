import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { Button } from 'react-native';
import { MegatlonLogo } from '../components/MegatlonLogo';
import { ReservasScreen } from '../screens/Reservas/ReservasScreen';
import { DetailScreen } from '../screens/Reservas/DetailScreen';

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
                name="Home"
                component={ReservasScreen}
                options={{
                    headerTitle: (props) => <MegatlonLogo {...props} />,
                    headerRight: () => (
                        <Button
                            onPress={() => alert('This is a button!')}
                            title="Info"
                            color="red"
                        />
                    ),

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
