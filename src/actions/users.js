export const Types = {
    GET_USERS_REQUEST : 'users/get_users_request',
    GET_USERS_SUCCESS: 'users/get_users_success',
    CREATE_USER_REQUEST: 'users/create_user_request',
    DELETE_USER_REQUEST: 'users/delete_user_request',
    USER_ERROR: 'users/user_error'
}

export const getUserRequest = () => ({
    type: Types.GET_USERS_REQUEST
})

export const getUsersSuccess = ({items}) => ({
    type: Types.GET_USERS_SUCCESS,
    payload: {
        items
    }
})

export const createUserRequest = ({firstName, lastName}) => ({
    type: Types.CREATE_USER_REQUEST,
    payload: {firstName, lastName}
})

export const deleteUserRequest = (userId) => ({
    type: Types.DELETE_USER_REQUEST,
    payload: userId
})

export const userError = ({error}) => ({
    type: Types.USER_ERROR,
    payload: error
})