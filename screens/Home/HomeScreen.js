import React from 'react'
import { View, StyleSheet, ScrollView, Dimensions } from 'react-native'
import Covid from '../../components/Covid'
import colors from '../../constants/colors'

const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;

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