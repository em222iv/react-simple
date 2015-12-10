var React = require('react'),
    Login = require('./login'),
    ReactRedux = require('react-redux'),
    ptypes = React.PropTypes,
    actions = require('../actions'),
    auth = require('../auth');



var Nav = React.createClass({
    propTypes: {
        login: ptypes.func.isRequired
    },
    componentWillMount: function() {
        var user = {
            username: "",
            password: ""
        };
        auth.login("", "", (loggedIn) => {
            if(loggedIn){
                this.props.login(user);
            }
        });

    },
    componentDidMount: function() {
        if (!auth.loggedIn()) {
            this.props.history.pushState(null, '/');
        }
    },
    render: function(){
        return (
            <div>
                <Login/>
                <nav>
                    <div className="container">
                        <div className="nav-wrapper">
                            <a href="#" className="brand-logo">Logo</a>
                            <ul id="nav-mobile" className="right hide-on-med-and-down">
                                <li><a className="dropdown-button" href="#" data-activates="dropdown1">Get started</a></li>
                            </ul>
                        </div>
                    </div>
                </nav>
            </div>
        );
    }
});


Nav.divStyle = {
    left: -250
};

var mapStateToProps = function(state){
    return state.login;
};

var mapDispatchToProps = function(dispatch){
    return {
        login: function(loginCall){
            actions.login(loginCall, dispatch);
        },
        logout: function(){
            dispatch(actions.logout());
        }
    }
};

module.exports = ReactRedux.connect(mapStateToProps, mapDispatchToProps)(Nav);
