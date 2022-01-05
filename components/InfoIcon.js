import React from 'react'
import { useNavigation } from '@react-navigation/native';
import FeatherIcon from 'react-native-vector-icons/Feather';
import colors from '../constants/colors'

const InfoIcon = () => {

    const navigation = useNavigation();

    return (
        <FeatherIcon
            name="info"
            size={27}
            color={colors.white}
            // onPress={() => navigation.navigate('MainNavigator', { screen: 'Info' })} />
            onPress={() => navigation.navigate('NOSOTROS')} />
    )
}

export default InfoIcon
