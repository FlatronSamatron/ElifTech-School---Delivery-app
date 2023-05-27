import {combineReducers} from 'redux'
import {shopsReducer} from './shopsReducer'
import {cartReducer} from './cartReducer'
import {historyReducer} from "./historyReducer";

export const rootReducer = combineReducers({
    shops: shopsReducer,
    cart: cartReducer,
    history: historyReducer
})