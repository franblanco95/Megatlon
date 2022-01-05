import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { ProfileScreen } from '../screens/Profile/ProfileScreen';
import InfoIcon from '../components/InfoIcon';
import CartIcon from '../components/CartIcon';

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

        </Stack.Navigator>
    )


}
