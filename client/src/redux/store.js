import {createStore, applyMiddleware} from 'redux';
import logger from 'redux-logger';
import {persistStore} from 'redux-persist';
import createSagaMiddleware from 'redux-saga';
import { composeWithDevTools } from 'redux-devtools-extension';

import rootReducer from "./root.reducer";
import rootSaga from './root-saga';

const composeEnhancers = composeWithDevTools({
	// Specify name here, actionsBlacklist, actionsCreators and other options if needed
  });

const sagaMiddleware = createSagaMiddleware();

const middlewares = [sagaMiddleware, logger];

// if(process.env.NODE_ENV === 'development'){
// 	middlewares.push(logger);
// }

export const store = createStore(rootReducer, composeEnhancers(
	applyMiddleware(...middlewares),
	// other store enhancers if any
  ));

sagaMiddleware.run(rootSaga);

export const persistor = persistStore(store); 