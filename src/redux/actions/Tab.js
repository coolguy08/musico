import {ActionTypes} from '../constants/action-types';
export const setTab=(tab)=>{
    return {
        type:ActionTypes.SET_TAB,
        payload:tab

    }
}