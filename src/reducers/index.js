import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';

import recipes from './recipes';
import addRecipe from './addRecipe';
import signup from './signup';
import login from './login';

const rootReducer = combineReducers({addRecipe, login, signup, recipes, routing: routerReducer});

export default rootReducer;
