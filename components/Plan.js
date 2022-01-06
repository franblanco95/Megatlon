import React, { useState } from 'react'
import { StyleSheet, Text, View, Image, TouchableOpacity, Modal, Pressable } from 'react-native'
import { useDispatch } from 'react-redux';
import colors from '../constants/colors'
import { addItem } from '../store/actions/cart.actions';

const Plan = ({ plan }) => {

    const dispatch = useDispatch()

    const [modalVisible, setModalVisible] = useState(false);
    const [actionTriggered, setActionTriggered] = useState('')

    const handlerAddItemCart = () => {
        setModalVisible(true)
        setActionTriggered('cart')
        dispatch(addItem(plan))
    }

    return (
        <>
            <View style={styles.planContainer}>
                <Image
                    source={plan.img}
                />

                <View style={styles.titleContainer}>
                    <Text style={styles.title}>{plan.name}</Text>
                    <Text style={styles.price}>$ {plan.price}</Text>
                </View>

                <TouchableOpacity
                    onPress={() => {
                        setModalVisible(true)
                        setActionTriggered('terms')
                    }}

                >
                    <Text style={styles.terms}>Términos y Condiciones</Text>
                </TouchableOpacity>

                <View>
                    <TouchableOpacity
                        style={styles.button}
                        onPress={handlerAddItemCart}>

                        <Text style={styles.buttonText}>Añadir al Carrito</Text>
                    </TouchableOpacity>
                </View>
            </View >

            <Modal
                animationType="fade"
                transparent={true}
                visible={modalVisible}
                onRequestClose={() => (setModalVisible(!modalVisible))}
            >
                {actionTriggered === 'terms' ?

                    <View style={styles.centeredView}>
                        <View style={styles.modalView}>
                            <Text style={styles.modalText}>{plan.terms}</Text>
                            <Pressable
                                style={[styles.buttonModal, styles.buttonClose]}
                                onPress={() => setModalVisible(!modalVisible)}
                            >
                                <Text style={styles.textStyle}>Aceptar</Text>
                            </Pressable>
                        </View>
                    </View>
                    : actionTriggered === 'cart' ?

                        <View style={styles.centeredView}>
                            <View style={styles.modalView}>
                                <Image
                                    source={require('../assets/success.png')}
                                    style={styles.modalImage}
                                />
                                <View style={{ width: '50%' }}>
                                    <Text style={styles.modalTitle}>{plan.name}</Text>
                                </View>
                                <Text style={styles.modalText}>Se ha añadido al carrito!</Text>
                                <Pressable
                                    style={[styles.buttonModal, styles.buttonClose]}
                                    onPress={() => setModalVisible(!modalVisible)}
                                >
                                    <Text style={styles.textStyle}>Aceptar</Text>
                                </Pressable>
                            </View>
                        </View>
                        : null
                }
            </Modal>
        </>

    )
}

export default Plan

const styles = StyleSheet.create({
    planContainer: {
        backgroundColor: colors.secondary,
        borderRadius: 10,
        margin: 10,
        justifyContent: 'center',
        alignItems: 'center',
        paddingHorizontal: 20,
    },
    titleContainer: {
        alignItems: 'center',
        textAlign: 'center'
    },
    title: {
        fontWeight: 'bold',
        fontSize: 17,
        paddingVertical: 15,
        color: colors.white,
        textAlign: 'center',
    },
    price: {
        marginVertical: 10,
        color: colors.white,
        textAlign: 'center',
        fontSize: 16,
    },
    terms: {
        color: colors.white,
        fontSize: 13,
        marginVertical: 10,
        textDecorationLine: 'underline',
    },
    button: {
        marginVertical: 10,
        paddingHorizontal: 30,
        paddingVertical: 5,
        borderRadius: 20,
        borderWidth: 1,
        borderColor: 'white',
    },
    buttonText: {
        color: colors.white,
    },

    centeredView: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        marginTop: 22,
        backgroundColor: 'rgba(0,0,0,0.8)'
    },
    modalView: {
        margin: 20,
        backgroundColor: "white",
        borderRadius: 20,
        padding: 30,
        alignItems: "center",
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5
    },
    buttonModal: {
        borderRadius: 20,
        padding: 10,
        elevation: 2
    },
    buttonOpen: {
        backgroundColor: "#F194FF",
    },
    buttonClose: {
        backgroundColor: "#2196F3",
        paddingHorizontal: 25,
    },
    textStyle: {
        color: "white",
        fontWeight: "bold",
        textAlign: "center"
    },
    modalImage: {
        width: 65,
        height: 65,
        resizeMode: 'contain',
    },
    modalTitle: {
        fontWeight: 'bold',
        fontSize: 19,
        textAlign: 'center',
        marginVertical: 15,
    },
    modalText: {
        textAlign: "center",
        marginBottom: 15,
    }
})
