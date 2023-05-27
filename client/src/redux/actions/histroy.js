import {historyTypes} from "../types";
import axios from "axios";

export const fetchHistory = () => {
    return async (dispatch) => {
        try {
            dispatch({type: historyTypes.FETCH_HISTORY})
            // const res = await axios.get('/api/order')
            const res = await axios.get('https://flatronsamatron.onrender.com/api/order')
            dispatch({type: historyTypes.FETCH_HISTORY_SUCCESS, payload: res.data})
        } catch (error){
            dispatch({type: historyTypes.FETCH_HISTORY_ERROR, payload: error})
        }
    }
}

export const changeHistoryData = (shop) => {
    return (dispatch) => {
        dispatch({type: historyTypes.CHANGE_HISTORY_DATA, payload: shop})
    }
}