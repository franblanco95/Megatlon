import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk'

import { DeportesReducer } from './reducers/deportes.reducer';
import { AuthReducer } from './reducers/auth.reducer';

const RootReducer = combineReducers({
    deportes: DeportesReducer,
    auth: AuthReducer
})

export default createStore(RootReducer, applyMiddleware(thunk))