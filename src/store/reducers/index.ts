import { combineReducers } from "redux";
import assessments from './assessments';

const initailState={};

export const rootReducer = combineReducers({
    assessments: assessments,
})