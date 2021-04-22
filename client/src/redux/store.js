import {createStore, applyMiddleware, compose} from 'redux';
import logger from 'redux-logger';
import {persistStore} from 'redux-persist';
import createSagaMiddleware from 'redux-saga';
import { composeWithDevTools } from 'redux-devtools-extension';

import rootReducer from "./root.reducer";
import rootSaga from './root-saga';

const nodeEnv = process.env.NODE_ENV;

const composeEnhancers = nodeEnv !== 'production'? composeWithDevTools({
	// Specify name here, actionsBlacklist, actionsCreators and other options if needed
  }) : compose;

const sagaMiddleware = createSagaMiddleware();

const middlewares = [sagaMiddleware];

if(nodeEnv === 'development'){
	middlewares.push(logger);
}


export const store = createStore(rootReducer, composeEnhancers(
	applyMiddleware(...middlewares),
	// other store enhancers if any
  ));

sagaMiddleware.run(rootSaga);

export const persistor = persistStore(store); 