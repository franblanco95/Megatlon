import React from 'react'
import { ScrollView, Text, StyleSheet } from 'react-native'

export const DetailScreen = () => {
    return (
        <ScrollView contentContainerStyle={styles.container}>
            <Text>Hola Soy DetailScreen</Text>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    }

})