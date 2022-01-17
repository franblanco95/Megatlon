import React, { useState } from 'react'
import { View, StyleSheet, ScrollView, Dimensions, Text, Image } from 'react-native'
import { Video } from 'expo-av';
import Covid from '../../components/Covid'
import colors from '../../constants/colors'
import Carousel from 'react-native-snap-carousel';
import { carousel } from '../../constants/carousel'

const { width, height } = Dimensions.get('window');


export const HomeScreen = ({ navigation }) => {

    const renderItem = ({ item }) => (
        <View style={{
            backgroundColor: 'yellow',
            height: 200,
            width: 200,
        }}>
            <Image
                source={item.image}
                resizeMode='contain'
            />
        </View>
    )

    return (
        <>
            <ScrollView style={styles.container}>
                <View>

                    <Carousel
                        layout={"default"}
                        firstItem={1}
                        data={carousel}
                        renderItem={renderItem}
                        sliderWidth={width}
                        itemWidth={200}
                        itemHeight={240}
                    />

                    <Covid navigation={navigation} />

                    <Video
                        source={{ uri: 'http://d23dyxeqlo5psv.cloudfront.net/big_buck_bunny.mp4' }}
                        style={styles.video}
                        useNativeControls
                        resizeMode="cover"
                        isLooping={false}
                    />

                </View>
            </ScrollView>
        </>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.primary,
    },
    video: {
        width: width,
        height: height / 3,
    }

})