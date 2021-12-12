import React from 'react'
import { Image, StyleSheet, Text, TextInput, View } from 'react-native'
import colors from '../constants/colors'

const Input = ({ placeholder, icon, password }) => {


    return (
        <View style={styles.container}>
            <View style={styles.icon}>
                <Image source={icon} />
            </View>
            <TextInput
                style={styles.input}
                placeholder={placeholder}
                // value={1}
                // onChangeText={() => console.log(asd)}
            >

            </TextInput>
        </View>
    )
}

export default Input

const styles = StyleSheet.create({

    container: {
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
        paddingLeft: 20,
    },
    input: {
        backgroundColor: colors.white,
        borderBottomColor: colors.white,
        color: '#727C8E',
        fontSize: 14,
        paddingLeft: 15,

    },

})
