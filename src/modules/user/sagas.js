import { takeEvery, call, put } from 'redux-saga/effects';

import { logout, signup, login, auth } from './api';
import {
  receiveAuth,
  receiveLogout,
  requestAuth,
  REQUEST_LOGIN,
  REQUEST_LOGOUT,
  REQUEST_SIGNUP,
  REQUEST_AUTH,
} from './actions';


function* callLogin({ payload: { data, redirect } }) {
  yield call(login, data);
  yield put(requestAuth());
  redirect();
}

export function* loginSaga() {
  yield takeEvery(REQUEST_LOGIN, callLogin);
}

function* callSignup({ payload: { redirect, data } }) {
  yield call(signup, data);
  redirect();
}

export function* signupSaga() {
  yield takeEvery(REQUEST_SIGNUP, callSignup);
}

function* callLogout() {
  yield call(logout);
  yield put(receiveLogout({}));
}

export function* logoutSaga() {
  yield takeEvery(REQUEST_LOGOUT, callLogout);
}

function* callAuth({ payload }) {
  const user = yield call(auth);
  yield put(receiveAuth(user));
  if (!Object.values(user).length) {
    payload();
  }
}

export function* authSaga() {
  yield takeEvery(REQUEST_AUTH, callAuth);
}

