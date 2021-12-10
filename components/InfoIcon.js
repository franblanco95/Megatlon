import React from 'react'
import FeatherIcon from 'react-native-vector-icons/Feather';
import colors from '../constants/colors'

const InfoIcon = ({ navigation }) => {
    return (
        <FeatherIcon
            name="info"
            size={27}
            color={colors.white}
            onPress={() => navigation.navigate("Info")} />
    )
}

export default InfoIcon
