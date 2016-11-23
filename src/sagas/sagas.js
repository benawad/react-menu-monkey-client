import { takeEvery } from 'redux-saga';
import { fork, call, put } from 'redux-saga/effects';
import { logout, checkIfLoggedIn, createRecipe, getRecentRecipes, signup, login } from '../services/api';


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
  const user = yield call(login, feathersApp, action.username, action.password);
  yield put({type: "LOGIN_SUCCEEDED", user});
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

function* addRecipe(feathersApp, action) {
  const resp = yield call(createRecipe, feathersApp, action.name, action.description, action.ingredients, action.imageURL);
  console.log(resp);
  yield put({type: "ADD_RECIPE_SUCCEEDED"});
}

function* addRecipesSaga(feathersApp) {
  yield* takeEvery("ADD_RECIPE_REQUESTED", addRecipe, feathersApp);
}

function* checkLogin(feathersApp, action) {
  const user = yield call(checkIfLoggedIn, feathersApp);
  yield put({type: "CHECK_LOGIN_DONE", user});
}

function* checkIfLoginSaga(feathersApp) {
  yield* takeEvery("CHECK_LOGIN_REQUESTED", checkLogin, feathersApp);
}

function* callLogout(feathersApp, action) {
  yield call(logout, feathersApp);
  yield put({type: "LOGOUT_DONE"});
}

function* logoutSaga(feathersApp) {
  yield* takeEvery("LOGOUT_REQUESTED", callLogout, feathersApp);
}

export default function* root(feathersApp) {
  yield [
    fork(signupSaga, feathersApp),
    fork(recentRecipesSaga, feathersApp),
    fork(addRecipesSaga, feathersApp),
    fork(loginSaga, feathersApp),
    fork(checkIfLoginSaga, feathersApp),
    fork(logoutSaga, feathersApp)
  ]
}
