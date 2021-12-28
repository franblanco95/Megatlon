import React, { useEffect, useState } from 'react'
import { ScrollView, StyleSheet, View, Text, Button, TextInput } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import Plan from '../../components/Plan'
import colors from '../../constants/colors'
import { createData, readData } from '../../store/actions/data.actions'

import { LogBox } from 'react-native';
LogBox.ignoreLogs(['Setting a timer for a long period of time'])

export const ShopScreen = () => {

    const dispatch = useDispatch()

    const planes = useSelector(state => state.planes.list)

    const persona = useSelector(state => state.data.persona)

    useEffect(() => {
        dispatch(readData());
    }, [])

    const handleOrder = () => dispatch(createData(nuevoNombre))

    const [nuevoNombre, setNuevoNombre] = useState('')
    return (
        <>
            <ScrollView
                horizontal
                contentContainerStyle={styles.container}>
                <TextInput
                    style={styles.input}
                    value={nuevoNombre}
                    onChangeText={text => setNuevoNombre(text)} />

                <Button onPress={handleOrder} title='Create order' />

                <Text>Hola</Text>
                {persona?.map((doc => (
                    <View key={doc.id}>
                        <Text>{doc.name}</Text>
                        <Text>{doc.age}</Text>
                    </View>
                )))}

                {planes.map((planes => (
                    <Plan key={planes.id} plan={planes} />
                )))}

            </ScrollView>

        </>
    )
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        backgroundColor: colors.primary,
    },
    input: {
        height: 40,
        margin: 12,
        borderWidth: 1,
        padding: 10,
    },
})