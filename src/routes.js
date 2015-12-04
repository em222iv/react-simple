var React = require('react'),
    ReactRouter = require('react-router'),
    Route = ReactRouter.Route,
    IndexRoute = ReactRouter.IndexRoute,
    Wrap = require('./components/wrap'),
    C1 = require('./components/challenge1'),
    C2 = require('./components/challenge2'),
    Modal = require('./components/modal'),
    Home = require('./components/home');


module.exports = (
    <Route path='/' component={Wrap}>
        <IndexRoute component={Home}/>
        <Route path='/C1' component={C1}/>
        <Route path='/C2' component={C2}/>
        <Route path='' component={Modal}/>
    </Route>
);
