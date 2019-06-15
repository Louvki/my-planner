import authReducer from './authReducer';
import areaReducer from './areaReducer';
import {combineReducers} from 'redux';

const rootReducer = combineReducers({
    auth: authReducer,
    area: areaReducer
})

export default rootReducer;