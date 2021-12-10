import React, { useState } from 'react'
import { View, Text, StyleSheet, Picker, FlatList, ScrollView } from 'react-native'
import { Deporte } from '../../components/Deporte'
import { useDispatch, useSelector } from 'react-redux'
import { selectDeporte } from '../../store/actions/deportes.actions'
import colors from '../../constants/colors'

export const ReservasScreen = ({ navigation }) => {

    const [selectedValue, setSelectedValue] = useState("gonnet");

    const dispatch = useDispatch()

    const deportes = useSelector(state => state.deportes.list)

    const handleSelectedItem = (deporte) => {
        dispatch(selectDeporte(deporte.id));
        navigation.navigate('Detail', {
            name: deporte.name,
        })
    }

    return (
        <View style={styles.container}>
            <ScrollView
                contentInsetAdjustmentBehavior='automatic'
                showsVerticalScrollIndicator={false}>

                <View style={styles.sede}>
                    {/* <Text style={styles.text}>Tu Sede es:</Text> */}
                    {/* <Picker
                    selectedValue={selectedValue}
                    style={{ height: 50, width: 150 }}
                    onValueChange={(itemValue, itemIndex) => setSelectedValue(itemValue)
                    }
                >
                    <Picker.Item label="Selecciona un Club" value="0" color='#ffffff' />
                    <Picker.Item label="Java" value="java" />
                    <Picker.Item label="JavaScript" value="js" />
                </Picker> */}
                </View>
                <View style={styles.deportes}>

                    {deportes.map((deportes => (
                        <Deporte key={deportes.id} deporte={deportes} onSelected={handleSelectedItem} />)))
                    }
                </View>
            </ScrollView>
        </View >
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.primary,
    },
    sede: {
        width: '100%',
        backgroundColor: 'black',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
    },
    text: {
        fontSize: 15,
        color: 'white',
    },
    deportes: {
        marginTop: 20,
        justifyContent: 'center',
        flexDirection: 'row',
        flexWrap: 'wrap',

    }

})

