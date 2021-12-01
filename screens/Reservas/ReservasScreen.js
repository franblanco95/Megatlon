import React, { useState } from 'react'
import { View, Text, StyleSheet, Picker, FlatList } from 'react-native'
import { DEPORTES } from '../../constants/deportes'
import { Deporte } from '../../components/Deporte'


export const ReservasScreen = ({ navigation }) => {

    const [selectedValue, setSelectedValue] = useState("gonnet");

    const renderItem = ({ item }) => <Deporte deporte={item} onClick={() => console.log('asd')} />

    return (
        <View style={styles.container}>

            <View style={styles.sede}>
                <Text style={styles.text}>Tu Sede es:</Text>
                <Picker
                    selectedValue={selectedValue}
                    style={{ height: 50, width: 150 }}
                    onValueChange={(itemValue, itemIndex) => setSelectedValue(itemValue)
                    }
                >
                    <Picker.Item label="Selecciona un Club" value="0" color='#ffffff' />
                    <Picker.Item label="Java" value="java" />
                    <Picker.Item label="JavaScript" value="js" />
                </Picker>
            </View>

            <FlatList
                data={DEPORTES}
                renderItem={renderItem}
                keyExtractor={item => item.id}
                numColumns={2}
            />
        </View >
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
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
    }

})

