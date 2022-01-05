import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { MegatlonLogo } from '../components/MegatlonLogo';
import CartIcon from '../components/CartIcon';
import InfoIcon from '../components/InfoIcon';
import { HomeScreen } from '../screens/Home/HomeScreen';
import { CovidScreen } from '../screens/Home/CovidScreen';

export const HomeNavigator = () => {

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
                name="Home"
                component={HomeScreen}
                options={{
                    headerTitle: (props) => <MegatlonLogo {...props} />,
                    headerLeft: () => (
                        <InfoIcon />
                    ),
                    headerRight: () => (
                        <CartIcon />
                    )

                }}
            />

            <Stack.Screen
                name="Covid"
                component={CovidScreen}
            />

        </Stack.Navigator>
    )


}
