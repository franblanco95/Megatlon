import React, { useEffect } from 'react'
import { NavigationContainer } from '@react-navigation/native'
import MainNavigator from './MainNavigator'
import LoginNavigator from './LoginNavigator';
import { useSelector, useDispatch } from 'react-redux';
import { initAuthentication } from '../store/actions/auth.actions';

const AppNavigator = () => {

    const dispatch = useDispatch()

    const userId = useSelector(state => state.auth.userId)

    useEffect(() => {
        dispatch(initAuthentication())
    }, [])


    return (

        <NavigationContainer>
            {userId ?

                <MainNavigator /> : <LoginNavigator />
            }
        </NavigationContainer>
    )
}

export default AppNavigator
