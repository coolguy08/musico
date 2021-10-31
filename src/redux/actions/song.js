import {ActionTypes} from '../constants/action-types';

export const setSong=(song)=>{
    return {
        type:ActionTypes.SET_SONG,
        payload:song

    }
}

export const setsongloading=(loading)=>{
    return {
        type:ActionTypes.SET_SONG_LOADING,
        payload:loading

    }
}

export const setlyrics=(lyrics)=>{
     return {
       type:ActionTypes.SET_LYRICS,
       payload:lyrics
     }
}

export const setlyricsloading=(loading)=>{
    return {
        type:ActionTypes.SET_LYRICS_LOADING,
        payload:loading
    }
}