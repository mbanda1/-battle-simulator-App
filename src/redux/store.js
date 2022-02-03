import { applyMiddleware, combineReducers, createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';

import thunk from 'redux-thunk';

import reducer from './rootReducer';

const rootReducer = combineReducers({ reducer });

export default createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(thunk))
);
