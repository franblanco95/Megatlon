import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { Button } from 'react-native';
import { MegatlonLogo } from '../components/MegatlonLogo';
import { HomeScreen } from '../screens/Home/HomeScreen';
import CovidScreen from '../screens/Home/CovidScreen';
import InfoScreen from '../screens/Home/InfoScreen';
import FeatherIcon from 'react-native-vector-icons/Feather';
import colors from '../constants/colors'
import InfoIcon from '../components/InfoIcon';
import { useNavigation } from '@react-navigation/native';
import CartIcon from '../components/CartIcon';


export const HomeNavigator = () => {

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
                name="Home"
                component={HomeScreen}
                options={{
                    headerTitle: (props) => <MegatlonLogo {...props} />,
                    headerLeft: () => (
                        <InfoIcon navigation={navigation} />
                    ),
                    headerRight: () => (
                        <CartIcon navigation={navigation} />
                    )

                }}
            />

            <Stack.Screen
                name="Covid"
                component={CovidScreen}
            />

            <Stack.Screen
                name="Info"
                component={InfoScreen}
            />
        </Stack.Navigator>
    )


}
