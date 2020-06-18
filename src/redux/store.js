import {combineReducers, createStore} from "redux";
import checkReducer from "./reducers/checkReducer";

const reducers = combineReducers({
    checkPage: checkReducer
})
const store = createStore(reducers)

window.store = store

export default store