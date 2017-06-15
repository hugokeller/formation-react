import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, hashHistory, IndexRoute } from 'react-router';
import {createStore, applyMiddleware} from 'redux';
import thunkMiddleware from 'redux-thunk';
import createLogger from 'redux-logger';
import {Provider} from 'react-redux';
import { rootReducer } from './main/reducers';

import App from './main/App';
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import User from './main/Components/User';
import Info from './main/Components/Info';
import Login from './main/Components/Login';
import Home from './main/Components/Home';
import Logout from './main/Components/Logout';

const store = createStore(
    rootReducer,
    applyMiddleware(
        thunkMiddleware,
        createLogger()
    ));

ReactDOM.render((
    <Provider store={store}>
        <Router history={hashHistory}>
            <Route path="/" component={App}>
                <IndexRoute component={Home}/>
                <Route path="/user" component={User}/>
                <Route path="/info" component={Info}/>
                <Route path="/login" component={Login}/>
                <Route path="/logout" component={Logout}/>
            </Route>
        </Router>
    </Provider>
    ), document.getElementById('root'));