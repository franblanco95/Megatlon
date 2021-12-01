import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { Button } from 'react-native';
import { MegatlonLogo } from '../components/MegatlonLogo';
import { ProfileScreen } from '../screens/Profile/ProfileScreen';

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
                name="Home"
                component={ProfileScreen}
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
