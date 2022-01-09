import React from 'react'
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import colors from '../../constants/colors'

const TurnosScreen = ({ navigation }) => {

    return (
        <View style={styles.turnosContainer}>

            <View style={styles.turno}>
                <View>
                    <Text style={styles.turnosText}>Musculación</Text>
                    <Text style={styles.turnosText}>Hora: 08:00 a 09:00</Text>
                </View>
                <TouchableOpacity
                    onPress={() => navigation.navigate('Qr')}
                    style={styles.buttonContainer}
                >
                    <Text style={styles.buttonText}>Mostrar Código QR</Text>
                </TouchableOpacity>
            </View>
        </View >
    )
}

export default TurnosScreen

const styles = StyleSheet.create({
    turnosContainer: {
        flex: 1,
        paddingHorizontal: 10,
        backgroundColor: colors.primary,
    },
    turno: {
        flexDirection: 'row',
        backgroundColor: 'gray',
        justifyContent: 'space-between',
        padding: 10,
        borderRadius: 10,

    },
    turnosText: {
        color: colors.white,
    },
    buttonContainer: {
        backgroundColor: colors.secondary,
        paddingHorizontal: 15,
        paddingVertical: 5,
        borderRadius: 10,
        justifyContent: 'center',

    },
    buttonText: {
        fontWeight: 'bold',
        color: colors.white,
    }
})
