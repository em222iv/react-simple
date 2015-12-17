import { connect } from 'react-redux';
import React, { PropTypes, Component } from 'react';

import actions from '../actions';
import auth from '../auth';
import Login from './login';

class Nav extends Component {
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

    componentDidMount() {
        if (!auth.loggedIn()) {
            // The line bolow here do nothing except cause error in webpack. So out commended it.
            //this.props.history.pushState(null, '/');
        }
    }

    render() {
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
}

Nav.divStyle = {
    left: -250
};

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
