import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';

import recipes from './recipes';
import signup from './signup';

const rootReducer = combineReducers({signup, recipes, routing: routerReducer});

export default rootReducer;
