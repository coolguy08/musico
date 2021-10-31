import {ActionTypes} from '../constants/action-types';

const initialstate={
    loading:false,
    cursong:localStorage.getItem('current')?JSON.parse(localStorage.current):null,
    lyricsloading:true,
    lyrics:''
}

export const SongReducer=(state=initialstate,{type,payload})=>{
    
    switch(type){

       case ActionTypes.SET_SONG:
           return {...state,lyricsloading:true,lyrics:'',cursong:payload};
        case ActionTypes.SET_SONG_LOADING:
            return {...state,loading:payload};
        case ActionTypes.SET_LYRICS:
            return {...state,lyrics:payload};
        case ActionTypes.SET_LYRICS_LOADING:
            return {...state,lyricsloading:payload}
        default:
            return state;
    }

}