import React from 'react'
import { StyleSheet, Text, ScrollView, View, TouchableOpacity, Dimensions, Image } from 'react-native'
import colors from '../../constants/colors'

const CartScreen = ({ navigation }) => {

    const total = 0;

    return (
        <>
            <ScrollView contentContainerStyle={styles.container}>

                {total === 0 ?
                    <View style={styles.emptycontainer}>
                        <Image source={require('../../assets/empty-cart.png')} />
                        <Text style={styles.cartText}> Tu carrito está vacío</Text>
                        <Text style={styles.cartSubtext}> No tienes ningún producto en tu carrito de compra.</Text>
                        <Text style={styles.cartSubtext}> Ve a comprar algo!</Text>
                        <TouchableOpacity
                            style={styles.button}
                            onPress={() => navigation.goBack()}
                        >
                            <Text style={styles.buttontext}>Tienda</Text>

                        </TouchableOpacity>
                    </View>
                    :
                    <>
                        <View>
                            {/* <FlatList
                                data={items}
                                keyExtractor={item => item.id}
                                renderItem={renderItem}
                            /> */}
                        </View>
                        <View style={styles.footer}>

                            <TouchableOpacity style={styles.confirmButton} onPress={() => console.log('asd')}>
                                <Text style={styles.text}>Confirmar</Text>
                                <Text style={styles.text}>$ {total}</Text>
                            </TouchableOpacity>

                        </View>
                    </>
                }

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
    emptycontainer: {
        height: Dimensions.get('window').height,
        alignItems: 'center',
        justifyContent: 'center',
    },
    cartText: {
        color: 'white',
        fontSize: 20,
        fontWeight: 'bold',
        marginVertical: 20,
    },
    cartSubtext: {
        color: 'gray',
        fontSize: 15,
    },
    button: {
        marginTop: 25,
        borderRadius: 20,
        borderWidth: 1,
        backgroundColor: '#e33e38',
        paddingVertical: 10,
        paddingHorizontal: 15,
    },
    buttontext: {
        color: 'white',
        fontSize: 17,
        fontWeight: 'bold',
    },
    orderButton: {
        backgroundColor: colors.white,
        borderRadius: 10,
        width: '80%',
        paddingVertical: 10,
        paddingHorizontal: 20,
    },
    footer: {
        padding: 12,
        borderTopColor: '#ccc',
        borderTopWidth: 1,

    },
    confirmButton: {
        backgroundColor: '#e33e38',
        borderRadius: 10,
        padding: 10,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    text: {
        color: 'white',
        fontSize: 18,
        padding: 8,
    },
})

