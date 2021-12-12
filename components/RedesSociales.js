import React from 'react'
import { Linking } from 'react-native'
import { StyleSheet, View } from 'react-native'
import { SocialIcon } from 'react-native-elements'

const RedesSociales = () => {
    return (
        <>
            <View style={styles.redesContainer}>
                <SocialIcon
                    type='whatsapp'
                    iconColor='orange'
                    iconSize={24}
                    onPress={() => Linking.openURL('whatsapp://send?text=Hola&phone=+5492215758911')}
                    style={{ backgroundColor: 'black' }}
                />
                <SocialIcon
                    type='instagram'
                    iconColor='orange'
                    iconSize={24}
                    onPress={() => Linking.openURL('instagram://user?username=megatlon')}
                    style={{ backgroundColor: 'black' }}

                />
                <SocialIcon
                    type='facebook'
                    iconColor='orange'
                    iconSize={24}
                    onPress={() => Linking.openURL('fb://profile/135030645036')}
                    style={{ backgroundColor: 'black' }}
                />
            </View>
        </>
    )
}

export default RedesSociales

const styles = StyleSheet.create({
    redesContainer: {
        flexDirection: 'row',
    },
})
