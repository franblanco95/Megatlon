import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import RedesSociales from '../../components/RedesSociales'
import colors from '../../constants/colors'

const InfoScreen = () => {
    return (
        <View style={styles.container}>
            <Text>Hola Soy InfoScreen</Text>
            <RedesSociales />
        </View>
    )
}

export default InfoScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.primary,
        alignItems: 'center',
        justifyContent: 'center'
    }
})
