//var React = require('react'),
//    ReactRouter = require('react-router'),
//    Route = ReactRouter.Route,
//    IndexRoute = ReactRouter.IndexRoute,
//    Wrap = require('./components/wrap'),
//    C1 = require('./components/challenge1'),
//    C2 = require('./components/challenge2'),
//    Modal = require('./components/modal'),
//    Home = require('./components/home');

import React from 'react';
import ReactRouter,{Route,IndexRoute} from 'react-router';
import Wrap from './components/wrap';
import C1 from './components/challenge1';
import C2 from './components/challenge2';
import Modal from './components/modal';
import Home from './components/home';


export default (
    <Route path='/' component={Wrap}>
        <IndexRoute component={Home}/>
        <Route path='/C1' component={C1}/>
        <Route path='/C2' component={C2}/>
    </Route>
);
