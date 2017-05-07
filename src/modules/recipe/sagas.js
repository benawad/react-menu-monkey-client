import { takeEvery, call, put } from 'redux-saga/effects';
import { createRecipe, findRecipes } from './api';

import {
  recentRecipesSucceeded,
  fetchRecipeDone,
  recipeFetchDone,
  myRecipeFetchDone,
  RECENT_RECIPES_REQUESTED,
  ADD_RECIPE_REQUESTED,
  RECIPE_FETCH_REQUESTED,
  MY_RECIPE_FETCH_REQUESTED,
} from './actions';

function* fetchRecentRecipes({ payload }) {
  const recipes = yield call(findRecipes, payload);
  yield put(recentRecipesSucceeded(recipes.data));
}

export function* recentRecipesSaga() {
  yield takeEvery(RECENT_RECIPES_REQUESTED, fetchRecentRecipes);
}

function* addRecipe({ payload: { redirect, data } }) {
  const recipe = yield call(createRecipe, data);
  console.log(recipe);
  yield put(fetchRecipeDone(recipe));
  redirect(recipe._id);
}

export function* addRecipesSaga() {
  yield takeEvery(ADD_RECIPE_REQUESTED, addRecipe);
}

function* callFetchRecipe({ payload }) {
  const recipe = yield call(findRecipes, payload);
  console.log(recipe);
  yield put(recipeFetchDone(recipe.data));
}

export function* fetchRecipeSaga() {
  yield takeEvery(RECIPE_FETCH_REQUESTED, callFetchRecipe);
}

function* callMyFetchRecipe(feathersApp, { payload }) {
  const myRecipes = yield call(findRecipes, payload);
  yield put(myRecipeFetchDone(myRecipes));
}

export function* fetchMyRecipeSaga() {
  yield takeEvery(MY_RECIPE_FETCH_REQUESTED, callMyFetchRecipe);
}
