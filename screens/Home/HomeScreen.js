import React from 'react'
import { Text, View, StyleSheet, Image, Pressable, ImageBackground } from 'react-native'
import colors from '../../constants/colors'
export const HomeScreen = () => {
    return (
        <>
            <View >
                {/* <View style={styles.container}> */}
                {/* <Text style={styles.text}>Hola Soy Home Screen</Text> */}
                <ImageBackground
                    style={styles.imageBackground}
                    source={require('../../assets/covid.jpg')}
                >
                    <Pressable style={styles.boxContainer}>
                        <View>
                            <Text style={styles.imageTitle}>Preparados contra el Covid-19</Text>
                        </View>

                    </Pressable>

                </ImageBackground>
            </View>
        </>
    )
}

const styles = StyleSheet.create({
    // container: {
    //     flex: 1,
    //     backgroundColor: colors.primary,
    //     justifyContent: 'center',
    //     alignItems: 'center',
    // },
    text: {
        fontSize: 15,
        fontWeight: 'bold',
        color: colors.white,
    },
    boxContainer: {
    },
    imageBackground: {
        height: 200,
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