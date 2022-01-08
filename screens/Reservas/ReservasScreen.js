import React, { useState } from 'react'
import { View, StyleSheet, ScrollView, Picker } from 'react-native'
import { Deporte } from '../../components/Deporte'
import { useDispatch, useSelector } from 'react-redux'
import { selectDeporte } from '../../store/actions/deportes.actions'
import colors from '../../constants/colors'

export const ReservasScreen = ({ navigation }) => {

    const dispatch = useDispatch()

    const deportes = useSelector(state => state.deportes.list)

    const handleSelectedItem = (deporte) => {
        dispatch(selectDeporte(deporte.id))
        navigation.navigate('Detail', {
            name: deporte.name,
        })
    }
    return (
        <ScrollView
            style={styles.reservasContainer}
            contentInsetAdjustmentBehavior='automatic'
            showsVerticalScrollIndicator={false}>


            <View>

                {deportes.map((deportes => (
                    <View key={deportes.id}>
                        <Deporte deporte={deportes} onSelected={handleSelectedItem} />
                    </View>)))
                }

            </View>
        </ScrollView>

    )
}

const styles = StyleSheet.create({
    reservasContainer: {
        flex: 1,
        backgroundColor: colors.primary,
    }
})

