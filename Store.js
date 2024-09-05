import { combineReducers, createStore } from "redux";
import todoReducer from "./todoReducer.js";
import userReducer from "./userReduser.js";

const rootReducer = combineReducers({
    todoState: todoReducer,
    userState: userReducer

}) 

const store = createStore(rootReducer);// TODO: add the relevent reducer

store.subscribe(() => {
    console.log(store.getState());
    
});

export default store;
