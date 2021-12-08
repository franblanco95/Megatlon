import React, { useState } from 'react'
import { TouchableOpacity } from 'react-native'
import { KeyboardAvoidingView, TextInput } from 'react-native'
import { StyleSheet, Text, View } from 'react-native'
import { useDispatch } from 'react-redux'
import colors from '../../constants/colors'
import { signup } from '../../store/actions/auth.actions'

const RegisterScreen = () => {

    const [email, setEmail] = useState();
    const [password, setPassword] = useState();


    const dispatch = useDispatch();

    const handleSingUp = () => {
        dispatch(signup(email, password))
    }
    return (
        <KeyboardAvoidingView
            style={styles.container}
            behavior="padding"
        >
            <View style={styles.inputContainer}>
                <TextInput
                    placeholder="Email"
                    value={email}
                    onChangeText={text => setEmail(text)}
                    style={styles.input}
                />

                <TextInput
                    placeholder="Password"
                    value={password}
                    onChangeText={text => setPassword(text)}
                    style={styles.input}
                    secureTextEntry
                />
            </View>
            <View style={styles.buttonContainer}>
                <TouchableOpacity
                    onPress={() => { }}
                    style={styles.button}
                >
                    <Text style={styles.buttonText}>Login</Text>
                </TouchableOpacity>

                <TouchableOpacity
                    onPress={handleSingUp}
                    style={[styles.button, styles.buttonOutline]}
                >
                    <Text style={styles.buttonOutlineText}>Register</Text>
                </TouchableOpacity>

            </View>
        </KeyboardAvoidingView>
    )
}

export default RegisterScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    inputContainer: {
        width: '80%',
    },

    input: {
        backgroundColor: 'white',
        paddingHorizontal: 15,
        paddingVertical: 10,
        borderRadius: 10,
        marginTop: 5,

    },

    buttonContainer: {

        width: '60%',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 40,

    },

    button: {

        backgroundColor: colors.background,
        width: '100%',
        padding: 15,
        borderRadius: 10,
        alignItems: 'center',

    },
    buttonText: {
        color: colors.white,
        fontWeight: '700',
        fontSize: 16,
    },

    buttonOutline: {
        backgroundColor: 'white',
        marginTop: 5,
        borderColor: colors.secondary,
        borderWidth: 2,

    },

    buttonOutlineText: {
        color: colors.black,
        fontWeight: '700',
        fontSize: 16,

    },

})
