import {ActionTypes} from '../constants/action-types';

const initialstate={
    user:localStorage.getItem('user')?JSON.parse(localStorage.user):null
}

export const UserReducer=(state=initialstate,{type,payload})=>{
    
    switch(type){

       case ActionTypes.SET_USER:
           return {...state,user:payload};
        default:
            return state;
    }

}