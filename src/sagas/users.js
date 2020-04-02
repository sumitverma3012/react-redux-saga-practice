import {takeEvery, call, fork, put, takeLatest, take} from 'redux-saga/effects';
import * as actions from '../actions/users';
import * as api from '../api/users';

//worker saga
function* getUsers(){
    try {
        const result = yield call(api.getUsers);
        yield put(actions.getUsersSuccess({
            items: result.data.data
        }));
    } catch (error) {
        yield put(actions.userError({
            error: 'An error occurred. Please try again after some time.'
        }))
    }
}

function* createUser(action) {
    try {
        yield call(api.createUser, {firstName: action.payload.firstName, lastName: action.payload.lastName}); // save the user
        yield call(getUsers); // fetch the updated list
    } catch (error) {
        yield put(actions.userError({
            error: 'An error occurred. Please try again after some time.'
        }))
    }
}

function* deleteUser(action) {
    try {
        yield call(api.deleteUser, action.userId);
        yield call(getUsers);
    } catch (error) {
        yield put(actions.userError({
            error: 'An error occurred. Please try again after some time.'
        }))
    }
}


//watcher saga
function* watchGetUsersRequest() {
    yield takeEvery(actions.Types.GET_USERS_REQUEST, getUsers);
}

function* watchCreateUserRequest() {
    yield takeLatest(actions.Types.CREATE_USER_REQUEST, createUser);
}

function* watchDeleteUserRequest() {
    while(true) {
        const action = yield take(actions.Types.DELETE_USER_REQUEST);
        console.log(action)
        yield call(deleteUser, {
            userId: action.payload
        })
    }
}

const userSagas = [
    fork(watchGetUsersRequest),
    fork(watchCreateUserRequest),
    fork(watchDeleteUserRequest)
]

export default userSagas;