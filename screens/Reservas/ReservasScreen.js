import React from 'react'
import { View, StyleSheet, ScrollView } from 'react-native'
import { Deporte } from '../../components/Deporte'
import { useDispatch, useSelector } from 'react-redux'
import { selectDeporte } from '../../store/actions/deportes.actions'
import colors from '../../constants/colors'

export const ReservasScreen = ({ navigation }) => {

    const dispatch = useDispatch()

    const deportes = useSelector(state => state.deportes.list)

    const handleSelectedItem = (deporte) => {
        dispatch(selectDeporte(deporte.id));
        navigation.navigate('Detail', {
            name: deporte.name,
        })
    }
    return (
        <>
            <ScrollView
                style={styles.reservasContainer}
                contentInsetAdjustmentBehavior='automatic'
                showsVerticalScrollIndicator={false}>

                <View style={styles.deportes}>

                    {deportes.map((deportes => (
                        <View key={deportes.id}>
                            <Deporte deporte={deportes} onSelected={handleSelectedItem} />
                        </View>)))
                    }

                </View>
            </ScrollView>
        </>

    )
}

const styles = StyleSheet.create({
    reservasContainer: {
        flex: 1,
        backgroundColor: colors.primary,
    },
    // sede: {
    //     width: '100%',
    //     backgroundColor: 'black',
    //     flexDirection: 'row',
    //     justifyContent: 'center',
    //     alignItems: 'center',
    // },
    // text: {
    //     fontSize: 15,
    //     color: 'white',
    // },
    deportes: {
        // marginTop: 20,
        // justifyContent: 'center',
        // alignItems: 'center',

    }

})

