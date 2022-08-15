import { applyMiddleware, combineReducers, createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import updateCardListReducer from './cardlist/updateCardList/Reducer';
import addCardListReducer from './cardlist/addCardList/Reducer';
import deleteCardListReducer from './cardlist/deleteCardList/Reducer';
import getCardListReducer from './cardlist/getCardList/Reducer';
import addCardReducer from './card/addCard/Reducer';
import getCardReducer from './card/getCard/Reducer';
import updateCardReducer from './card/updateCard/Reducer';
import deleteCardReducer from './card/deleteCard/Reducer';

const combinedReducers = combineReducers({
    updateCardList:updateCardListReducer,
    addCardList:addCardListReducer,
    deleteCardList:deleteCardListReducer,
    getCardList:getCardListReducer,
    getCard:getCardReducer,
    addCard:addCardReducer,
    updateCard:updateCardReducer,
    deleteCard:deleteCardReducer
})

const store = createStore(combinedReducers, composeWithDevTools(applyMiddleware(thunk)));

export default store;