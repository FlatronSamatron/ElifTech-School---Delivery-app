import {historyTypes} from '../types'

const initialState = {
    historyData: [],
    currentData: null,
    loading: false,
    error: null
}

export const historyReducer = (state = initialState, action) => {
    switch (action.type){
        case historyTypes.FETCH_HISTORY:
            return {...state, loading: true}
        case historyTypes.FETCH_HISTORY_SUCCESS:
            return {...state, loading: false, historyData: action.payload, currentData: action.payload[0]}
        case historyTypes.FETCH_HISTORY_ERROR:
            return {...state, loading: false, error: action.payload}
        case historyTypes.CHANGE_HISTORY_DATA:
            return {...state, currentData: action.payload}
        default:
            return state
    }
}