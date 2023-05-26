import {combineReducers} from 'redux'
import {shopsReducer} from './shopsReducer'
import {cartReducer} from './cartReducer'

export const rootReducer = combineReducers({
    shops: shopsReducer,
    cart: cartReducer
})