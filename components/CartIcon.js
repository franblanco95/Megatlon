import React from 'react'
import { useNavigation } from '@react-navigation/native';
import FeatherIcon from 'react-native-vector-icons/Feather';
import colors from '../constants/colors'

const CartIcon = () => {

    const navigation = useNavigation()

    return (
        <FeatherIcon
            name="shopping-cart"
            size={27}
            color={colors.white}
            onPress={() => navigation.navigate("CARRITO")} />
    )
}

export default CartIcon
