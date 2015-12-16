//var React = require('react'),
//    ReactRedux = require('react-redux'),
//    Nav = require('./nav'),
//    auth = require('../auth');
//import React from 'react';
//import ReactRedux from 'react-redux';
//import Nav from './Nav';
//import auth from '../auth';
import React, {PropTypes, Component} from 'react';
import auth from '../auth';
import Nav from './Nav';
import {connect} from'react-redux';
import {Navigation} from 'react-router';
import reactMixin from 'react-mixin';



var Wrap = React.createClass({
    componentDidMount: function() {
        if (!auth.loggedIn() || !this.props.game.ongoing) {
            this.props.history.pushState(null, '/');
        }
    },
    render: function(){
        return (
            <div>
                <Nav/>
                {this.props.children}
            </div>
        );
    }
});
reactMixin.onClass(Wrap, Navigation);
var mapStateToProps = function(state){
    return {
        game: state.game,
        auth: state.login.auth,
    };
};

var mapDispatchToProps = function(){
    return {

    }
};


export default connect(mapStateToProps, mapDispatchToProps)(Wrap);