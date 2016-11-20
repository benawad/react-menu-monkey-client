import { createStore, applyMiddleware } from 'redux';
import { syncHistoryWithStore } from 'react-router-redux';
import { browserHistory } from 'react-router'

import createSagaMiddleware from 'redux-saga'
import mySaga from './sagas/sagas'

import rootReducer from './reducers/index';

import { recentRecipes } from './actions/actionCreators.js';

const defaultState = {
};

const sagaMiddleware = createSagaMiddleware()

const store = createStore(rootReducer, defaultState, applyMiddleware(sagaMiddleware));

sagaMiddleware.run(mySaga)

store.dispatch(recentRecipes());

export const history = syncHistoryWithStore(browserHistory, store);

export default store;

