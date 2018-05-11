import { applyMiddleware, compose, createStore } from 'redux';
import thunkMiddleware from 'redux-thunk';

import rootReducer from "./reducers";
import { createMiddleware } from "./middleware";

const enhancedCompose = typeof window === 'object' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ?
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
      // Specify extension’s options like name, actionsBlacklist, actionsCreators, serialize...
    }) : compose;

const createStoreWithMiddleware = enhancedCompose(
    applyMiddleware(
        createMiddleware(),
        thunkMiddleware
    ),
    ...[]
)(createStore);

export default createStoreWithMiddleware(rootReducer);
