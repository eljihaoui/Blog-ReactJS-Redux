import rootReducer from './reducers';
const initialState = {};
const devTools = window.__REDUX_DEVTOOLS_EXTENSION__ ? window.__REDUX_DEVTOOLS_EXTENSION__() : f => f
const store = createStore({
    rootReducer,
    initialState,
    devTools
});

export default store;