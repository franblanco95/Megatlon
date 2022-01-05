import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import InfoIcon from '../components/InfoIcon';
import CartIcon from '../components/CartIcon';
import { ShopScreen } from '../screens/Shop/ShopScreen';

export const ShopNavigator = () => {

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
                name="TIENDA"
                component={ShopScreen}
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
