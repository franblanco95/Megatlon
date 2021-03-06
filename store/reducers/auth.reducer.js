import { SIGNUP } from "../actions/auth.actions";
import { LOGIN } from "../actions/auth.actions";
import { SIGNOUT } from "../actions/auth.actions";

const initialState = {
    token: null,
    userId: null,
}

export const AuthReducer = (state = initialState, action) => {
    switch (action.type) {
        case SIGNUP:
            return {
                ...state,
                token: action.token,
                userId: action.userId,
            }
        case LOGIN:
            return {
                ...state,
                token: action.token,
                userId: action.userId,
            }
        case SIGNOUT:
            return {
                ...state,
                token: action.token,
                userId: action.userId,
            }

        default:
            return state;
    }
}