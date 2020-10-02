import { createStore, compose, applyMiddleware } from 'redux';
import rootReducer from './reducers';
import thunk from 'redux-thunk';
const initialState = {};
const devTools = window.__REDUX_DEVTOOLS_EXTENSION__ ? window.__REDUX_DEVTOOLS_EXTENSION__() : f => f
const store = createStore(
    rootReducer,
    initialState,
    compose(applyMiddleware(thunk), devTools)
);

export default store;