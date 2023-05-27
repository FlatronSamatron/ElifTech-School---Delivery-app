import {shopTypes} from "../types";
import axios from "axios";

export const fetchShops = () => {
    return async (dispatch) => {
        try {
            dispatch({type: shopTypes.FETCH_SHOPS})
            // const res = await axios.get('/api/shops')
            const res = await axios.get('https://flatronsamatron.onrender.com/api/shops')
            dispatch({type: shopTypes.FETCH_SHOPS_SUCCESS, payload: res.data})
        } catch (error){
            dispatch({type: shopTypes.FETCH_SHOPS_ERROR, payload: error})
        }
    }
}

export const changeShop = (shop) => {
    return (dispatch) => {
        dispatch({type: shopTypes.CHANGE_SHOP, payload: shop})
    }
}