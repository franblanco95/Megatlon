import React from 'react'
import { ImageBackground } from 'react-native'
import { Text, Pressable, View, StyleSheet, TouchableOpacity, Button } from 'react-native'
import colors from '../constants/colors'

export const Deporte = ({ deporte, onSelected }) => {
    return (
        // <TouchableOpacity
        //     onPress={() => onSelected(deporte)}
        //     style={styles.container}
        // >
        //     <Text style={styles.text}>{deporte.name}</Text>
        // </TouchableOpacity>
        <ImageBackground
            source={deporte.background}
            style={styles.imageContainer}>
            <Pressable
                onPress={() => navigation.navigate("Covid")}
            >
                <Text style={styles.imageTitle}>{deporte.name}</Text>
            </Pressable>
            {/* {console.log(deporte)} */}

        </ImageBackground>

    )
}

const styles = StyleSheet.create({
    imageContainer: {
        resizeMode: 'cover',
        borderRadius: 10,
        overflow: 'hidden',
        height: 150,
        marginTop: 10,
        marginHorizontal: 20,
        paddingHorizontal: 20,
        justifyContent: 'center',
    },
    imageTitle: {
        color: colors.white,
        fontWeight: 'bold',
        fontSize: 20,
    }
})
