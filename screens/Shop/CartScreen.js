import React from 'react'
import { StyleSheet, Text, ScrollView, View, TouchableOpacity } from 'react-native'
import colors from '../../constants/colors'

const CartScreen = () => {
    return (
        <>
            <ScrollView contentContainerStyle={styles.container}>
                <View>
                    <Text>Carrito Screen</Text>
                </View>
                <TouchableOpacity style={styles.orderButton}>
                    <Text>Crear orden de compra</Text>
                </TouchableOpacity>
            </ScrollView>
        </>
    )
}

export default CartScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: colors.primary,
    },
    orderButton: {
        backgroundColor: colors.white,
        borderRadius: 10,
        width: '80%',
        paddingVertical: 10,
        paddingHorizontal: 20,
    }
})
