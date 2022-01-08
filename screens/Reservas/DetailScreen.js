import React, { useState } from 'react'
import { ScrollView, View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import { useSelector } from 'react-redux'
import colors from '../../constants/colors'
import moment from 'moment'

export const DetailScreen = () => {

    const [hourSelected, setHourSelected] = useState()
    const [daySelected, setDaySelected] = useState()

    const deporteId = useSelector(state => state.deportes.selectedID)
    const deporte = useSelector(state => state.deportes.list.find(item => item.id === deporteId))

    const selectedHour = (value) => {
        setHourSelected(value);
    }
    const selectedDay = (value) => {
        setDaySelected(value);
    }

    moment.locale('es', {
        months: 'Enero_Febrero_Marzo_Abril_Mayo_Junio_Julio_Agosto_Septiembre_Octubre_Noviembre_Diciembre'.split('_'),
        monthsShort: 'Enero._Feb._Mar_Abr._May_Jun_Jul._Ago_Sept._Oct._Nov._Dec.'.split('_'),
        weekdays: 'Domingo_Lunes_Martes_Miercoles_Jueves_Viernes_Sabado'.split('_'),
        weekdaysShort: 'Dom._Lun._Mar._Mier._Jue._Vier._Sab.'.split('_'),
        weekdaysMin: 'Do_Lu_Ma_Mi_Ju_Vi_Sa'.split('_')
    }
    );

    var enumerateDaysBetweenDates = function (startDate, endDate) {
        var now = startDate,
            dates = [];

        while (now.isSameOrBefore(endDate)) {
            const mes = now.format('DD')
            const dia = now.format('ddd')

            dates.push({
                mes: mes,
                dia: dia
            });
            now.add(1, 'days');
        }
        return dates;
    };

    var fromDate = moment();
    var toDate = moment().add(4, 'days');
    var results = enumerateDaysBetweenDates(fromDate, toDate);

    return (
        <ScrollView
            contentInsetAdjustmentBehavior='automatic'
            showsVerticalScrollIndicator={false}
            contentContainerStyle={styles.container}>

            <Text style={styles.dayTitle}>Selecciona tu reserva</Text>
            <ScrollView horizontal style={styles.daysContainer}>
                {results.map((item, index) => (

                    <TouchableOpacity
                        style={index === daySelected ? styles.daySelected : styles.day}
                        key={index}
                        onPress={() => selectedDay(index)}>

                        <Text style={styles.dayText}>{item.dia}</Text>
                        <Text style={[styles.dayText, styles.textBold]}>{item.mes}</Text>
                    </TouchableOpacity>
                ))}
            </ScrollView>

            <Text style={styles.dayTitle}>Horarios</Text>

            <View style={styles.horariosContainer}>

                {deporte.turnos.map((turno, index) => (

                    <TouchableOpacity
                        style={index === hourSelected ? styles.horariosSelected : styles.horarios}
                        key={index}
                        onPress={() => selectedHour(index)}>

                        <Text style={styles.text}>{turno}</Text>
                        <Text style={styles.text}>Cupos: 128</Text>
                    </TouchableOpacity>


                ))}

            </View>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: colors.primary,
        paddingHorizontal: 10,
    },
    textBold: {
        fontWeight: 'bold',
    },
    daysContainer: {
        flexDirection: 'row',
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
    daySelected: {
        alignItems: 'center',
        borderWidth: 2,
        borderColor: colors.secondary,
        borderRadius: 12,
        paddingHorizontal: 18,
        paddingVertical: 15,
        marginHorizontal: 10,

    },
    dayText: {
        color: colors.white,
        textTransform: 'uppercase',
    },
    horarios: {
        borderWidth: 1,
        borderColor: colors.white,
        borderRadius: 8,
        paddingHorizontal: 10,
        paddingVertical: 15,
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 10,
    },
    horariosSelected: {
        borderWidth: 2,
        borderColor: colors.secondary,
        borderRadius: 8,
        paddingHorizontal: 10,
        paddingVertical: 15,
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 10,
    },
    text: {
        color: colors.white,
    },
})