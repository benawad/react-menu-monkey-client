import { takeEvery } from 'redux-saga';
import { fork, call, put } from 'redux-saga/effects';
import { getRecentRecipes, signup, login } from '../services/api';


function* fetchRecentRecipes(feathersApp) {
  const recipes = yield call(getRecentRecipes, feathersApp);
  yield put({type: "RECENT_RECIPES_SUCCEEDED", recipes});
}


function* trySignup(feathersApp, action) {
  const success = yield call(signup, feathersApp, action.username, action.password);
  console.log(success);
  yield put({type: "SIGNUP_SUCCEEDED", success});
}

function* tryLogin(feathersApp, action) {
  const success = yield call(login, feathersApp, action.username, action.password);
  yield put({type: "LOGIN_SUCCEEDED", success});
}

function* loginSaga(feathersApp) {
  yield* takeEvery("LOGIN_REQUESTED", tryLogin, feathersApp);
}

function* signupSaga(feathersApp) {
  yield* takeEvery("SIGNUP_REQUESTED", trySignup, feathersApp);
}

function* recentRecipesSaga(feathersApp) {
  yield* takeEvery("RECENT_RECIPES_REQUESTED", fetchRecentRecipes, feathersApp);
}

export default function* root(feathersApp) {
  yield [
    fork(signupSaga, feathersApp),
    fork(recentRecipesSaga, feathersApp),
    fork(loginSaga, feathersApp)
  ]
}
