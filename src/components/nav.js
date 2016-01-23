import { connect } from 'react-redux';
import React, { PropTypes, Component } from 'react';

import actions from '../actions';
import auth from '../auth';
import Login from './login';

class Nav extends Component {
    //checks if user can be loggd in via token
    componentWillMount() {
        const user = {
            username: '',
            password: ''
        };

        auth.login('', '', (loggedIn) => {
            if (loggedIn) {
                this.props.login(user);
            }
        });
    }

    render() {
        return (
            <div>
                <nav>
                    <div className="container">
                        <div className="nav-wrapper">
                            <a href="#" style={{fontSize: '3rem'}}>Logo</a>
                            <a href="#" onClick={this.props.logout}>Logout</a>
                        </div>
                    </div>
                </nav>
            </div>
        );
    }
}

Nav.propTypes = {
    login: PropTypes.func.isRequired
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
        }
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Nav);
