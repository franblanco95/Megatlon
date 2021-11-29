import React from 'react'
import { Image, StyleSheet } from 'react-native'

export const MegatlonLogo = () => {
    return (
        <Image style={styles.logo} source={require('../assets/megatlon.png')} />
    )
}

const styles = StyleSheet.create({
    logo: {
        width: 200,
        height: 50,
    }
})
