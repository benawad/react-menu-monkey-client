import { takeEvery } from 'redux-saga';
import { fork, call, put } from 'redux-saga/effects';
import { getRecentRecipes, signup } from '../services/api';


function* fetchRecentRecipes() {
  const recipes = yield call(getRecentRecipes);
  yield put({type: "RECENT_RECIPES_SUCCEEDED", recipes});
}


function* trySignup(action) {
  const success = yield call(signup, action.username, action.password);
  yield put({type: "SIGNUP_SUCCEEDED", success});
}


function* signupSaga() {
  yield* takeEvery("SIGNUP_REQUESTED", trySignup);
}

function* recentRecipesSaga() {
  yield* takeEvery("RECENT_RECIPES_REQUESTED", fetchRecentRecipes);
}

export default function* root() {
  yield [
    fork(signupSaga),
    fork(recentRecipesSaga)
  ]
}
