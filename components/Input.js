import React, { useState } from 'react'
import { Image, StyleSheet, Text, TextInput, View } from 'react-native'
import colors from '../constants/colors'

const Input = ({ placeholder, icon, password }) => {

    const [state, setState] = useState({
        email: '',
        password: '',
    })

    // const { email, password } = state;

    const handleChangeText = text => {

    }

    return (
        <View style={styles.inputContainer}>
            <View style={styles.icon}>
                <Image source={icon} />
            </View>
            <TextInput
                style={styles.input}
                placeholder={placeholder}
                secureTextEntry={password}
                onChangeText={handleChangeText}
            // value={1}
            // onChangeText={() => console.log(asd)}
            >

            </TextInput>
        </View>
    )
}

export default Input

const styles = StyleSheet.create({

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
