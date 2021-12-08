import { SIGNUP } from "../actions/auth.actions";

const initialState = {
    token: null,
    userId: null,
    data: null,
}

export const AuthReducer = (state = initialState, action) => {
    switch (action.type) {
        case SIGNUP:
            return {
                ...state,
                token: token.action,
                userId: action.userId,
            }
        default:
            return state;
    }
}