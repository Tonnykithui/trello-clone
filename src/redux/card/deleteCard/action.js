import axios from "axios"
import { getCardThunk } from "../getCard/action"
import { DELETE_CARD_ERR, DELETE_CARD_REQ, DELETE_CARD_SUC } from "./actionType"

export const deleteCardReq = data => {
    return {
        type:DELETE_CARD_REQ,
        payload:data
    }
}

export const deleteCardSuc = success => {
    return {
        type:DELETE_CARD_SUC,
        payload:success
    }
}

export const deleteCardErr = error => {
    return {
        type:DELETE_CARD_ERR,
        payload:error
    }
}

export const deleteCardThunk = data => {
    return (dispatch) => {
        dispatch(deleteCardReq(data))
        axios.delete(`http://localhost:5000/card/${data}`)
             .then(response => {
                const resp = response.data;
                dispatch(deleteCardSuc(resp));
                dispatch(getCardThunk());
             })
             .catch(error => {
                const err = error.Message;
                dispatch(deleteCardErr(err));
             })
    }
}