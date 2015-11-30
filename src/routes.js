var React = require('react'),
    ReactRouter = require('react-router'),
    Route = ReactRouter.Route,
    IndexRoute = ReactRouter.IndexRoute,
    Wrap = require('./components/wrap'),
    C1 = require('./components/challenge1'),
    Home = require('./components/home');


module.exports = (
    <Route path='/' component={Wrap}>
        <IndexRoute component={Home}/>
        <Route path='/C1' component={C1}/>
    </Route>
);
