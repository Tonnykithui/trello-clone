import { UPDATE_CARDLIST_ERR, UPDATE_CARDLIST_REQ, UPDATE_CARDLIST_SUC } from "./ActionType";

export const init = {
    loading:false,
    data:[],
    error:''
}

const updateCardListReducer = (state = init, action) => {
    switch (action.type) {
        case UPDATE_CARDLIST_REQ:
            return {
                ...state,
                loading:true
            }

        case UPDATE_CARDLIST_SUC:
            return {
                ...state,
                data:action.payload
            }

        case UPDATE_CARDLIST_ERR:
            return {
                ...state,
                error:action.payload
            }
    
        default:
            return state;
    }
}

export default updateCardListReducer;