import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import colors from '../../constants/colors'

const CartScreen = () => {
    return (
        <View style={styles.container}>
            <Text>Carrito Screen</Text>
        </View>
    )
}

export default CartScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: colors.primary,
    }
})
