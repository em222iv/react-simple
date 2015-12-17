import React from 'react';
import { Route, IndexRoute } from 'react-router';
import Wrap from './components/wrap';
import C1 from './components/challenge1';
import C2 from './components/challenge2';
import Home from './components/home';


export const routes = (
    <Route path="/" component={Wrap}>
        <IndexRoute component={Home}/>
        <Route path="/C1" component={C1}/>
        <Route path="/C2" component={C2}/>
    </Route>
);
