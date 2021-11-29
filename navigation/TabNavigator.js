import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { MainNavigator } from './MainNavigator';
import { View } from 'react-native';
import FeatherIcon from 'react-native-vector-icons/Feather';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

export const TabNavigator = () => {

    const Tab = createBottomTabNavigator();

    return (
        <Tab.Navigator
            screenOptions={{
                headerShown: false,
            }}>
            <Tab.Screen
                name="Inicio"
                component={MainNavigator}
                options={{
                    tabBarBadge: '1',
                    tabBarIcon: (props) => (
                        <View>
                            <MaterialCommunityIcons name="home" size={30} color={props.color} />

                        </View>)
                }} />

            <Tab.Screen
                name="Reservas"
                component={MainNavigator}
                options={{
                    tabBarIcon: (props) => (
                        <View>
                            <FeatherIcon name="calendar" size={30} color={props.color} />
                        </View>)
                }}
            />

            <Tab.Screen
                name="Perfil"
                component={MainNavigator}
                options={{
                    tabBarIcon: (props) => (
                        <View>
                            <FeatherIcon name="user" size={30} color={props.color} />
                        </View>)
                }} />
        </Tab.Navigator>
    )
}
