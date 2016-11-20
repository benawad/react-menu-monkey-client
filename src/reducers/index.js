import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';

import recipes from './recipes';

const rootReducer = combineReducers({recipes, routing: routerReducer});

export default rootReducer;
