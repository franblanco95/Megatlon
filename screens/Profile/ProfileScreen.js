import React from 'react'
import { Text, TouchableOpacity, ScrollView, Linking, StyleSheet } from 'react-native'
import { Avatar, SocialIcon, Button, Divider } from 'react-native-elements'

export const ProfileScreen = () => {

    return (
        <ScrollView contentContainerStyle={styles.container}>

            <Avatar
                size={100}
                rounded
                icon={{ name: 'user', type: 'font-awesome' }}
                onPress={() => console.log("Works!")}
                activeOpacity={0.7}
                containerStyle={styles.avatar}
            />


            <Text>Francisco Blanco</Text>

            <Divider orientation="vertical" color="red" />



            <Button
                type="solid"
                // disabled
                icon={{
                    name: "person",
                    size: 25,
                    color: "white"
                }}
                title="Información Personal" />
                
            <Button
                type="solid"
                // disabled
                icon={{
                    name: "person",
                    size: 25,
                    color: "white"
                }}
                title="Información Personal" />

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
        backgroundColor: '#222323',
    },
    avatar: {
        backgroundColor: 'gray',
    },
    icon: {
        backgroundColor: 'black',
    },
    button: {
        backgroundColor: 'white',
        padding: 15,
        width: '80%',
        borderRadius: 5,
    }
})
