import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import InfoScreen from '../screens/Home/InfoScreen';
import CartScreen from '../screens/Shop/CartScreen';
import { TabNavigator } from './TabNavigator';

const Stack = createNativeStackNavigator();

const MainNavigator = () => {
    return (
        <Stack.Navigator
            screenOptions={{
                headerShown: false,
            }}>
            <Stack.Screen name="Tabs" component={TabNavigator} screenOptions={{ headerShown: false }} />
            <Stack.Screen name="Info" component={InfoScreen} />
            <Stack.Screen name="Cart" component={CartScreen} />
        </Stack.Navigator>
    )
}

export default MainNavigator


