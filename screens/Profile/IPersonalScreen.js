import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { auth } from "../../firebase";

const IPersonalScreen = () => {
    return (
        <View>
            <Text>Nombre</Text>
            <Text>{auth.currentUser.displayName}</Text>

            <Text>Apellido</Text>
            <Text>{auth.currentUser.displayName}</Text>

            <Text>DNI</Text>
            <Text>{auth.currentUser.displayName}</Text>

            <Text>Telefono</Text>
            <Text>{auth.currentUser.displayName}</Text>

            <Text>Mail</Text>
            <Text>{auth.currentUser.displayName}</Text>

            <Text>Direccion</Text>
            <Text>{auth.currentUser.displayName}</Text>
        </View>
    )
}

export default IPersonalScreen

const styles = StyleSheet.create({})
