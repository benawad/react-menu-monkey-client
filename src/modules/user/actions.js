import { createAction } from 'redux-actions';
// action       type
// request*     REQUEST_*
// receive*     RECEIVE_*

export const REQUEST_SIGNUP = 'REQUEST_SIGNUP';
export const REQUEST_LOGIN = 'REQUEST_LOGIN';
export const REQUEST_LOGOUT = 'REQUEST_LOGOUT';
export const RECEIVE_LOGOUT = 'RECEIVE_LOGOUT';
export const REQUEST_AUTH = 'REQUEST_AUTH';
export const RECEIVE_AUTH = 'RECEIVE_AUTH';

export const requestSignup = createAction(REQUEST_SIGNUP);
export const requestLogin = createAction(REQUEST_LOGIN);
export const requestAuth = createAction(REQUEST_AUTH);
export const requestLogout = createAction(REQUEST_LOGOUT);
export const receiveLogout = createAction(RECEIVE_LOGOUT);
export const receiveAuth = createAction(RECEIVE_AUTH);
