import { DELETE_CARD_ERR, DELETE_CARD_REQ, DELETE_CARD_SUC } from "./ActionType";

export const init = {
    loading:false,
    data:[],
    error:''
}

const deleteCardReducer = (state = init, action) => {
    switch (action.type) {
        case DELETE_CARD_REQ:
            return {
                ...state,
                loading:true
            }

        case DELETE_CARD_SUC:
            return {
                ...state,
                data:action.payload
            }

        case DELETE_CARD_ERR:
            return {
                ...state,
                error:action.payload
            }
    
        default:
            return state;
    }
}

export default deleteCardReducer;