import { takeEvery, call, put } from 'redux-saga/effects';
import { createRecipe, findRecipes, getRecipe } from './api';

import {
  receiveRecentRecipes,
  receiveRecipe,
  receiveMyRecipes,
  REQUEST_RECIPE,
  REQUEST_RECENT_RECIPES,
  REQUEST_MY_RECIPES,
  REQUEST_CREATE_RECIPE,
} from './actions';

function* callRecentRecipes({ payload }) {
  const recipes = yield call(findRecipes, payload);
  yield put(receiveRecentRecipes(recipes.data));
}

export function* recentRecipesSaga() {
  yield takeEvery(REQUEST_RECENT_RECIPES, callRecentRecipes);
}

function* callCreateRecipe({ payload: { redirect, data } }) {
  const recipe = yield call(createRecipe, data);
  // eslint-disable-next-line
  redirect(recipe._id);
}

export function* addRecipeSaga() {
  yield takeEvery(REQUEST_CREATE_RECIPE, callCreateRecipe);
}

function* callRecipe({ payload }) {
  const recipe = yield call(getRecipe, payload);
  yield put(receiveRecipe(recipe));
}

export function* recipeSaga() {
  yield takeEvery(REQUEST_RECIPE, callRecipe);
}

function* callMyRecipes({ payload }) {
  const myRecipes = yield call(findRecipes, payload);
  yield put(receiveMyRecipes(myRecipes.data));
}

export function* myRecipesSaga() {
  yield takeEvery(REQUEST_MY_RECIPES, callMyRecipes);
}
