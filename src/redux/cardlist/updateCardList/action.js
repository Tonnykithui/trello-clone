import axios from "axios"
import { UPDATE_CARDLIST_ERR, UPDATE_CARDLIST_REQ, UPDATE_CARDLIST_SUC } from "./actionType"

export const updateCardListReq = data => {
    return {
        type:UPDATE_CARDLIST_REQ,
        payload:data
    }
}

export const updateCardListSuc = success => {
    return {
        type:UPDATE_CARDLIST_SUC,
        payload:success
    }
}

export const updateCardListErr = error => {
    return {
        type:UPDATE_CARDLIST_ERR,
        payload:error
    }
}

export const updateCardListThunk = (id,data) => {
    return (dispatch) => {
        dispatch(updateCardListReq())
        axios.post(`http://localhost:5000/cardlist/${id}`, data)
             .then(response => {
                const resp = response.data;
                dispatch(updateCardListSuc(resp));
             })
             .catch(error => {
                const err = error.Message;
                dispatch(updateCardListErr(err));
             })
    }
}