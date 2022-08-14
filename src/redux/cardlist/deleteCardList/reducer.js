import { DELETE_CARDLIST_ERR, DELETE_CARDLIST_REQ, DELETE_CARDLIST_SUC } from "./actionType";

export const init = {
    loading:false,
    data:[],
    error:''
}

const deleteCardListReducer = (state = init, action) => {
    switch (action.type) {
        case DELETE_CARDLIST_REQ:
            return {
                ...state,
                loading:true
            }

        case DELETE_CARDLIST_SUC:
            return {
                ...state,
                data:action.payload
            }

        case DELETE_CARDLIST_ERR:
            return {
                ...state,
                error:action.payload
            }
    
        default:
            return state;
    }
}

export default deleteCardListReducer;