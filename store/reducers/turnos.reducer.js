import { CREATE_TURNO, READ_TURNO } from "../actions/turnos.actions"

const initialState = {
    filteredTurnos: [],
}

export const TurnosReducer = (state = initialState, action) => {
    switch (action.type) {
        case READ_TURNO:
            return {
                ...state,
                filteredTurnos: action.turno,
            }
        case CREATE_TURNO:
            return {
                ...state,
            }
        default:
            return state

    }
}