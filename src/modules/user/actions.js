import { createAction } from 'redux-actions';

export const SIGNUP_REQUESTED = 'SIGNUP_REQUEST';
export const SIGNUP_FINISHED = 'SIGNUP_FINISHED';
export const SIGNUP_SUCCEEDED = 'SIGNUP_SUCCEEDED';
export const LOGIN_REQUESTED = 'LOGIN_REQUESTED';
export const LOGIN_FINISHED = 'LOGIN_FINISHED';
export const LOGOUT_REQUESTED = 'LOGOUT_REQUESTED';
export const AUTH_GOOD = 'AUTH_GOOD';
export const LOGIN_SUCCEEDED = 'LOGIN_SUCCEEDED';
export const LOGOUT_DONE = 'LOGOUT_DONE';

export const signup = createAction(SIGNUP_REQUESTED);
export const login = createAction(LOGIN_REQUESTED);
export const authGood = createAction(AUTH_GOOD);
export const logout = createAction(LOGOUT_REQUESTED);
export const loginSucceeded = createAction(LOGIN_SUCCEEDED);
export const logoutDone = createAction(LOGOUT_DONE);
export const signupSucceeded = createAction(SIGNUP_SUCCEEDED);
