import React from 'react'
import { ScrollView, StyleSheet } from 'react-native';
import { PricingCard } from 'react-native-elements';

export const ShopScreen = () => {
    return (
        <ScrollView contentContainerStyle={styles.container}>
            <PricingCard
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
            />

        </ScrollView>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#222323',
    },
    prueba: {
        // backgroundColor: 'red',
        width: '65%',
    }
})