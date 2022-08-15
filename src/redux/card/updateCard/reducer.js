import { UPDATE_CARD_ERR, UPDATE_CARD_REQ, UPDATE_CARD_SUC } from "./ActionType";

export const init = {
    loading:false,
    data:[],
    error:''
}

const updateCardReducer = (state = init, action) => {
    switch (action.type) {
        case UPDATE_CARD_REQ:
            return {
                ...state,
                loading:true
            }

        case UPDATE_CARD_SUC:
            return {
                ...state,
                data:action.payload
            }

        case UPDATE_CARD_ERR:
            return {
                ...state,
                error:action.payload
            }
    
        default:
            return state;
    }
}

export default updateCardReducer;