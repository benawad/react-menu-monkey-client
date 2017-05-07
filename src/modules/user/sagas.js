import { takeEvery, call, put } from 'redux-saga/effects';

import { logout, signup, login, auth } from './api';
import {
  loginSucceeded,
  logoutDone,
  signupSucceeded,
  authGood,
  LOGIN_REQUESTED,
  SIGNUP_REQUESTED,
  LOGOUT_REQUESTED,
  REQUEST_AUTH,
} from './actions';


function* tryLogin({ payload: { data, redirect } }) {
  const user = yield call(login, data);
  yield put(loginSucceeded(user));
  redirect();
  // yield browserHistory.push(payload.next);
}

export function* loginSaga() {
  yield takeEvery(LOGIN_REQUESTED, tryLogin);
}

function* trySignup({ payload: { redirect, data } }) {
  console.log(data);
  const success = yield call(signup, data);
  console.log(success);
  yield put(signupSucceeded(success));
  redirect();
  // yield browserHistory.push('/login');
}

export function* signupSaga() {
  yield takeEvery(SIGNUP_REQUESTED, trySignup);
}

function* callLogout() {
  yield call(logout);
  yield put(logoutDone({}));
}

export function* logoutSaga() {
  yield takeEvery(LOGOUT_REQUESTED, callLogout);
}

function* callAuth({ payload }) {
  const user = yield call(auth);
  console.log(user);
  yield put(authGood(user));
  if (!Object.values(user).length) {
    payload();
  }
}

export function* authSaga() {
  yield takeEvery(REQUEST_AUTH, callAuth);
}

