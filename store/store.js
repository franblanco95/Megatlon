import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import reactotron from '../reactotron';
import thunk from 'redux-thunk'

import { DeportesReducer } from './reducers/deportes.reducer';
import { AuthReducer } from './reducers/auth.reducer';
import { PlanesReducer } from './reducers/planes.reducer';
import { DataReducer } from './reducers/data.reducer';

const RootReducer = combineReducers({
    deportes: DeportesReducer,
    auth: AuthReducer,
    planes: PlanesReducer,
    data: DataReducer,
})

export default createStore(
    RootReducer,
    compose(
        applyMiddleware(thunk),
        reactotron.createEnhancer()
    ),
)