import React from 'react'
import { ImageBackground, Text, View, StyleSheet, TouchableOpacity } from 'react-native'
import { LinearGradient } from 'expo-linear-gradient'
import colors from '../constants/colors'

export const Deporte = ({ deporte, onSelected }) => {
    return (
        <ImageBackground
            source={deporte.background}
            style={styles.imageContainer}>
            <LinearGradient
                colors={['black', 'transparent']}
                start={{ x: 0, y: 1 }}
                end={{ x: 0.5, y: 0.8 }}
                style={{
                    height: 150,
                    paddingHorizontal: 20,
                    justifyContent: 'center',

                }}
            >
                <Text style={styles.imageTitle}>{deporte.name}</Text>
                <TouchableOpacity
                    onPress={() => onSelected(deporte)}
                >
                    <View style={{
                        width: 145,
                        borderRadius: 20,
                        borderWidth: 1,
                        borderColor: colors.white,
                    }}>
                        <Text style={styles.imageText}>RESERVAR UN TURNO</Text>
                    </View>
                </TouchableOpacity>
            </LinearGradient >

        </ImageBackground >

    )
}

const styles = StyleSheet.create({
    imageContainer: {
        resizeMode: 'cover',
        overflow: 'hidden',
        borderRadius: 10,
        height: 150,
        marginTop: 10,
        marginHorizontal: 20,
    },
    imageTitle: {
        color: colors.white,
        fontWeight: 'bold',
        fontSize: 20,
        marginBottom: 5,
    },
    imageText: {
        color: colors.white,
        paddingHorizontal: 10,
        paddingVertical: 8,
        fontSize: 12,
        fontWeight: 'bold'
    }
})
