import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { TabNavigator } from './TabNavigator'
import  MainNavigator  from './MainNavigator'
import LoginNavigator from './LoginNavigator';
import { useSelector } from 'react-redux';

const AppNavigator = () => {

    const userId = useSelector(state => state.auth.userId)

    return (

        <NavigationContainer>
            {userId ?

                <MainNavigator /> : <LoginNavigator />
            }
        </NavigationContainer>
    )
}

export default AppNavigator
