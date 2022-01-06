import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import InfoScreen from '../screens/Home/InfoScreen';
import CartScreen from '../screens/Shop/CartScreen';
import { TabNavigator } from './TabNavigator';

const Stack = createNativeStackNavigator();

const MainNavigator = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen
                name="Tabs"
                component={TabNavigator}
                options={{ headerShown: false }} />

            <Stack.Screen
                name="NOSOTROS"
                component={InfoScreen}
                options={{
                    headerStyle: { backgroundColor: '#161819' },
                    headerTintColor: 'white',
                    headerTitleStyle: { fontWeight: 'bold'},
                    headerTitleAlign: 'center',
                }} />

            <Stack.Screen
                name="CARRITO"
                component={CartScreen}
                options={{
                    headerStyle: { backgroundColor: '#161819' },
                    headerTintColor: 'white',
                    headerTitleStyle: { fontWeight: 'bold' },
                    headerTitleAlign: 'center',
                }} />
        </Stack.Navigator>
    )
}

export default MainNavigator


