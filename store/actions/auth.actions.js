import { auth } from "../../firebase";

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
                    console.log(idToken);

                })

                dispatch({
                    type: SIGNUP,
                    // token: user.accessToken,
                    userId: user.uid,
                });
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
                console.log('Logged in with:', user.email)
                dispatch({
                    type: LOGIN,
                    // token: user.IdToken,
                    userId: user.uid,
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