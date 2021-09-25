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