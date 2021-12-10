import React from 'react'
import { ImageBackground, Pressable, StyleSheet, Text } from 'react-native'
import colors from '../constants/colors'

const Covid = ({ navigation }) => {
    return (
        <ImageBackground
            style={styles.imageBackground}
            source={require('../assets/covid.jpg')}
        >
            <Pressable
                onPress={() => navigation.navigate("Covid")}
            >
                <Text style={styles.imageTitle}>Medidas contra el Covid-19</Text>
            </Pressable>

        </ImageBackground >
    )
}

export default Covid

const styles = StyleSheet.create({
    imageBackground: {
        height: 150,
        resizeMode: 'cover',
        borderRadius: 10,
        overflow: 'hidden',
        marginVertical: 10,
        marginHorizontal: 10,
        justifyContent: 'center',
        paddingHorizontal: 10,
    },
    imageTitle: {
        color: colors.white,
        fontWeight: 'bold',
        fontSize: 20,
    }
})
