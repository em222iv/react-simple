import React, {PropTypes, Component} from 'react';
import auth from '../auth';
import Nav from './nav';
import {connect} from'react-redux';
import {Navigation} from 'react-router';
import reactMixin from 'react-mixin';

class Wrap extends React.Component {
    componentDidMount() {
        if (!auth.loggedIn() || !this.props.game.ongoing) {
            this.props.history.pushState(null, '/');
        }
    }

    render() {
        return (
            <div>
                <Nav/>
                {this.props.children}
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        game: state.game,
        auth: state.login.auth,
    };
};

reactMixin.onClass(Wrap, Navigation);

export default connect(mapStateToProps)(Wrap);
