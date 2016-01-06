import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';

import actions from '../actions';

class Login extends Component {
    handleLogin(event) {
        event.preventDefault();

        const user = {
            username: this.refs.username.value,
            password: this.refs.password.value
        };

        this.props.login(user);
    }

    handleLogout() {
        this.props.logout();
        this.props.gameOff();
        this.props.current('C0');
    }

    render() {
        return (
            <ul id="dropdown1" style={this.divStyle} className="dropdown-content">
                <li><a href="#">Home</a></li>
                <li className="divider"></li>
                <li className="noCollaplse">
                    {(this.props.auth
                          ? <div></div>
                          : <input ref="username" id="username" type="text" placeholder="admin" className="validate"/>
                    )}
                </li>
                <li className="noCollaplse">
                    {(this.props.auth
                          ? <div></div>
                          : <input ref="password" id="password" type="password" placeholder="password" className="validate"/>
                    )}
                </li>
                <li>
                    {(this.props.auth
                          ? <Link to="/" href="#" onClick={this.handleLogout.bind(this)}>logout</Link>
                          : <Link to="/" onClick={this.handleLogin.bind(this)}>login</Link>
                    )}
                </li>
            </ul>
        );
    }
}

Login.propTypes = {
    auth: PropTypes.bool.isRequired,
    login: PropTypes.func.isRequired,
    logout: PropTypes.func.isRequired,
    gameOff: PropTypes.func.isRequired,
    current: PropTypes.func.isRequired
};

Login.divStyle = {
    width: 200
};

const mapStateToProps = (state) => {
    return state.login;
};

const mapDispatchToProps = (dispatch) => {
    return {
        login: (loginCall) => {
            actions.login(loginCall, dispatch);
        },
        logout: () => {
            dispatch(actions.logout());
        },
        gameOff: () => {
            dispatch(actions.gameOff());
        },
        current: (chal) => {
            dispatch(actions.currentChallenge(chal));
        }
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);
