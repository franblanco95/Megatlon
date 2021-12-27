import React, { useEffect, useState } from 'react'
import { ScrollView, StyleSheet, View, Text } from 'react-native';
import { useSelector } from 'react-redux';
import Plan from '../../components/Plan'
import colors from '../../constants/colors'
import { readData } from '../../store/actions/data.actions'

import { LogBox } from 'react-native';
LogBox.ignoreLogs(['Setting a timer for a long period of time'])

export const ShopScreen = () => {

    const planes = useSelector(state => state.planes.list)

    const persona = useSelector(state => state.data.persona)
    console.log(persona)

    useEffect(() => {
        readData();
    }, [])

    return (
        <>
            <ScrollView
                horizontal
                contentContainerStyle={styles.container}>

                <Text>Hola</Text>
                {persona.map((doc => (
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
})