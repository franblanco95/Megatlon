import { URL_AUTH_API } from "../../constants/database";

export const SIGNUP = 'SIGNUP';

export const signup = (email, password) => {
    return async dispatch => {
        const response = await fetch(URL_AUTH_API, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                email,
                password,
                returnSecureToken: true,
            }),
        });
        if (!response.ok) {
            const errorResponse = await response.json();
            const errorID = errorResponse.error.message;

            let message = 'No se ha podido registrar';
            if (errorID === 'EMAIL_EXISTS') message = 'Este email ya está registrado';

            throw new error(message);
        }

        const data = await response.json();

        dispatch({
            type: SIGNUP,
            token: data.idToken,
            userId: data.localId,
        });
    }
}