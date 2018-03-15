import * as React from 'react';
import * as ReactDOM from 'react-dom';

import {createStore, applyMiddleware} from 'redux';
import {Provider} from 'react-redux';
import logger from 'redux-logger';
import ReduxThunk from 'redux-thunk';

import indexReducer from './reducers/index-reducer';
import AppContainer from './components/app-container';

const middleware = applyMiddleware(ReduxThunk, logger);
const store = createStore(indexReducer, middleware);

ReactDOM.render(
    <Provider store={store}>
        <AppContainer/>
    </Provider>,
    document.getElementById('app')
)