import { connect } from 'react-redux';
import { Navigation } from 'react-router';
import React, { PropTypes } from 'react';
import ReactMixin from 'react-mixin';

import auth from '../auth';
import Nav from './nav';

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
