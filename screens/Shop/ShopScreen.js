import { LinearGradient } from 'expo-linear-gradient';
import React from 'react'
import { ScrollView, StyleSheet } from 'react-native';
import { PricingCard } from 'react-native-elements';

export const ShopScreen = () => {
    return (
        <ScrollView contentContainerStyle={styles.container}>
            {/* <PricingCard
                containerStyle={styles.prueba}
                color="#ed9645"
                title="Miembro Mensual"
                price="$790"
                info={['1 Persona', 'Todas las sedes', 'All Core Features']}
                button={{ title: 'COMPRAR', icon: 'person' }}
            />

            <PricingCard
                color="#4f9deb"
                title="Miembro Anual"
                price="$7900"
                info={['1 Persona', 'Todas las sedes', 'All Core Features']}
                button={{ title: 'COMPRAR', icon: 'flight-takeoff' }}
            /> */}

            <LinearGradient
                // Background Linear Gradient
                colors={['rgb(0,0,0)', 'orange']}
                style={styles.background}
                start={{ x: 0.1, y: 0.2 }}
                // end={{ x: 1, y: 1 }}
                // locations={[0.2, 0.9]}
            />

        </ScrollView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#222323',
    },
    prueba: {
        // backgroundColor: 'red',
        width: '65%',
    },
    background: {
        // position: 'absolute',
        // left: 0,
        // right: 0,
        // top: 0,
        height: 200,
        borderRadius: 10,
    },
})