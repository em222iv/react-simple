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
        this.props.nextChallenge('C0');
        this.props.zeroPoints();
    }

    render() {
        return (
            <div><input ref="username" id="username" type="text" placeholder="admin"
                        className="validate"/>
                <input ref="password" id="password" type="password"
                       placeholder="password"
                       className="validate"/>
                <button
                    onClick={this.handleLogin.bind(this)}>login
                </button>
            </div>
        );
    }
}

Login.propTypes = {
    auth: PropTypes.object,
    login: PropTypes.func.isRequired,
    logout: PropTypes.func.isRequired,
    gameOff: PropTypes.func.isRequired,
    nextChallenge: PropTypes.func.isRequired,
    zeroPoints: PropTypes.func.isRequired
};

Login.divStyle = {
    width: 200
};

const mapStateToProps = (state) => {
    return {auth: state.login.auth};
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
        nextChallenge: (chal) => {
            dispatch(actions.changeChallenge(chal));
        },
        zeroPoints: () => {
            dispatch(actions.pointsZero());
        }
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);
