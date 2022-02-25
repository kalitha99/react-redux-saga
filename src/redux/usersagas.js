import * as types from './actionType';
import { loaduserapi } from './api';
import {
  take,
  takeEvery,
  takeLatest,
  put,
  all,
  delay,
  fork,
  call,
} from "redux-saga/effects";

import { loadUserSuccess,loadUserError } from './actions';

export function* onLoadUserStartAsync(){
    try{
        const response = yield call(loaduserapi)
        if (response.status === 200){
            yield delay(500);
            yield put(loadUserSuccess(response.data))
        }
    }
        catch(error){
            yield put(loadUserError(error.response.data))
        }
    }


export function* onLoadUser(){
    yield takeEvery(types.LOAD_USER_START, onLoadUserStartAsync)
}

const userSagas = [
    fork(onLoadUser)
];

export default function* rootSags() {
    yield all ([...userSagas]);
}


