import React, { useEffect, useState } from 'react'
import { StyleSheet, Text, View, KeyboardAvoidingView, TextInput, Image, TouchableOpacity, ImageBackground, Dimensions } from 'react-native'
import { useDispatch } from 'react-redux'
import colors from '../../constants/colors'
import { auth, db } from '../../firebase'
import { login } from '../../store/actions/auth.actions'

const { width, height } = Dimensions.get('window')

const LoginScreen = ({ navigation }) => {

    // useEffect(() => {
    //     const unsubscribe = auth.onAuthStateChanged(user => {
    //         if (user)
    //             // navigation.navigate("prueba")
    //             console.log('Hay Usuario Conectado')
    //     })
    //     return unsubscribe
    // }, [])

    const [email, setEmail] = useState();
    const [password, setPassword] = useState();

    const dispatch = useDispatch();

    const handleLogIn = () => {
        dispatch(login(email, password))
    }

    return (
        <KeyboardAvoidingView
            style={styles.container}
            behavior="padding"
        >
            <ImageBackground
                source={require('../../assets/megatlonbackground.jpg')}
                style={{ width: width, height: height, justifyContent: 'space-evenly' }}
            >
                <View style={styles.darkLayer}></View>

                <View style={styles.imageContainer}>
                    <Image
                        source={require('../../assets/megatlonlogo-02.png')} />
                </View>

                <View style={styles.titleContainer}>
                    <Text style={{ ...styles.text, ...styles.title }}>Bienvenido!</Text>
                    <Text style={styles.text}>Inicia sesión para ingresar a MegatlonApp</Text>
                </View>

                <View style={styles.inputMainContainer}>

                    <View style={styles.inputContainer}>
                        <View style={styles.icon}>
                            <Image source={require('../../assets/mail.png')} />
                        </View>
                        <TextInput
                            style={styles.input}
                            placeholder="Email"
                            value={email}
                            onChangeText={text => setEmail(text)}
                        >
                        </TextInput>
                    </View>

                    <View style={styles.inputContainer}>
                        <View style={styles.icon}>
                            <Image source={require('../../assets/lock.png')} />
                        </View>
                        <TextInput
                            style={styles.input}
                            placeholder="Contraseña"
                            value={password}
                            secureTextEntry
                            onChangeText={text => setPassword(text)}
                        >
                        </TextInput>
                    </View>

                </View>
                <View style={styles.buttonContainer}>
                    <TouchableOpacity
                        onPress={handleLogIn}
                        style={styles.button}
                    >
                        <Text style={styles.buttonText}>Iniciar Sesión</Text>
                    </TouchableOpacity>

                    {/* <TouchableOpacity
                        onPress={handleSingUp}
                        style={[styles.button, styles.buttonOutline]}
                    >
                        <Text style={styles.buttonOutlineText}>Register</Text>
                    </TouchableOpacity> */}

                </View>
                <View style={styles.footerContainer}>
                    <TouchableOpacity
                        onPress={() => { navigation.navigate('Register') }}>
                        <Text style={styles.signupText}>¿Sos nuevo? Registrate</Text>
                    </TouchableOpacity>
                    <Text style={styles.termsText}>Al registrarse, indica que ha leído y aceptado los Términos de servicio del parche</Text>
                </View>

            </ImageBackground>
        </KeyboardAvoidingView >
    )
}

export default LoginScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    darkLayer: {
        position: 'absolute',
        top: 0,
        bottom: 0,
        left: 0,
        right: 0,
        backgroundColor: '#000000',
        opacity: 0.5,
    },
    imageContainer: {
        alignItems: 'center',
        marginVertical: 20,
    },
    titleContainer: {
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: 10,
    },
    text: {
        color: colors.white,
        fontSize: 14,
    },
    title: {
        fontSize: 20,
        fontWeight: 'bold',
        marginBottom: 5,
    },
    inputMainContainer: {
        justifyContent: 'center',
        alignItems: 'center',
    },
    input: {
        backgroundColor: 'white',
        paddingHorizontal: 15,
        paddingVertical: 10,
        borderRadius: 10,
        marginTop: 5,

    },
    buttonContainer: {
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 40,
    },
    button: {
        backgroundColor: colors.secondary,
        width: '80%',
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
    footerContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 50,
    },
    signupText: {
        color: colors.secondary,
        fontWeight: 'bold',
        paddingBottom: 20,
    },
    termsText: {
        width: '80%',
        color: colors.white,
        textAlign: 'center',
        fontSize: 12,
    },
    inputContainer: {
        width: '80%',
        backgroundColor: colors.white,
        borderRadius: 10,
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'center',
        height: 48,
        marginTop: 10,
    },
    icon: {
        paddingHorizontal: 20,
    },
    input: {
        backgroundColor: colors.white,
        borderBottomColor: colors.white,
        color: '#727C8E',
        fontSize: 14,
    },

})
