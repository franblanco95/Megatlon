import React from 'react'
import { ScrollView, StyleSheet } from 'react-native';
import { useSelector } from 'react-redux';
import Plan from '../../components/Plan'
import colors from '../../constants/colors'
import { LogBox } from 'react-native';

LogBox.ignoreLogs(['Setting a timer for a long period of time'])

export const ShopScreen = () => {

    const planes = useSelector(state => state.planes.list)

    return (
        <ScrollView
            horizontal
            contentContainerStyle={styles.container}>

            {planes.map((planes => (
                <Plan key={planes.id} plan={planes} />
            )))}
        </ScrollView>

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