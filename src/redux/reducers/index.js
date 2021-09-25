import { combineReducers } from 'redux';
import {UserReducer} from './Auth';
import { SongReducer } from './song';
import { TabReducer } from './tab';

const reducers=combineReducers({
    Auth:UserReducer,
    tab:TabReducer,
    song:SongReducer,
})


export default reducers
