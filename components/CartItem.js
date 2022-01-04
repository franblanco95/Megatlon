import React from 'react'
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import FeatherIcon from 'react-native-vector-icons/Feather';
import { useDispatch } from 'react-redux';
import colors from '../constants/colors'
import { removeItem } from '../store/actions/cart.actions';

const CartItem = ({ plan }) => {

    const dispatch = useDispatch()

    return (
        <View style={styles.cartContainer}>
            <Text style={styles.cartTitle}>{plan.name}</Text>
            <Text style={styles.cartTitle}> $ {plan.price}</Text>
            <TouchableOpacity>
                <FeatherIcon
                    name="trash"
                    size={20}
                    color={colors.white}
                    onPress={() => dispatch(removeItem(plan.id))}
                />
            </TouchableOpacity>
        </View>
    )
}

export default CartItem

const styles = StyleSheet.create({
    cartContainer: {
        alignItems: 'center',
        justifyContent: 'space-between',
        backgroundColor: colors.secondary,
        flexDirection: 'row',
        borderRadius: 5,
        height: 75,
        marginBottom: 10,
        marginHorizontal: 10,
        paddingHorizontal: 20,


    },
    cartTitle: {
        color: colors.white,
    }
})
