import { takeEvery, call, put } from 'redux-saga/effects';
import { fetchMyRecipes, fetchRecipe, createRecipe, getRecentRecipes } from '../services/api';
import { browserHistory } from 'react-router';

import {
  recentRecipesSucceeded,
  addRecipeSucceeded,
  recipeFetchDone,
  myRecipeFetchDone,
  RECENT_RECIPES_REQUESTED,
  ADD_RECIPE_REQUESTED,
  RECIPE_FETCH_REQUESTED,
  MY_RECIPE_FETCH_REQUESTED,
} from './actions';

function* fetchRecentRecipes() {
  const recipes = yield call(getRecentRecipes);
  yield put(recentRecipesSucceeded(recipes));
}

export function* recentRecipesSaga() {
  yield* takeEvery(RECENT_RECIPES_REQUESTED, fetchRecentRecipes);
}

function* addRecipe({ payload }) {
  const resp = yield call(createRecipe, payload);
  console.log(resp);
  yield put(addRecipeSucceeded());
  yield browserHistory.push(`/view/${resp._id}`);
}

export function* addRecipesSaga() {
  yield* takeEvery(ADD_RECIPE_REQUESTED, addRecipe);
}

function* callFetchRecipe({ payload }) {
  const recipe = yield call(fetchRecipe, payload);
  yield put(recipeFetchDone(recipe));
}

export function* fetchRecipeSaga() {
  yield* takeEvery(RECIPE_FETCH_REQUESTED, callFetchRecipe);
}

function* callMyFetchRecipe(feathersApp, { payload }) {
  const myRecipes = yield call(fetchMyRecipes, payload);
  yield put(myRecipeFetchDone(myRecipes));
}

export function* fetchMyRecipeSaga() {
  yield* takeEvery(MY_RECIPE_FETCH_REQUESTED, callMyFetchRecipe);
}
