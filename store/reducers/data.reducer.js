import { CREATEDATA, READDATA } from "../actions/data.actions"

const initialState = {
    persona: [],
}

export const DataReducer = (state = initialState, action) => {
    switch (action.type) {
        case READDATA:
            return {
                ...state,
                persona: action.proba
            }
        case CREATEDATA:
            return {
                ...state,
            }
        default:
            return state

    }
}