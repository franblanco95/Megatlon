import { PLANES } from '../../constants/planes'
import { SELECT_PLAN } from '../actions/planes.actions'

const initialState = {
    list: PLANES,
    selectedID: null
}

export const PlanesReducer = (state = initialState, action) => {
    switch (action.type) {
        case SELECT_PLAN:
            return {
                ...state,
                selectedID: action.planId,

            }
        default:
            return state;
    }
}