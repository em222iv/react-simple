import { connect } from 'react-redux';
import { Navigation } from 'react-router';
import React, { PropTypes } from 'react';
import ReactMixin from 'react-mixin';
import auth from '../auth';
import Nav from './nav';
import Game from './game';
import SignUp from './signup';
import Login from './login';

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
                <div className="container">
                    {auth.loggedIn() ? <Game /> : <div><SignUp history={this.props.history}/><Login /></div>}
                </div>
            </div>
        );
    }
}

Wrap.propTypes = {
    game: PropTypes.object.isRequired,
    history: PropTypes.object.isRequired,
    children: PropTypes.object
};

const mapStateToProps = (state) => {
    return {
        game: state.game,
        auth: state.login.auth
    };
};

ReactMixin.onClass(Wrap, Navigation);

export default connect(mapStateToProps)(Wrap);
