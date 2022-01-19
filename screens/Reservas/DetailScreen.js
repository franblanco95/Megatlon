import React, { useState, useEffect } from 'react'
import { ScrollView, View, Text, StyleSheet, TouchableOpacity, Button, Modal, Pressable } from 'react-native'
import { useSelector, useDispatch } from 'react-redux'
import { createTurno } from '../../store/actions/turnos.actions'
import colors from '../../constants/colors'
import moment from 'moment'

export const DetailScreen = ({ navigation }) => {

    const dispatch = useDispatch()

    const [hourIndex, setHourIndex] = useState()
    const [dayIndex, setDayIndex] = useState()

    const [modalVisible, setModalVisible] = useState(false);

    const [hourSelected, setHourSelected] = useState()
    const [daySelected, setDaySelected] = useState()

    const deporte = useSelector(state => state.deportes.deporteFiltrado)

    const selectedHour = (index, hour) => {
        setHourSelected(hour);
        setHourIndex(index);

    }
    const selectedDay = (index, day) => {
        setDaySelected(day);
        setDayIndex(index);
    }

    useEffect(() => {
        handleOpenModal();

    }, [daySelected, hourSelected])

    const handleOrder = () => {
        dispatch(createTurno(hourSelected, daySelected, deporte.name))
        setModalVisible(!modalVisible)
        navigation.goBack()
    }

    const handleOpenModal = () => {
        setModalVisible(hourSelected !== undefined && daySelected !== undefined)
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
                        style={index === dayIndex ? styles.daySelected : styles.day}
                        key={index}
                        onPress={() => selectedDay(index, item.dia)}>

                        <Text style={styles.dayText}>{item.dia}</Text>
                        <Text style={[styles.dayText, styles.textBold]}>{item.mes}</Text>
                    </TouchableOpacity>
                ))}
            </ScrollView>

            <Text style={styles.dayTitle}>Horarios</Text>

            <View style={styles.horariosContainer}>

                {deporte.turnos.map((turno, index) => (

                    <TouchableOpacity
                        style={index === hourIndex ? styles.horariosSelected : styles.horarios}
                        key={index}
                        onPress={() => selectedHour(index, turno)}>

                        <Text style={styles.text}>{turno}</Text>
                        <Text style={styles.text}>Cupos: 128</Text>
                    </TouchableOpacity>


                ))}
            </View>


            <View style={styles.centeredView}>
                <Modal
                    animationType="fade"
                    transparent={true}
                    visible={modalVisible}
                    onRequestClose={() => {
                        Alert.alert("Modal has been closed.");
                        setModalVisible(!modalVisible);
                    }}
                >
                    <View style={styles.centeredView}>
                        <View style={styles.modalView}>
                            <Text style={styles.modalText}>Estas seguro de querer reservar un turno de {deporte.name} para el {daySelected} {hourSelected} ?</Text>
                            <View style={{ flexDirection: 'row' }}>
                                <Pressable
                                    style={[styles.button, styles.buttonClose]}
                                    onPress={() => setModalVisible(!modalVisible)}
                                >
                                    <Text style={styles.textStyle}>Cancelar</Text>
                                </Pressable>

                                <Pressable
                                    style={[styles.button, styles.buttonClose]}
                                    onPress={() => handleOrder(hourSelected, daySelected, deporte.name)}
                                >
                                    <Text style={styles.textStyle}>Aceptar</Text>
                                </Pressable>
                            </View>
                        </View>
                    </View>
                </Modal>

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

    centeredView: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        marginTop: 22
    },
    modalView: {
        margin: 20,
        backgroundColor: "white",
        borderRadius: 20,
        padding: 35,
        alignItems: "center",
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5
    },
    button: {
        borderRadius: 20,
        padding: 10,
        elevation: 2,
        marginHorizontal: 15
    },
    buttonOpen: {
        backgroundColor: "#F194FF",
    },
    buttonClose: {
        backgroundColor: "#2196F3",
    },
    textStyle: {
        color: "white",
        fontWeight: "bold",
        textAlign: "center"
    },
    modalText: {
        marginBottom: 15,
        textAlign: "center"
    }

})