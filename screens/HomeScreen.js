import React from 'react'
import { ScrollView, Text, StyleSheet, Button } from 'react-native'

export const HomeScreen = ({ navigation }) => {
    return (
        <ScrollView contentContainerStyle={styles.container}>
            <Text>Hola Soy HomeScreen</Text>
            <Button title='Go to Detail' onPress={() => navigation.navigate('Detail')} />

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

