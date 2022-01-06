import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { HomeNavigator } from './HomeNavigator';
import { ShopNavigator } from './ShopNavigator';
import { ReservasNavigator } from './ReservasNavigator';
import { ProfileNavigator } from './ProfileNavigator';
import { View, StyleSheet, Text } from 'react-native';
import FeatherIcon from 'react-native-vector-icons/Feather';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import colors from '../constants/colors'

export const TabNavigator = () => {

    const Tab = createBottomTabNavigator();

    return (
        <Tab.Navigator
            screenOptions={{
                headerShown: false,
                tabBarShowLabel: false,
                tabBarStyle: styles.tabBar,
                tabBarActiveTintColor: colors.secondary,
            }}>
            <Tab.Screen
                name="Inicio"
                component={HomeNavigator}
                options={{
                    tabBarIcon: (props) => (
                        <View style={styles.tabContainer}>
                            <View
                                style={{
                                    height: 6,
                                    width: 30,
                                    position: 'absolute',
                                    backgroundColor: colors.secondary,
                                    top: -30,
                                    borderBottomLeftRadius: 6,
                                    borderBottomRightRadius: 6,
                                    
                                }}></View>
                            <MaterialCommunityIcons name="home" size={27} color={props.color} />
                            <Text style={[styles.text, { color: props.color }]}>Inicio</Text>
                        </View>)
                }} />

            <Tab.Screen
                name="Reservas"
                component={ReservasNavigator}
                options={{
                    tabBarIcon: (props) => (
                        <View style={styles.tabContainer}>
                            <FeatherIcon name="calendar" size={27} color={props.color} />
                            <Text style={[styles.text, { color: props.color }]}>Reservas</Text>
                        </View>)
                }}
            />

            <Tab.Screen
                name="Tienda"
                component={ShopNavigator}
                options={{
                    tabBarIcon: (props) => (
                        <View style={styles.tabContainer}>
                            <MaterialCommunityIcons name="cart" size={27} color={props.color} />
                            <Text style={[styles.text, { color: props.color }]}>Tienda</Text>
                        </View>)
                }}
            />

            <Tab.Screen
                name="Perfil"
                component={ProfileNavigator}
                options={{
                    tabBarIcon: (props) => (
                        <View style={styles.tabContainer}>
                            <MaterialCommunityIcons name="account" size={30} color={props.color} />
                            <Text style={[styles.text, { color: props.color }]}>Perfil</Text>
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
        borderColor: 'red',
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
        height: 100,

    },
    tabContainer: {
        marginTop: 10,
        alignItems: 'center',
    },
    text: {
        paddingTop: 5,
        fontSize: 12,
    }

})