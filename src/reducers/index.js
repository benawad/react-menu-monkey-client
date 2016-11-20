import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';

import recipes from './recipes';
import signup from './signup';
import login from './login';

const rootReducer = combineReducers({login, signup, recipes, routing: routerReducer});

export default rootReducer;
