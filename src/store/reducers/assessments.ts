import {DATA_RECEIVED} from '../actions/actionTypes';
import {assessmentsType} from '../actions/assessments';

const initialState = {};

const assessments = (state = initialState, action: assessmentsType) => {
    switch (action.type) {
        case DATA_RECEIVED: {
        return {
          ...state,
          creatorData: action.payload.data.creatorData,
          evaluatorData: action.payload.data.evaluatorData,
        };
      }
  
    default: {
        return state;
    }
  }
};

export default assessments;
  