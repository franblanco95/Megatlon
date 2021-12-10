import React from 'react'
import { Pressable } from 'react-native'
import { Text, View, ScrollView, Linking, StyleSheet } from 'react-native'
import { Avatar, Divider } from 'react-native-elements'
import FeatherIcon from 'react-native-vector-icons/Feather';
import colors from '../../constants/colors'

export const ProfileScreen = () => {

    return (
        <ScrollView contentContainerStyle={styles.container}>
            <View style={styles.header}>

                <Avatar
                    size={100}
                    rounded
                    icon={{ name: 'user', type: 'font-awesome' }}
                    onPress={() => console.log("Works!")}
                    activeOpacity={0.7}
                    containerStyle={{ backgroundColor: 'gray', marginBottom: 10 }}
                />


                <Text style={styles.userName}>Francisco Blanco</Text>

            </View>

            <Divider orientation="vertical" color="red" />

            <View style={styles.prueba}>
                <Pressable
                    style={styles.pressableBContainer}
                    onPress={() => console.log("Action!")}
                >

                    <FeatherIcon name="user" size={27} color={colors.white} />
                    <Text style={styles.pressableText}>Información Personal</Text>
                </Pressable>

                <Pressable
                    style={styles.pressableBContainer}
                    onPress={() => console.log("Action!")}
                >
                    <FeatherIcon name="user" size={27} color={colors.white} />
                    <Text style={styles.pressableText}>Mis Reservas</Text>
                </Pressable>

                <Pressable
                    style={styles.pressableBContainer}
                    onPress={() => console.log("Action!")}
                >

                    <FeatherIcon name="user" size={27} color={colors.white} />
                    <Text style={styles.pressableText}>Mi Plan</Text>
                </Pressable>

                <Pressable
                    style={styles.pressableBContainer}
                    onPress={() => console.log("Action!")}
                >

                    <FeatherIcon name="user" size={27} color={colors.white} />
                    <Text style={styles.pressableText}>Cerrar Sesión</Text>
                </Pressable>


            </View>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.primary,
    },
    header: {
        alignItems: 'center',
        paddingVertical: 15,
    },

    userName: {
        color: colors.white,
        fontSize: 18,
        fontWeight: 'bold'
    },

    pressableBContainer: {
        flexDirection: 'row',
        backgroundColor: colors.secondary,
        alignItems: 'center',
        paddingHorizontal: 15,
        paddingVertical: 10,
        borderRadius: 5,
        width: '70%',
        // justifyContent: 'space-between',
        marginBottom: 10,

    },
    prueba: {
        width: '100%',
        marginVertical: 10,
        alignItems: 'center',
    },
    pressableText: {
        color: colors.white,
        marginLeft: 10,
        fontSize: 15,
    },
})
