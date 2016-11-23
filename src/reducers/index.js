import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';

import recipes from './recipes';
import addRecipe from './addRecipe';
import signup from './signup';
import login from './login';
import checkIfLoggedIn from './checkLogin';
import currRecipe from './currRecipe';

const rootReducer = combineReducers({currRecipe, checkIfLoggedIn, addRecipe, login, signup, recipes, routing: routerReducer});

export default rootReducer;
