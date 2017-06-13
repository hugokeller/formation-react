import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, hashHistory, IndexRoute } from 'react-router'

import App from './main/App';
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import User from './main/Components/User';
import Info from './main/Components/Info';
import Login from './main/Components/Login';
import Home from './main/Components/Home';


ReactDOM.render((
    <Router history={hashHistory}>
        <Route path="/" component={App}>
            <IndexRoute component={Home}/>
            <Route path="/user" component={User}/>
            <Route path="/info" component={Info}/>
            <Route path="/login" component={Login}/>
        </Route>
    </Router>
    ), document.getElementById('root'));