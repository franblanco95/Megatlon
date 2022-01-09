import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import QRCode from 'react-native-qrcode-svg'
import colors from '../../constants/colors'

const QrScreen = () => {
    return (
        <View style={styles.qrContainer}>
            <View style={styles.textContainer}>
                <Text style={styles.qrText}>Desliza el código QR sobre el lector del molinete</Text>
            </View>
            <QRCode
                size={200}
                value="Just some string value"

            />
        </View>
    )
}

export default QrScreen

const styles = StyleSheet.create({
    qrContainer: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: colors.primary,
    },
    textContainer: {
        width: '75%',
        marginBottom: 20,
    },
    qrText: {
        color: colors.white,
        fontSize: 20,
        fontWeight: 'bold',
        textAlign: 'center',
    }
})
