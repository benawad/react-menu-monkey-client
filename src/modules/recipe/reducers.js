import { handleAction } from 'redux-actions';
import {
  receiveRecipe,
  receiveMyRecipes,
  receiveRecentRecipes,
} from './actions';

export const currRecipe = handleAction(receiveRecipe, {
  next(state, { payload }) {
    return payload;
  },
}, {});

export const myRecipes = handleAction(receiveMyRecipes, {
  next(state, { payload }) {
    return payload;
  },
}, []);

export const recipes = handleAction(receiveRecentRecipes, {
  next(state, { payload }) {
    return payload;
  },
}, []);
