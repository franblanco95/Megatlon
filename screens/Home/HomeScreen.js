import React from 'react'
import { ScrollView } from 'react-native'
import { View, StyleSheet } from 'react-native'
import Covid from '../../components/Covid'
import colors from '../../constants/colors'

export const HomeScreen = ({ navigation }) => {
    return (
        <>
            <ScrollView style={styles.container}>
                <View  >
                    <Covid navigation={navigation} />
                </View>
            </ScrollView>
        </>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.primary,
        // justifyContent: 'center',
        // alignItems: 'center',
    },

})