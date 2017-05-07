import { takeEvery, call, put } from 'redux-saga/effects';
import { createRecipe, findRecipes, getRecipe } from './api';

import {
  recentRecipesSucceeded,
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
  redirect(recipe._id);
}

export function* addRecipesSaga() {
  yield takeEvery(ADD_RECIPE_REQUESTED, addRecipe);
}

function* callFetchRecipe({ payload }) {
  const recipe = yield call(getRecipe, payload);
  console.log(recipe);
  yield put(recipeFetchDone(recipe));
}

export function* fetchRecipeSaga() {
  yield takeEvery(RECIPE_FETCH_REQUESTED, callFetchRecipe);
}

function* callMyFetchRecipe({ payload }) {
  const myRecipes = yield call(findRecipes, payload);
  console.log(myRecipes);
  yield put(myRecipeFetchDone(myRecipes.data));
}

export function* fetchMyRecipeSaga() {
  yield takeEvery(MY_RECIPE_FETCH_REQUESTED, callMyFetchRecipe);
}
