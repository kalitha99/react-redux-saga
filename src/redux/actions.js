import * as types from './actionType';

export const loadUserStart = () => ({
    type: types.LOAD_USER_START,
})

export const loadUserSuccess = (users) => ({
    type: types.LOAD_USER_SUCCESS,
    payload: users
})

export const loadUserError = (error) => ({
    type: types.LOAD_USER_ERROR,
    payload: error
})