import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import superagent from 'superagent';
import feathers from 'feathers-client';
import rest from 'feathers-rest/client';

import recipes from './recipes';
import checkIfLoggedIn from './checkLogin';
import currRecipe from './currRecipe';
import myRecipes from './myRecipes';

const rootReducer = combineReducers({ myRecipes, currRecipe, checkIfLoggedIn, recipes, routing: routerReducer });

export default rootReducer;

export default function* root(feathersApp) {
  yield [
    fork(signupSaga, feathersApp),
    fork(recentRecipesSaga, feathersApp),
    fork(addRecipesSaga, feathersApp),
    fork(loginSaga, feathersApp),
    fork(fetchRecipeSaga, feathersApp),
    fork(fetchMyRecipeSaga, feathersApp),
    fork(logoutSaga, feathersApp),
  ];
}

const host = 'http://localhost:3030';
export const app = feathers()
  .configure(rest(host).superagent(superagent))
  .configure(feathers.hooks())
  .configure(feathers.authentication({ storage: window.localStorage }));
