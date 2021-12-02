import React from 'react'
import { ScrollView, View, Text, StyleSheet } from 'react-native'

export const DetailScreen = () => {
    return (
        <ScrollView contentContainerStyle={styles.container}>
            <View>
                <Text style={styles.bold}>Hora: 15:00</Text>
                <Text>Duración: 60 min</Text>
                <Text>Cupos Diponibles: 128</Text>
                <Text>Hora: 15:00</Text>

            </View>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    bold: {
        fontWeight: 'bold',
    }

})