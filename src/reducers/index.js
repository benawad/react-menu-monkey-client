import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';

import recipes from './recipes';
import checkIfLoggedIn from './checkLogin';
import currRecipe from './currRecipe';
import myRecipes from './myRecipes';

const rootReducer = combineReducers({ myRecipes, currRecipe, checkIfLoggedIn, recipes, routing: routerReducer });

export default rootReducer;
