import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { HomeNavigator } from './HomeNavigator';
import { ReservasNavigator } from './ReservasNavigator';
import { ProfileNavigator } from './ProfileNavigator';
import { View, StyleSheet } from 'react-native';
import FeatherIcon from 'react-native-vector-icons/Feather';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

export const TabNavigator = () => {

    const Tab = createBottomTabNavigator();

    return (
        <Tab.Navigator
            screenOptions={{
                headerShown: false,
                tabBarStyle: { ...styles.tabBar },
                tabBarActiveTintColor: "#ed9645",

            }}>
            <Tab.Screen
                name="Inicio"
                component={HomeNavigator}
                options={{
                    tabBarBadge: '1',
                    tabBarIcon: (props) => (
                        <View>
                            <MaterialCommunityIcons name="home" size={30} color={props.color} />

                        </View>)
                }} />

            <Tab.Screen
                name="Reservas"
                component={ReservasNavigator}
                options={{
                    tabBarIcon: (props) => (
                        <View>
                            <FeatherIcon name="calendar" size={30} color={props.color} />
                        </View>)
                }}
            />

            <Tab.Screen
                name="Perfil"
                component={ProfileNavigator}
                options={{
                    tabBarIcon: (props) => (
                        <View>
                            <FeatherIcon name="user" size={30} color={props.color} />
                        </View>)
                }} />
        </Tab.Navigator>
    )
}

const styles = StyleSheet.create({
    tabBar: {
        backgroundColor: '#161819',
        position: 'absolute',
        borderTopStartRadius: 15,
        borderTopEndRadius: 15,
        height: 80,
    },

})