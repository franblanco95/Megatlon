import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { Button } from 'react-native';
import { MegatlonLogo } from '../components/MegatlonLogo';
import { ShopScreen } from '../screens/Shop/ShopScreen';
import InfoIcon from '../components/InfoIcon';
import CartIcon from '../components/CartIcon';
import { useNavigation } from '@react-navigation/native';
import CartScreen from '../screens/Shop/CartScreen';

export const ShopNavigator = () => {

    const Stack = createNativeStackNavigator();

    const navigation = useNavigation();


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
                        <InfoIcon navigation={navigation} />
                    ),
                    headerRight: () => (
                        <CartIcon navigation={navigation} />
                    )

                }}
            />

            <Stack.Screen
                name="CARRITO"
                component={CartScreen}
            />
        </Stack.Navigator>
    )


}
