import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { Button } from 'react-native';
import { MegatlonLogo } from '../components/MegatlonLogo';
import { HomeScreen } from '../screens/Home/HomeScreen';

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
                    headerRight: () => (
                        <Button
                            onPress={() => alert('This is a button!')}
                            title="Info"
                            color="red"
                        />
                    ),

                }}
            />
        </Stack.Navigator>
    )


}
