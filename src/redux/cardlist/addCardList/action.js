import axios from "axios"
import { getCardListThunk } from "../getCardList/Action"
import { ADD_CARDLIST_ERR, ADD_CARDLIST_REQ, ADD_CARDLIST_SUC } from "./ActionType"

export const addCardListReq = data => {
    return {
        type:ADD_CARDLIST_REQ,
        payload:data
    }
}

export const addCardListSuc = success => {
    return {
        type:ADD_CARDLIST_SUC,
        payload:success
    }
}

export const addCardListErr = error => {
    return {
        type:ADD_CARDLIST_ERR,
        payload:error
    }
}

export const addCardListThunk = data => {
    return (dispatch) => {
        dispatch(addCardListReq())
        axios.post('http://localhost:5000/cardlist', data)
             .then(response => {
                const resp = response.data;
                dispatch(addCardListSuc(resp));
                dispatch(getCardListThunk())
             })
             .catch(error => {
                const err = error.Message;
                dispatch(addCardListErr(err));
             })
    }
}