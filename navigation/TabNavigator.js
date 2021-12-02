import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { HomeNavigator } from './HomeNavigator';
import { ShopNavigator } from './ShopNavigator';
import { ReservasNavigator } from './ReservasNavigator';
import { ProfileNavigator } from './ProfileNavigator';
import { View, StyleSheet } from 'react-native';
import FeatherIcon from 'react-native-vector-icons/Feather';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import colors from '../constants/colors'

export const TabNavigator = () => {

    const Tab = createBottomTabNavigator();

    return (
        <Tab.Navigator
            screenOptions={{
                headerShown: false,
                tabBarStyle: { ...styles.tabBar },
                tabBarActiveTintColor: colors.secondary,

            }}>
            <Tab.Screen
                name="Inicio"
                component={HomeNavigator}
                options={{
                    tabBarBadge: '1',
                    tabBarIcon: (props) => (
                        <View>
                            <MaterialCommunityIcons name="home" size={27} color={props.color} />

                        </View>)
                }} />

            <Tab.Screen
                name="Reservas"
                component={ReservasNavigator}
                options={{
                    tabBarIcon: (props) => (
                        <View>
                            <FeatherIcon name="calendar" size={27} color={props.color} />
                        </View>)
                }}
            />

            <Tab.Screen
                name="Tienda"
                component={ShopNavigator}
                options={{
                    tabBarIcon: (props) => (
                        <View>
                            <MaterialCommunityIcons name="cart" size={27} color={props.color} />
                        </View>)
                }}
            />

            <Tab.Screen
                name="Perfil"
                component={ProfileNavigator}
                options={{
                    tabBarIcon: (props) => (
                        <View>
                            <MaterialCommunityIcons name="account" size={30} color={props.color} />
                        </View>)
                }} />
        </Tab.Navigator>
    )
}

const styles = StyleSheet.create({
    tabBar: {
        backgroundColor: colors.primary,
        // position: 'absolute',
        borderTopWidth: 0,
        borderTopStartRadius: 25,
        borderTopEndRadius: 25,
        height: 90,

    },

})