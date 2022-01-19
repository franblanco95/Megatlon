import React, { useEffect } from 'react'
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import { useSelector, useDispatch } from 'react-redux'
import { readTurno } from '../../store/actions/turnos.actions'
import colors from '../../constants/colors'

const TurnosScreen = ({ navigation }) => {

    const dispatch = useDispatch()

    const turnos = useSelector(state => state.turnos.filteredTurnos)

    useEffect(() => {
        dispatch(readTurno());
    }, [])

    return (
        <View style={styles.turnosMainContainer}>

            {turnos.map((turno, index) => (
                <View key={index} style={styles.turnoContainer}>
                    <View>
                        <Text style={styles.turnosText}>{turno.deporte}</Text>
                        <Text style={styles.turnosText}>Dia: {turno.dia}</Text>
                        <Text style={styles.turnosText}>Hora: {turno.hora}</Text>
                    </View>
                    <TouchableOpacity
                        onPress={() => navigation.navigate('Qr')}
                        style={styles.buttonContainer}
                    >
                        <Text style={styles.buttonText}>Mostrar Código QR</Text>
                    </TouchableOpacity>
                </View>

            ))}
        </View >
    )
}

export default TurnosScreen

const styles = StyleSheet.create({
    turnosMainContainer: {
        flex: 1,
        paddingHorizontal: 10,
        backgroundColor: colors.primary,
    },
    turnoContainer: {
        flexDirection: 'row',
        backgroundColor: 'gray',
        justifyContent: 'space-between',
        padding: 10,
        borderRadius: 10,
        marginBottom: 10,
    },
    turnosText: {
        color: colors.white,
    },
    buttonContainer: {
        backgroundColor: colors.secondary,
        paddingHorizontal: 15,
        paddingVertical: 5,
        borderRadius: 10,
        justifyContent: 'center',

    },
    buttonText: {
        fontWeight: 'bold',
        color: colors.white,
    }
})
