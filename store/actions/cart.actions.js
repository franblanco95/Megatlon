export const REMOVE_ITEM = 'REMOVE_ITEM';
export const ADD_ITEM = 'ADD_ITEM';

export const addItem = (plan) => ({
    type: ADD_ITEM,
    plan,
})

export const removeItem = (planID) => ({
    type: REMOVE_ITEM,
    planID,
})

export const confirmCart = () => {

}