import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';

import { rootReducer, rootSaga } from './modules';

const sagaMiddleware = createSagaMiddleware();

export const store = createStore(rootReducer, {}, applyMiddleware(sagaMiddleware));

sagaMiddleware.run(rootSaga);
