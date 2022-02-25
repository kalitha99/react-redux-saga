import * as types from "./actionType";
import { loaduserapi, createUserapi } from "./api";
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

import { loadUserSuccess, loadUserError, createUserSuccess, createUserError } from "./actions";

export function* onLoadUserStartAsync() {
  try {
    const response = yield call(loaduserapi);
    if (response.status === 200) {
      yield delay(500);
      yield put(loadUserSuccess(response.data));
    }
  } catch (error) {
    yield put(loadUserError(error.response.data));
  }
}

export function* onCreateUserStartAsync({payload}) {
    console.log('saga:',payload)
  try {
    const response = yield call(createUserapi,payload);
    if (response.status === 200) {
      yield put(createUserSuccess(response.data));
    }
  } catch (error) {
    yield put(createUserError(error.response.data));
  }
}

export function* onLoadUser() {
  yield takeEvery(types.LOAD_USER_START, onLoadUserStartAsync);
}

export function* onCreateUser() {
  yield takeLatest(types.CREATE_USER, onCreateUserStartAsync);
}

const userSagas = [fork(onLoadUser), fork(onCreateUser)];

export default function* rootSags() {
  yield all([...userSagas]);
}
