import { ADD_CARDLIST_ERR, ADD_CARDLIST_REQ, ADD_CARDLIST_SUC } from "./actionType";

export const init = {
    loading:false,
    data:[],
    error:''
}

const addCardListReducer = (state = init, action) => {
    switch (action.type) {
        case ADD_CARDLIST_REQ:
            return {
                ...state,
                loading:true
            }

        case ADD_CARDLIST_SUC:
            return {
                ...state,
                data:action.payload
            }

        case ADD_CARDLIST_ERR:
            return {
                ...state,
                error:action.payload
            }
    
        default:
            return state;
    }
}

export default addCardListReducer;