import { takeEvery } from 'redux-saga';
import { fork, call, put } from 'redux-saga/effects';
import { fetchMyRecipes, fetchRecipe, logout, createRecipe, getRecentRecipes, signup, login } from '../services/api';
import { browserHistory } from 'react-router';


function* fetchRecentRecipes(feathersApp) {
  const recipes = yield call(getRecentRecipes, feathersApp);
  yield put({type: "RECENT_RECIPES_SUCCEEDED", recipes});
}

function* trySignup(feathersApp, action) {
  const success = yield call(signup, feathersApp, action.username, action.password);
  console.log(success);
  yield put({type: "SIGNUP_SUCCEEDED", success});
  yield browserHistory.push('login');
}

function* tryLogin(feathersApp, action) {
  const user = yield call(login, feathersApp, action.username, action.password);
  yield put({type: "LOGIN_SUCCEEDED", user});
  yield browserHistory.push(action.next);
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
  yield browserHistory.push('');
}

function* addRecipesSaga(feathersApp) {
  yield* takeEvery("ADD_RECIPE_REQUESTED", addRecipe, feathersApp);
}

function* callLogout(feathersApp, action) {
  yield call(logout, feathersApp);
  yield put({type: "LOGOUT_DONE"});
}

function* logoutSaga(feathersApp) {
  yield* takeEvery("LOGOUT_REQUESTED", callLogout, feathersApp);
}

function* callFetchRecipe(feathersApp, action) {
  const recipe = yield call(fetchRecipe, feathersApp, action.id);
  yield put({type: "RECIPE_FETCH_DONE", recipe});
}

function* fetchRecipeSaga(feathersApp) {
  yield* takeEvery("RECIPE_FETCH_REQUESTED", callFetchRecipe, feathersApp);
}

function* callMyFetchRecipe(feathersApp, action) {
  const myRecipes = yield call(fetchMyRecipes, feathersApp, action.id);
  yield put({type: "MY_RECIPE_FETCH_DONE", myRecipes});
}

function* fetchMyRecipeSaga(feathersApp) {
  yield* takeEvery("MY_RECIPE_FETCH_REQUESTED", callMyFetchRecipe, feathersApp);
}

export default function* root(feathersApp) {
  yield [
    fork(signupSaga, feathersApp),
    fork(recentRecipesSaga, feathersApp),
    fork(addRecipesSaga, feathersApp),
    fork(loginSaga, feathersApp),
    fork(fetchRecipeSaga, feathersApp),
    fork(fetchMyRecipeSaga, feathersApp),
    fork(logoutSaga, feathersApp)
  ]
}
