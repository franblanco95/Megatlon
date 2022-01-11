import { auth } from "../../firebase";
import AsyncStorage from "@react-native-async-storage/async-storage";

export const SIGNUP = 'SIGNUP';
export const LOGIN = 'SIGNUP';
export const SIGNOUT = 'SIGNOUT';

export const signup = (email, password, name) => {
    return async dispatch => {
        auth
            .createUserWithEmailAndPassword(email, password)
            .then(userCredentials => {
                const user = userCredentials.user;
                user.getIdToken().then(idToken => {

                    AsyncStorage.setItem('@token', idToken);
                    AsyncStorage.setItem('@userId', user.uid);

                    dispatch({
                        type: SIGNUP,
                        token: idToken,
                        userId: user.uid,
                    });
                })

                user.updateProfile({
                    displayName: name,
                }).then(function () {
                    var displayName = user.displayName;
                })
            })
            .catch(error => alert(error.message))
    }
}


export const login = (email, password) => {
    return async dispatch => {
        auth
            .signInWithEmailAndPassword(email, password)
            .then(userCredentials => {
                const user = userCredentials.user;
                user.getIdToken().then(idToken => {

                    AsyncStorage.setItem('@token', idToken);
                    AsyncStorage.setItem('@userId', user.uid);

                    dispatch({
                        type: LOGIN,
                        token: idToken,
                        userId: user.uid,
                    });
                })
            })
            .catch(error => alert(error.message))


    }
}

export const signout = () => {
    return async dispatch => {

        const token = await AsyncStorage.removeItem('@token')
        const userId = await AsyncStorage.removeItem('@userId');

        auth
            .signOut()
            .then(() => {
                dispatch({
                    type: SIGNOUT,
                    token,
                    userId,

                })

            })
            .catch(error => alert(error.message))
    }
}

export const initAuthentication = () => {
    return async dispatch => {

        const token = await AsyncStorage.getItem('@token')
        const userId = await AsyncStorage.getItem('@userId')

        if (token !== null && userId !== null) {
            dispatch({
                type: SIGNUP,
                token,
                userId,
            })
        }
    }
}