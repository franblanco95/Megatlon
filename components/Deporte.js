import React from 'react'
import { Text, View, StyleSheet, TouchableOpacity } from 'react-native'

export const Deporte = ({ deporte }) => {
    return (
        <TouchableOpacity
            onSelected={() => navigation.navigate('Detail')}
            style={styles.container}
        >

            <Text style={styles.text}>{deporte.name}</Text>
        </TouchableOpacity>
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
    text: {
        textAlign: 'center',
    }


})
