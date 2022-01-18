import React from 'react'
import { View, StyleSheet, ScrollView, Dimensions, TouchableOpacity, Image, Text } from 'react-native'
import { Video } from 'expo-av';
import Covid from '../../components/Covid'
import colors from '../../constants/colors'
import Carousel from 'react-native-snap-carousel';
import { carousel } from '../../constants/carousel'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { useSelector } from 'react-redux';


const { width, height } = Dimensions.get('window');


export const HomeScreen = ({ navigation }) => {

    const deportes = useSelector(state => state.deportes.list)

    const renderItem = ({ item }) => (

        <Image
            style={{ width: '100%', height: 200 }}
            source={item.image}
            resizeMode='contain'
        />
    )

    return (
        <ScrollView style={styles.container}>

            <View style={{ marginVertical: 20 }}>
                <Carousel
                    layout={"default"}
                    firstItem={1}
                    data={carousel}
                    renderItem={renderItem}
                    sliderWidth={width}
                    itemWidth={200}
                />
            </View>

            <Covid navigation={navigation} />
            <View style={styles.categoryContainer}>

                <Text style={styles.categoryTitle}>Megatlon Play - On Demand</Text>
                <ScrollView horizontal style={{ flexDirection: 'row' }}>
                    {deportes.map((item => (
                        <TouchableOpacity key={item.id} style={styles.category} >
                            <MaterialCommunityIcons name={item.icon} size={27} color={colors.black} />

                        </TouchableOpacity>

                    )))}
                </ScrollView>
            </View>
            <View style={{ alignItems: 'center', justifyContent: 'center' }}>

                <Video
                    source={{ uri: 'http://d23dyxeqlo5psv.cloudfront.net/big_buck_bunny.mp4' }}
                    // source={{
                    //     uri: 'http://www.youtube.com/watch?v=341miyxu02c',
                    //     overrideFileExtensionAndroid: 'http://www.youtube.com/watch?v=341miyxu02c.m3u8'
                    // }}
                    style={styles.video}
                    useNativeControls
                    resizeMode="contain"
                    isLooping={false}
                />
            </View>
        </ScrollView >
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.primary,
    },
    video: {
        width: 350,
        height: 200,
        borderRadius: 20,
        marginVertical: 15,
    },
    categoryTitle: {
        color: colors.white,
        fontWeight: 'bold',
        fontSize: 16,
        marginVertical: 10,
    },
    categoryContainer: {
        paddingHorizontal: 10,
    },
    category: {
        backgroundColor: colors.white,
        padding: 15,
        borderRadius: 30,
        marginRight: 10,
    }

})