import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { Button } from 'react-native';
import { MegatlonLogo } from '../components/MegatlonLogo';
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
                name="Home"
                component={ShopScreen}
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
