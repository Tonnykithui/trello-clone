import axios from "axios"
import { DELETE_CARDLIST_ERR, DELETE_CARDLIST_REQ, DELETE_CARDLIST_SUC } from "./ActionType"

export const deleteCardListReq = data => {
    return {
        type:DELETE_CARDLIST_REQ,
        payload:data
    }
}

export const deleteCardListSuc = success => {
    return {
        type:DELETE_CARDLIST_SUC,
        payload:success
    }
}

export const deleteCardListErr = error => {
    return {
        type:DELETE_CARDLIST_ERR,
        payload:error
    }
}

export const deleteCardListThunk = data => {
    return (dispatch) => {
        dispatch(deleteCardListReq())
        axios.delete(`http://localhost:5000/cardlist/${data}`)
             .then(response => {
                const resp = response.data;
                dispatch(deleteCardListSuc(resp));
             })
             .catch(error => {
                const err = error.Message;
                dispatch(deleteCardListErr(err));
             })
    }
}