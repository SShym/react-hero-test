import { combineReducers } from "redux";

import { appReducer } from './reducers/appReducer';
import { mainReducer } from './reducers/mainReducer';

export const reducers = combineReducers({
    appReducer,
    mainReducer
})