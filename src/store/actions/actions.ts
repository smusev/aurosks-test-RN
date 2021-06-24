import {DATA_RECEIVED} from './actionTypes';
import creatorData from '../../api/creator-data'
import evaluatorData from '../../api/evaluator-data'

const dataReceived = (data: any) => ({
  payload: {data},
  type: DATA_RECEIVED,
});

export const getData = () => {
    return async (dispatch:any) => {
        try {
            let data = { creatorData: creatorData, evaluatorData: evaluatorData}
            dispatch(dataReceived(data))
        }
        catch(e){
            console.log(e)
        }
    }
}