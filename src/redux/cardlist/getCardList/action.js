import axios from "axios"
import { GET_CARDLIST_ERR, GET_CARDLIST_REQ, GET_CARDLIST_SUC } from "./actionType"

export const getCardListReq = data => {
    return {
        type:GET_CARDLIST_REQ,
        payload:data
    }
}

export const getCardListSuc = success => {
    return {
        type:GET_CARDLIST_SUC,
        payload:success
    }
}

export const getCardListErr = error => {
    return {
        type:GET_CARDLIST_ERR,
        payload:error
    }
}

export const getCardListThunk = data => {
    return (dispatch) => {
        dispatch(getCardListReq())
        axios.get('http://localhost:5000/cardlist')
             .then(response => {
                const resp = response.data;
                dispatch(getCardListSuc(resp));
             })
             .catch(error => {
                const err = error.Message;
                dispatch(getCardListErr(err));
             })
    }
}