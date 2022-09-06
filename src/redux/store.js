import { applyMiddleware, combineReducers, createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import addCardReducer from "./card/addCard/reducer";
import deleteCardReducer from "./card/deleteCard/reducer";
import getCardReducer from "./card/getCard/reducer";
import updateCardReducer from "./card/updateCard/reducer";
import addCardListReducer from "./cardlist/addCardList/reducer";
import deleteCardListReducer from "./cardlist/deleteCardList/reducer";
import getCardListReducer from "./cardlist/getCardList/reducer";
import updateCardListReducer from "./cardlist/updateCardList/reducer";

const combinedReducers = combineReducers({
    updateCardList:updateCardListReducer,
    addCardList:addCardListReducer,
    deleteCardList:deleteCardListReducer,
    getCardList:getCardListReducer,
    getCard:getCardReducer,
    addCard:addCardReducer,
    updateCard:updateCardReducer,
    deleteCard:deleteCardReducer,

})

const store = createStore(combinedReducers, composeWithDevTools(applyMiddleware(thunk)));

export default store;