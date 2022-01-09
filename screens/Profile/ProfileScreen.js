import React from 'react'
import { TouchableOpacity } from 'react-native'
import { Text, View, StyleSheet } from 'react-native'
import { Avatar, Divider } from 'react-native-elements'
import FeatherIcon from 'react-native-vector-icons/Feather';
import colors from '../../constants/colors'
import { useDispatch } from 'react-redux';
import { signout } from '../../store/actions/auth.actions';
import { auth } from "../../firebase";

export const ProfileScreen = ({ navigation }) => {

    const dispatch = useDispatch()

    const handleSignOut = () => {
        dispatch(signout())
    }

    return (
        <View style={styles.profileContainer}>
            <View style={styles.header}>

                <Avatar
                    size={100}
                    rounded
                    icon={{ name: 'user', type: 'font-awesome' }}
                    // onPress={() => console.log("Works!")}
                    containerStyle={{ backgroundColor: 'gray', marginBottom: 10 }}
                >
                    <Avatar.Accessory size={35} />
                </Avatar>


                <Text style={styles.userName}>{auth.currentUser?.displayName}</Text>

            </View>

            <Divider orientation="vertical" color="red" />

            <View style={styles.buttonContainer}>

                <TouchableOpacity
                    style={styles.button}
                    onPress={() => console.log("Action!")}
                >

                    <FeatherIcon name="user" size={24} color={colors.white} />
                    <Text style={styles.buttonText}>Información Personal</Text>
                </TouchableOpacity>

                <TouchableOpacity
                    style={styles.button}
                    onPress={() => navigation.navigate('Turnos')}
                >
                    <FeatherIcon name="calendar" size={24} color={colors.white} />
                    <Text style={styles.buttonText}>Mis Turnos</Text>
                </TouchableOpacity>

                <TouchableOpacity
                    style={styles.button}
                    onPress={() => console.log("Action!")}
                >

                    <FeatherIcon name="book" size={24} color={colors.white} />
                    <Text style={styles.buttonText}>Mi Plan</Text>
                </TouchableOpacity>

                <TouchableOpacity
                    style={styles.button}
                    onPress={() => console.log("Action!")}
                >

                    <FeatherIcon name="settings" size={24} color={colors.white} />
                    <Text style={styles.buttonText}>Configuración</Text>
                </TouchableOpacity>

                <TouchableOpacity
                    style={styles.button}
                    onPress={handleSignOut}
                >

                    <FeatherIcon name="log-out" size={24} color={colors.white} />
                    <Text style={styles.buttonText}>Cerrar Sesión</Text>
                </TouchableOpacity>



            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    profileContainer: {
        flex: 1,
        backgroundColor: colors.primary,
    },
    header: {
        alignItems: 'center',
        paddingVertical: 15,
    },

    userName: {
        color: colors.white,
        fontSize: 18,
        fontWeight: 'bold'
    },

    button: {
        flexDirection: 'row',
        // backgroundColor: colors.secondary,
        borderWidth: 1,
        borderColor: colors.secondary,
        alignItems: 'center',
        paddingHorizontal: 15,
        paddingVertical: 13,
        borderRadius: 5,
        width: '75%',
        marginBottom: 15,

    },
    buttonContainer: {
        marginTop: 30,
        alignItems: 'center',

    },
    buttonText: {
        color: colors.white,
        marginLeft: 20,
        fontSize: 15,
    },
})
