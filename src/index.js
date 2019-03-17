import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import {createStore, applyMiddleware, combineReducers} from 'redux';
import {createLogger} from 'redux-logger';
import thunkMiddleware from 'redux-thunk';
import './index.css';
import App from './Containers/App';
import * as serviceWorker from './serviceWorker';
import {searchRobots, requestRobots} from './reducers';
import 'tachyons';

const logger = createLogger();

const rootReducer = combineReducers({searchRobots, requestRobots});
//combines all the reducers into one object

const store = createStore(rootReducer, applyMiddleware(thunkMiddleware, logger));
//create a store using the root reducer(a combination of all reducers),
//then add any middleware in order

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>, document.getElementById('root'));
//the provider will pass store as a prop to app and its children, wrap it in provider so we dont have to pass it to all the children components

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();