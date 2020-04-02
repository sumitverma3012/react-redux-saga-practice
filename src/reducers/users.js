import {Types} from '../actions/users';


const INITIAL_STATE = {
    users : [],
    error: ''
}

export default function users (state = INITIAL_STATE, action) {
    
    switch(action.type) {
        case Types.GET_USERS_SUCCESS: {
            return {
                ...state,
                users: action.payload.items
            }
        };
        case Types.USER_ERROR: {
            return {
                ...state,
                error: action.payload.error
            }
        };
        default:{
            return state;
        };
    }
}