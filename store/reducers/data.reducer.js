import { READDATA } from "../actions/data.actions"

const initialState = {
    persona: null,
}

export const DataReducer = (state = initialState, action) => {
    switch (action.type) {
        case READDATA:
            return {
                ...state,
                persona: action.proba
            }
        default:
            return state

    }
}