import { takeEvery } from 'redux-saga';
import { call, put } from 'redux-saga/effects';
import { getRecentRecipes } from '../services/api';

function* fetchRecentRecipes(action) {
  const recipes = yield call(getRecentRecipes);
  yield put({type: "RECENT_RECIPES_SUCCEEDED", recipes});
}

function* mySaga() {
  yield* takeEvery("RECENT_RECIPES_REQUESTED", fetchRecentRecipes);
}

export default mySaga;
