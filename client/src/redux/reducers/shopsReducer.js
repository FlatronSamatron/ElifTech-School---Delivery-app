import {shopTypes} from '../types'

const initialState = {
    data: [],
    currentShop: null,
    loading: false,
    error: null
}

export const shopsReducer = (state = initialState, action) => {
    switch (action.type){
        case shopTypes.FETCH_SHOPS:
            return {...state, loading: true}
        case shopTypes.FETCH_SHOPS_SUCCESS:
            return {...state, loading: false, data: action.payload, currentShop: action.payload[0]}
        case shopTypes.FETCH_SHOPS_ERROR:
            return {...state, loading: false, error: action.payload}
        case shopTypes.CHANGE_SHOP:
            return {...state, currentShop: action.payload}
        default:
            return state
    }
}