import axios from "axios"
import { UPDATE_CARD_ERR, UPDATE_CARD_REQ, UPDATE_CARD_SUC } from "./actionType"

export const updateCardReq = data => {
    return {
        type:UPDATE_CARD_REQ,
        payload:data
    }
}

export const updateCardSuc = success => {
    return {
        type:UPDATE_CARD_SUC,
        payload:success
    }
}

export const updateCardErr = error => {
    return {
        type:UPDATE_CARD_ERR,
        payload:error
    }
}

export const updateCardThunk = (id,data) => {
    return (dispatch) => {
        dispatch(updateCardReq())
        axios.post(`http://localhost:5000/card/${id}`, data)
             .then(response => {
                const resp = response.data;
                dispatch(updateCardSuc(resp));
             })
             .catch(error => {
                const err = error.Message;
                dispatch(updateCardErr(err));
             })
    }
}