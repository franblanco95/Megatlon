import React from 'react'
import { StyleSheet, Text, View, Image } from 'react-native'
import RedesSociales from '../../components/RedesSociales'
import colors from '../../constants/colors'

const InfoScreen = () => {
    return (
        <View style={styles.infoMainContainer}>

            <Image
                style={styles.nosotrosImage}
                source={require('../../assets/nosotros.png')} />
            <View style={styles.textContainer}>
                <Text style={styles.infoText}>Megatlon es la mayor red de gimnasios del país, siendo pioneros del entrenamiento en casa y líderes del fitness online en Argentina. Con más de 33 sucursales en CABA, Provincia de Buenos Aires, Rosario, y Córdoba, 140.000 socios y 1.600 colaboradores.</Text>
            </View>

            <View style={{
                height: 0.5,
                width: '75%',
                backgroundColor: colors.white,
            }}></View>

            <View style={styles.textContainer}>
                <Text style={styles.infoTitles}>Misión</Text>
                <Text style={styles.infoText}>Mejorar la calidad de vida de las personas a través de la actividad física, el desarrollo de vínculos sociales y la promoción de hábitos saludables.</Text>
            </View>

            <View style={{
                height: 0.5,
                width: '75%',
                backgroundColor: colors.white,
            }}></View>

            <View style={styles.textContainer}>
                <Text style={styles.infoTitles}>Contacto</Text>
                <Text style={styles.infoText}>Visita nuestras redes sociales para cualquier consulta que tengas!</Text>
                <RedesSociales />
            </View>
        </View>
    )
}

export default InfoScreen

const styles = StyleSheet.create({
    infoMainContainer: {
        flex: 1,
        backgroundColor: colors.primary,
        paddingHorizontal: 10,
        alignItems: 'center',
    },
    nosotrosImage: {
        height: 130,
        width: '100%',
        borderRadius: 10,
        alignItems: 'center',
    },
    textContainer: {
        alignItems: 'center',
        marginVertical: 20,
    },
    infoText: {
        color: colors.white,
        textAlign: 'justify',
        lineHeight: 25,
    },
    infoTitles: {
        color: colors.secondary,
        fontSize: 17,
        fontWeight: 'bold',
    }
})
