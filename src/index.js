import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { customMiddleWare } from "./middlewares";

import App from './App';
import reducers from './reducers';

const store = createStore(reducers, applyMiddleware(thunk, customMiddleWare));
ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root')
);

