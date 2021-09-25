import {ActionTypes} from '../constants/action-types';

const initialstate={
    loading:false,
    cursong:localStorage.getItem('current')?JSON.parse(localStorage.current):null,
}

export const SongReducer=(state=initialstate,{type,payload})=>{
    
    switch(type){

       case ActionTypes.SET_SONG:
           return {...state,cursong:payload};
        case ActionTypes.SET_SONG_LOADING:
            return {...state,loading:payload};
        default:
            return state;
    }

}