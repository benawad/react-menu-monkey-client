import { createAction } from 'redux-actions';

export const REQUEST_RECENT_RECIPES = 'REQUEST_RECENT_RECIPES';
export const RECEIVE_RECENT_RECIPES = 'RECEIVE_RECENT_RECIPES';
export const REQUEST_CREATE_RECIPE = 'REQUEST_CREATE_RECIPE';
export const REQUEST_RECIPE = 'REQUEST_RECIPE';
export const RECEIVE_RECIPE = 'RECEIVE_RECIPE';
export const REQUEST_MY_RECIPES = 'REQUEST_MY_RECIPES';
export const RECEIVE_MY_RECIPES = 'RECEIVE_MY_RECIPES';

export const requestRecentRecipes = createAction(REQUEST_RECENT_RECIPES);
export const receiveRecentRecipes = createAction(RECEIVE_RECENT_RECIPES);
export const requestCreateRecipe = createAction(REQUEST_CREATE_RECIPE);
export const requestRecipe = createAction(REQUEST_RECIPE);
export const receiveRecipe = createAction(RECEIVE_RECIPE);
export const requestMyRecipes = createAction(REQUEST_MY_RECIPES);
export const receiveMyRecipes = createAction(RECEIVE_MY_RECIPES);
