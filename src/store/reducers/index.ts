import { combineReducers } from "redux";
import assessments from './assessments';

export const rootReducer = combineReducers({
    assessments: assessments,
})

export interface ApplicationState {
    assessments: {
        evaluatorData: []
        creatorData: []
    };
  }  

export type RootState = ReturnType<typeof rootReducer>