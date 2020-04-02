import { combineReducers } from 'redux';
import UsersReducers from './users';

export default combineReducers({
    users: UsersReducers
})