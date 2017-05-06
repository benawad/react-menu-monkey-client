import { createAction } from 'redux-actions';

export const RECENT_RECIPES_REQUESTED = 'RECENT_RECIPES_REQUESTED';
export const ADD_RECIPE_FINISHED = 'ADD_RECIPE_FINISHED';
export const ADD_RECIPE_SUCCEEDED = 'ADD_RECIPE_SUCCEEDED';
export const ADD_RECIPE_REQUESTED = 'ADD_RECIPE_REQUESTED';
export const RECIPE_FETCH_REQUESTED = 'RECIPE_FETCH_REQUESTED';
export const MY_RECIPE_FETCH_REQUESTED = 'MY_RECIPE_FETCH_REQUESTED';
export const MY_RECIPE_FETCH_DONE = 'MY_RECIPE_FETCH_DONE';
export const RECENT_RECIPES_SUCCEEDED = 'RECENT_RECIPES_SUCCEEDED';
export const RECIPE_FETCH_DONE = 'RECIPE_FETCH_DONE';

export const addRecipeFinished = createAction(ADD_RECIPE_FINISHED);
export const requestRecentRecipes = createAction(RECENT_RECIPES_REQUESTED);
export const requestRecipe = createAction(RECIPE_FETCH_REQUESTED);
export const requestMyRecipe = createAction(RECIPE_FETCH_REQUESTED);
export const recentRecipesSucceeded = createAction(RECENT_RECIPES_SUCCEEDED);
export const addRecipeSucceeded = createAction(ADD_RECIPE_SUCCEEDED);
export const recipeFetchDone = createAction(RECIPE_FETCH_DONE);
export const myRecipeFetchDone = createAction(MY_RECIPE_FETCH_DONE);
export const requestAddRecipe = createAction(ADD_RECIPE_REQUESTED);
