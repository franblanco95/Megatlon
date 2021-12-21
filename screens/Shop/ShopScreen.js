import { LinearGradient } from 'expo-linear-gradient';
import React from 'react'
import { ScrollView, StyleSheet, View, Text, TouchableOpacity, Image } from 'react-native';
import colors from '../../constants/colors'

export const ShopScreen = () => {
    return (
        <ScrollView contentContainerStyle={styles.container}>
            <LinearGradient
                colors={['rgba(0,0,0,0.8)', 'orange']}
                style={styles.linearBackground}
                start={{ x: 1, y: 1 }}
                end={{ x: 1, y: 0.1 }}
                locations={[0, 1]}
            >
                <Image
                    source={require('../../assets/megatlonplay-03.png')}
                />
                <View style={styles.titleContainer}>
                    <Text style={styles.title}>Membresia Digital Anual</Text>
                    <Text style={styles.price}>$ 7.900</Text>
                </View>

                <TouchableOpacity>
                    <Text style={styles.terms}>Términos y Condiciones</Text>
                </TouchableOpacity>

                <View>
                    <TouchableOpacity style={styles.button}>
                        <Text style={styles.buttonText}>Comprar</Text>
                    </TouchableOpacity>
                </View>
            </LinearGradient>

        </ScrollView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#222323',
    },
    prueba: {
        // backgroundColor: 'red',
        width: '65%',
    },
    linearBackground: {
        width: '75%',
        borderRadius: 10,
        margin: 10,
        justifyContent: 'center',
        alignItems: 'center',
        paddingVertical: 20,
    },
    titleContainer: {
        width: '35%',
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
    },
    terms: {
        color: colors.white,
        fontSize: 13,
        marginVertical: 10,
        // textDecorationLine: 

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
    }
})