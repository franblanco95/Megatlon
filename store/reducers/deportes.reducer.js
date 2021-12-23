import { DEPORTES } from '../../constants/deportes'
import { SELECT_DEPORTE } from '../actions/deportes.actions'

const initialState = {
    list: DEPORTES,
    selectedID: null,
}

export const DeportesReducer = (state = initialState, action) => {
    switch (action.type) {
        case SELECT_DEPORTE:
            return {
                ...state,
                selectedID: action.deporteId,
            }
        default:
            return state;
    }
}