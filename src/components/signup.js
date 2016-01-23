import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';
import Login from './login';

import actions from '../actions';

class SignUp extends Component {
    constructor(props){
        super(props);
        this.state = {progress: ''};
    }
    handleRegister(){
        this.props.register({username: this.refs.username.value, password: this.refs.password.value});
        this.setState({progress:`Registered ${this.refs.username.value}!`});
        this.refs.username.value = '';
        this.refs.password.value = '';
        this.props.history.pushState(null, '/');
        setTimeout(()=>{
            this.setState({progress: ''});
        }, 5000);
    }
    render() {
        return (
            <div>
                <h1>Please register or sign in!</h1>
                <span>{this.state.progress}</span>
                <input type="text" ref="username" placeholder="Username" />
                <input type="password" ref="password" placeholder="Password" />
                <input type="button" onClick={this.handleRegister.bind(this)} value="Register"/>
            </div>
        );
    }
}
const mapStateToProps = (state) => {
    return state.login;
};

const mapDispatchToProps = (dispatch) => {
    return {
        register: (credentials)=>{
            dispatch(actions.register(credentials));
        },
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
export default connect(mapStateToProps, mapDispatchToProps)(SignUp);