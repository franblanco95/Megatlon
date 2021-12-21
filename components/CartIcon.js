import React from 'react'
import { View, Text } from 'react-native'
import FeatherIcon from 'react-native-vector-icons/Feather';
import colors from '../constants/colors'


const CartIcon = ({ navigation }) => {
    return (
        <FeatherIcon
            name="shopping-cart"
            size={27}
            color={colors.white}
            onPress={() => navigation.navigate("CARRITO")} />
    )
}

export default CartIcon
