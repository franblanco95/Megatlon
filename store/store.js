import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk'

import { DeportesReducer } from './reducers/deportes.reducer';

const RootReducer = combineReducers({
    deportes: DeportesReducer
})

export default createStore(RootReducer, applyMiddleware(thunk))