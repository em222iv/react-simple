var React = require('react'),
    ptypes = React.PropTypes,
    ReactRedux = require('react-redux'),
    actions = require('../actions'),
    auth = require('../auth');

this.divStyle = {
    width:200
};
var Login = React.createClass({
    propTypes: {
        login: ptypes.func.isRequired
    },
    handleLogin: function(event) {
        event.preventDefault();

        var user = {
            username: this.refs.username.value,
            password: this.refs.password.value
        };

        this.props.login(user);

    },
    handleLogout: function() {
        this.props.logout();
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
    render: function(){
        return (
            <ul id="dropdown1" style={this.divStyle} className="dropdown-content">
                <li><a href="#">sumtin'</a></li>
                <li><a href="#">sumtin'moore</a></li>
                <li className="divider"></li>
                <li className="noCollaplse">
                    {(this.props.auth
                            ?  <div></div>
                            :  <input ref="username" id="username" type="text" placeholder="admin" className="validate"/>
                    )}
                </li>
                <li className="noCollaplse">
                    {(this.props.auth
                            ?  <div></div>
                            :  <input ref="password" id="password" type="password" placeholder="password" className="validate"/>
                    )}
                </li>
                <li>
                    {(this.props.auth
                            ?  <a href="#" onClick={this.handleLogout}>logout</a>
                            :  <a href="#" onClick={this.handleLogin}>login</a>
                    )}
                </li>
            </ul>
        );
    }
});

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
        },
        token: function(){
            var loginCall;
            actions.token(loginCall, dispatch);
        }
    }
};

module.exports = ReactRedux.connect(mapStateToProps, mapDispatchToProps)(Login);