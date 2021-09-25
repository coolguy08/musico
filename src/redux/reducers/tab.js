import {ActionTypes} from '../constants/action-types';

export const tabstate={
    activetab:1
}

export const TabReducer=(state=tabstate,{type,payload})=>{
    
    switch(type){

       case ActionTypes.SET_TAB:
           return {activetab:payload};
        default:
            return state;
    }

}