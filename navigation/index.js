import { NavigationContainer } from '@react-navigation/native'
import React from 'react'
import { TabNavigator } from './TabNavigator'
import LoginNavigator from './LoginNavigator';

const MainNavigator = () => {

    const userId = ''
    return (

        <NavigationContainer>
            {userId ?
                <TabNavigator /> : <LoginNavigator />
            }
        </NavigationContainer>
    )
}

export default MainNavigator
