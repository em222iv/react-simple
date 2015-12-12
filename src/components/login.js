var React = require('react'),
    ptypes = React.PropTypes,
    ReactRedux = require('react-redux'),
    actions = require('../actions'),
    auth = require('../auth'),
    Link = require('react-router').Link;



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
    render: function(){
        return (
            <ul id="dropdown1" style={this.divStyle} className="dropdown-content">
                <li><a href="#">Home</a></li>
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
                            ?  <Link to="/" href="#" onClick={this.handleLogout}>logout</Link>
                            :  <Link to="/" onClick={this.handleLogin}>login</Link>
                    )}
                </li>
            </ul>
        );
    }
});

Login.divStyle = {
    width:200
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
        },
    }
};

module.exports = ReactRedux.connect(mapStateToProps, mapDispatchToProps)(Login);