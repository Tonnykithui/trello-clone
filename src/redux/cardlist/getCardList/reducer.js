import { GET_CARDLIST_ERR, GET_CARDLIST_REQ, GET_CARDLIST_SUC } from "./actionType";

export const init = {
    loading:false,
    data:[],
    error:''
}

const getCardListReducer = (state = init, action) => {
    switch (action.type) {
        case GET_CARDLIST_REQ:
            return {
                ...state,
                loading:true
            }

        case GET_CARDLIST_SUC:
            return {
                ...state,
                data:action.payload
            }

        case GET_CARDLIST_ERR:
            return {
                ...state,
                error:action.payload
            }
    
        default:
            return state;
    }
}

export default getCardListReducer;