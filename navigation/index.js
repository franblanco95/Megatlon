import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { TabNavigator } from './TabNavigator'
import LoginNavigator from './LoginNavigator';
import { useSelector } from 'react-redux';

const MainNavigator = () => {

    const userId = useSelector(state => state.auth.userId)

    return (

        <NavigationContainer>
            {userId ?

                <TabNavigator /> : <LoginNavigator />
            }
        </NavigationContainer>
    )
}

export default MainNavigator
