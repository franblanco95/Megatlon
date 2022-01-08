import React, { useState } from 'react'
import { ScrollView, View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import { useSelector } from 'react-redux'
import colors from '../../constants/colors'

export const DetailScreen = () => {

    const [selected, setSelected] = useState(false)

    const deporteId = useSelector(state => state.deportes.selectedID)
    const deporte = useSelector(state => state.deportes.list.find(item => item.id === deporteId))

    // const selectedItem = (value) => {
    //     setSelected(value);
    // }

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
            {console.log(deporte)}

            <Text style={styles.dayTitle}>Selecciona tu reserva</Text>

            <View style={styles.daysContainer}>
                <View style={styles.day}>
                    <Text style={styles.dayText}>{month}</Text>
                    <Text style={[styles.dayText, styles.textBold]}>{date}</Text>
                </View>
                <View style={styles.day}>
                    <Text style={styles.dayText}>{month}</Text>
                    <Text style={[styles.dayText, styles.textBold]}>{date}</Text>
                </View>
                <View style={styles.day}>
                    <Text style={styles.dayText}>{month}</Text>
                    <Text style={[styles.dayText, styles.textBold]}>{date}</Text>
                </View>
                <View style={styles.day}>
                    <Text style={styles.dayText}>{month}</Text>
                    <Text style={[styles.dayText, styles.textBold]}>{date}</Text>
                </View>
                <View style={styles.day}>
                    <Text style={styles.dayText}>{month}</Text>
                    <Text style={[styles.dayText, styles.textBold]}>{date}</Text>
                </View>
            </View>
            {/* <View>
                <Text style={styles.textBold}>Hora: 15:00</Text>
                <Text>Duración: 60 min</Text>
                <Text>Cupos Diponibles: 128</Text>
                <Text>{date}/ {dia}/{month}</Text>

                <Text>{now.toUTCString()}</Text>
                <Text>{totalDays}</Text>
                <Text>{today}</Text>
                <Text>{remainingDays}</Text>
            </View> */}
            <Text style={styles.dayTitle}>Horarios</Text>

            <View style={styles.horariosContainer}>
                <TouchableOpacity style={styles.horarios} onPress={() => setSelected(true)}>
                    <Text style={selected === false ? styles.text : styles.textSelected}>7:00 - 8:00</Text>
                    <Text style={styles.text}>Cupos: 128</Text>
                </TouchableOpacity>
            </View>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.primary,
        paddingHorizontal: 10,
    },
    textBold: {
        fontWeight: 'bold',
    },
    daysContainer: {
        flexDirection: 'row',
        justifyContent: 'space-around',
    },
    dayTitle: {
        fontWeight: 'bold',
        color: colors.white,
        marginVertical: 20,
        fontSize: 20,

    },
    day: {
        alignItems: 'center',
        borderWidth: 1,
        borderColor: '#C7CBCF',
        borderRadius: 12,
        paddingHorizontal: 18,
        paddingVertical: 15,
        marginHorizontal: 10,
    },
    dayText: {
        color: colors.white,
    },
    horariosContainer: {
    },
    horarios: {
        borderWidth: 1,
        borderColor: colors.white,
        borderRadius: 8,
        paddingHorizontal: 10,
        paddingVertical: 15,
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    horariosSelected: {
        backgroundColor: colors.secondary,
    },
    text: {
        color: colors.white,
    },
    textSelected: {
        color: colors.secondary,
    },

})