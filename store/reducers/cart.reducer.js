import { ADD_ITEM, REMOVE_ITEM } from "../actions/cart.actions";

const initialState = {
    plans: [],
    total: 0,
}

const sumTotal = (list) => list
    .map(item => item.price)
    .reduce((a, b) => a + b, 0)

export const CartReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_ITEM:
            const index = state.plans.findIndex(plan => plan.id === action.plan.id)
            if (index === -1) {
                // const item = { ...action.item, quantity: action.counter };
                const plan = { ...action.plan };
                const updateCart = [...state.plans, plan];
                return {
                    ...state,
                    plans: updateCart,
                    total: sumTotal(updateCart)
                }
            }
            const plans = state.plans.map(plan => {
                // if (plan.id === action.plan.id) plan.quantity = plan.quantity + action.counter
                if (plan.id === action.plan.id) plan.quantity = plan.quantity
                return plan
            })
            return {
                ...state,
                plans,
                total: sumTotal(plans),
            }
        case REMOVE_ITEM:
            const updatePlans = state.plans.filter(plan => plan.id !== action.planID)
            return {
                ...state,
                plans: updatePlans,
                total: sumTotal(updatePlans)
            }
        default:
            return state;
    }
}