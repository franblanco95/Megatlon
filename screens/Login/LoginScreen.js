import React from 'react'
import { TouchableOpacity } from 'react-native'
import { StyleSheet, Text, View } from 'react-native'
import { auth } from '../../firebase'

const LoginScreen = ({ navigation }) => {

    const handleSingOut = () => {
        auth
            .signOut()
            .then(() => {
                navigation.navigate("Register")
            })
            .catch(error => alert(error.message))

    }
    return (
        <View style={styles.container}>
            <Text>Email: {auth.currentUser?.email}</Text>

            <TouchableOpacity
                style={styles.button}
                onPress={handleSingOut}
            >
                <Text>
                    Sign Out
                </Text>
            </TouchableOpacity>
        </View>
    )
}

export default LoginScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    button: {
        width: '60%',
        backgroundColor: 'red',
        padding: 15,
        borderRadius: 10,
        alignItems: 'center',
    }
})
