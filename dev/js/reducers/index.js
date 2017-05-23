// combine all reducers to one object
import {combineReducers} from 'redux';
import  UserReducer from './reducerUser';

const allReducers = combineReducers({
    users: UserReducer
});

export default  allReducers;