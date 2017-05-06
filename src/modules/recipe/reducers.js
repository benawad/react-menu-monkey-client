import { handleAction } from 'redux-actions';
import {
  recipeFetchDone,
  myRecipeFetchDone,
  recentRecipesSucceeded,
} from './actions';

export const currRecipe = handleAction(recipeFetchDone, {
  next(state, { payload }) {
    return payload.length ? payload[0] : {};
  },
}, {});

export const myRecipes = handleAction(myRecipeFetchDone, {
  next(state, { payload }) {
    return payload;
  },
}, []);

export const recipes = handleAction(recentRecipesSucceeded, {
  next(state, { payload }) {
    return payload;
  },
}, []);
