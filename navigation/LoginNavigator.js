import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import RegisterScreen from '../screens/Login/RegisterScreen';

const Stack = createNativeStackNavigator();

const LoginNavigator = () => {
    return (
        <Stack.Navigator
            screenOptions={{ headerShown: false }}>
            {/* <Stack.Screen name="LogIn" component={LoginScreen} /> */}
            <Stack.Screen name="Register" component={RegisterScreen} />
        </Stack.Navigator>
    );
}


export default LoginNavigator

const styles = StyleSheet.create({})