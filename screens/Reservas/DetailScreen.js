import React from 'react'
import { ScrollView, View, Text, StyleSheet } from 'react-native'
import colors from '../../constants/colors'

export const DetailScreen = () => {

    const dayNames = ['Domingo', 'Lunes', 'Martes', 'Miercoles', 'Jueves', 'Viernes', 'Sabado']
    const monthNames = ['ENE', 'FEB', 'MAR', 'ABR', 'MAY', 'JUN', 'JUL', 'AGO', 'SEP', 'OCT', 'NOV', 'DIC']

    const dia = dayNames[new Date().getDay()];
    const date = new Date().getDate();
    const month = monthNames[new Date().getMonth()];

    const now = new Date()
    const totalDays = new Date(now.getFullYear(), now.getMonth() + 1, 0).getDate();
    const today = now.getDate();
    const remainingDays = totalDays - today;

    // const today = date.getDate()
    // const totalDays = new Date(date.getFullYear(), date.getMonth() + 1, 0).getDate();

    return (
        <ScrollView contentContainerStyle={styles.container}>
            {/* <View>
                <Text style={styles.bold}>Hora: 15:00</Text>
                <Text>Duración: 60 min</Text>
                <Text>Cupos Diponibles: 128</Text>
                <Text>{date}/ {dia}/{month}</Text>

                <Text>{now.toUTCString()}</Text>
                <Text>{totalDays}</Text>
                <Text>{today}</Text>
                <Text>{remainingDays}</Text>
            </View> */}
            <View style={styles.horarios}>
                <Text style={styles.text}>7:00 - 8:00</Text>
                <Text style={styles.text}>Cupos: 128</Text>
            </View>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.primary,
    },
    bold: {
        fontWeight: 'bold',
    },
    horarios: {
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    text: {
        color: colors.white,
    }

})