import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';

import recipes from './recipes';
import addRecipe from './addRecipe';
import signup from './signup';
import login from './login';
import checkIfLoggedIn from './checkLogin.js';

const rootReducer = combineReducers({checkIfLoggedIn, addRecipe, login, signup, recipes, routing: routerReducer});

export default rootReducer;
