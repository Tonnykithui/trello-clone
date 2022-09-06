import { GET_CARD_ERR, GET_CARD_REQ, GET_CARD_SUC } from "./actionType";

export const init = {
    loading:false,
    data:[],
    error:''
}

const getCardReducer = (state = init, action) => {
    switch (action.type) {
        case GET_CARD_REQ:
            return {
                ...state,
                loading:true
            }

        case GET_CARD_SUC:
            return {
                ...state,
                data:action.payload
            }

        case GET_CARD_ERR:
            return {
                ...state,
                error:action.payload
            }
    
        default:
            return state;
    }
}

export default getCardReducer;