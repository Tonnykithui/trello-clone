import { ADD_CARD_ERR, ADD_CARD_REQ, ADD_CARD_SUC } from "./actionType";

export const init = {
    loading:false,
    data:[],
    error:''
}

const addCardReducer = (state = init, action) => {
    switch (action.type) {
        case ADD_CARD_REQ:
            return {
                ...state,
                loading:true
            }

        case ADD_CARD_SUC:
            return {
                ...state,
                data:action.payload
            }

        case ADD_CARD_ERR:
            return {
                ...state,
                error:action.payload
            }
    
        default:
            return state;
    }
}

export default addCardReducer;