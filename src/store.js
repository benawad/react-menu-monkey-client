import { createStore, applyMiddleware } from 'redux';
import { syncHistoryWithStore } from 'react-router-redux';
import { browserHistory } from 'react-router';
import createSagaMiddleware from 'redux-saga';

import { rootReducer, rootSaga } from './modules';

const sagaMiddleware = createSagaMiddleware();

export const store = createStore(rootReducer, {}, applyMiddleware(sagaMiddleware));

sagaMiddleware.run(rootSaga);

export const history = syncHistoryWithStore(browserHistory, store);

