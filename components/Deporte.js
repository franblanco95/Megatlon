import React from 'react'
import { ImageBackground } from 'react-native'
import { Text, Pressable, StyleSheet, TouchableOpacity, Button } from 'react-native'
import colors from '../constants/colors'

export const Deporte = ({ deporte, onSelected }) => {
    return (
        // <TouchableOpacity
        //     onPress={() => onSelected(deporte)}
        //     style={styles.container}
        // >
        //     <Text style={styles.text}>{deporte.name}</Text>
        // </TouchableOpacity>

        <>
            <ImageBackground
                source={deporte.background}
                style={styles.container}>
                <Pressable
                    onPress={() => navigation.navigate("Covid")}
                >
                    <Text style={styles.imageTitle}>{deporte.name}</Text>
                </Pressable>
                {/* {console.log(deporte)} */}

            </ImageBackground>
        </>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'orange',
        margin: 5,
        padding: 10,
        height: 150,
        width: 150,
        justifyContent: 'center',
        borderRadius: 5,
    },
    imageTitle: {
        color: colors.white,
        fontWeight: 'bold',
        fontSize: 20,
    }
})
