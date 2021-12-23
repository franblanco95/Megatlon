import React from 'react'
import { ScrollView, StyleSheet, View, Text } from 'react-native';
import { useSelector } from 'react-redux';
import Plan from '../../components/Plan'
import colors from '../../constants/colors'

export const ShopScreen = () => {

    const planes = useSelector(state => state.planes.list)

    return (
        <>
            <ScrollView
                horizontal
                contentContainerStyle={styles.container}>

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