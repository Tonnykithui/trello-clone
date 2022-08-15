import axios from "axios"
import { GET_CARD_ERR, GET_CARD_REQ, GET_CARD_SUC } from "./ActionType"

export const getCardReq = data => {
    return {
        type:GET_CARD_REQ,
        payload:data
    }
}

export const getCardSuc = success => {
    return {
        type:GET_CARD_SUC,
        payload:success
    }
}

export const getCardErr = error => {
    return {
        type:GET_CARD_ERR,
        payload:error
    }
}

export const getCardThunk = data => {
    return (dispatch) => {
        dispatch(getCardReq())
        axios.get('http://localhost:5000/card')
             .then(response => {
                const resp = response.data;
                dispatch(getCardSuc(resp));
             })
             .catch(error => {
                const err = error.Message;
                dispatch(getCardErr(err));
             })
    }
}