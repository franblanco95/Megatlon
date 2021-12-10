import { auth } from "../../firebase";

export const SIGNUP = 'SIGNUP';
export const LOGIN = 'SIGNUP';
export const SIGNOUT = 'SIGNOUT';

export const signup = (email, password) => {
    return async dispatch => {
        auth
            .createUserWithEmailAndPassword(email, password)
            .then(userCredentials => {
                const user = userCredentials.user;
                console.log('Registered with:', user)
                dispatch({
                    type: SIGNUP,
                    token: user.idToken,
                    userId: user.localId,
                });
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
                console.log('Logged in with:', user.email)
                dispatch({
                    type: LOGIN,
                    token: user.IdToken,
                    userId: user.localId,
                })
            })
            .catch(error => alert(error.message))
    }
}

export const signout = () => {
    return async dispatch => {
        auth
            .signOut()
            .then(() => {
                dispatch({
                    type: SIGNOUT,

                })

            })
            .catch(error => alert(error.message))
    }
}