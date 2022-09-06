import axios from "axios"
import { getCardThunk } from "../getCard/action"
import { ADD_CARD_ERR, ADD_CARD_REQ, ADD_CARD_SUC } from "./actionType"

export const addCardReq = data => {
    return {
        type:ADD_CARD_REQ,
        payload:data
    }
}

export const addCardSuc = success => {
    return {
        type:ADD_CARD_SUC,
        payload:success
    }
}

export const addCardErr = error => {
    return {
        type:ADD_CARD_ERR,
        payload:error
    }
}

export const addCardThunk = data => {
    return (dispatch) => {
        dispatch(addCardReq())
        axios.post('http://localhost:5000/card', data)
             .then(response => {
                const resp = response.data;
                dispatch(addCardSuc(resp));
                dispatch(getCardThunk())
             })
             .catch(error => {
                const err = error.Message;
                dispatch(addCardErr(err));
             })
    }
}