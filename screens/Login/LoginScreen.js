import React, { useEffect, useState } from 'react'
import { StyleSheet, Text, View, KeyboardAvoidingView, TextInput, Image, TouchableOpacity, ImageBackground, Dimensions } from 'react-native'
import { useDispatch } from 'react-redux'
import Input from '../../components/Input'
import colors from '../../constants/colors'
import { auth, db } from '../../firebase'
import { login, signup } from '../../store/actions/auth.actions'

const { width, height } = Dimensions.get('window')

const LoginScreen = ({ navigation }) => {

    useEffect(() => {
        const unsubscribe = auth.onAuthStateChanged(user => {
            if (user)
                // navigation.navigate("prueba")
                console.log('Hay Usuario Conectado')
        })
        return unsubscribe
    }, [])

    const [email, setEmail] = useState();
    const [password, setPassword] = useState();


    const dispatch = useDispatch();

    const handleSingUp = () => {
        dispatch(signup(email, password))
    }

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

                <View style={styles.inputContainer}>

                    <Input icon={require('../../assets/mail.png')} placeholder='Email' />

                    <Input icon={require('../../assets/lock.png')} placeholder='Contraseña' password />
                    {/* <TextInput
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
                    /> */}
                </View>
                <View style={styles.buttonContainer}>
                    <TouchableOpacity
                        onPress={handleLogIn}
                        style={styles.button}
                    >
                        <Text style={styles.buttonText}>Login</Text>
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
    inputContainer: {
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
    }

})
