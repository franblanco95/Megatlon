export const SELECT_PLAN = 'SELECT_PLAN';

export const selectPlan = (planId) => ({
    type: SELECT_PLAN,
    planId,
})