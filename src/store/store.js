import { applyMiddleware } from 'redux';
import { configureStore } from '@reduxjs/toolkit';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import reducers from './reducers';

const middlewares = [thunk];
export default configureStore(
	{ reducer: reducers },
	{},
	composeWithDevTools(applyMiddleware(...middlewares)),
);
