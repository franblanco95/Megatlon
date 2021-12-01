import React from 'react'
import { Text, ScrollView, Linking, StyleSheet } from 'react-native'
import { Avatar, SocialIcon, Button } from 'react-native-elements'

export const ProfileScreen = () => {
    return (
        <ScrollView contentContainerStyle={styles.container}>
            <Avatar
                rounded
                size="large"
                containerStyle={styles.avatar}
                source={require('../../assets/default-avatar.jpg')}
            />
            <Text>Hola Francisco Blanco</Text>


            <SocialIcon
                type='whatsapp'
                iconColor='orange'
                iconSize={24}
                onPress={() => Linking.openURL('whatsapp://send?text=Hola&phone=+5492215758911')}
                style={styles.icon}
            />
            <SocialIcon
                type='instagram'
                iconColor='orange'
                iconSize={24}
                onPress={() => Linking.openURL('instagram://user?username=megatlon')}
                style={styles.icon}

            />
            <SocialIcon
                type='facebook'
                iconColor='orange'
                iconSize={24}
                onPress={() => Linking.openURL('fb://profile/135030645036')}
                style={styles.icon}
            />
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',

    },
    avatar: {
        width: 90,
        height: 90,
        marginVertical: 15,
    },
    icon: {
        backgroundColor: 'black',
    }
})
