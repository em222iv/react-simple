import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';

import actions from '../actions';

class Home extends Component {
    render() {
        return (
            <div className="section no-pad-bot" id="index-banner">
                <div className="container">
                    <div>
                        {(this.props.auth
                              ? <h1 className="header center orange-text">Hello!</h1>
                              : <h1 className="header center orange-text">Login!</h1>
                        )}
                    </div>
                    <div className="row center">
                        <h5 className="header col s12 light">Who solves it the fastest? Try your luck!</h5>
                    </div>
                    <div className="row center">
                        {(this.props.auth
                              ? <Link to="/C2" onClick={this.props.game} id="download-button" className="btn-large waves-effect waves-light orange">Start</Link>
                              : <div></div>
                        )}
                    </div>
                </div>
            </div>
        );
    }
}

Home.propTypes = {
    auth: PropTypes.bool.isRequired,
    game: PropTypes.func.isRequired
};

const mapStateToProps = (state) => {
    return state.login;
};

const mapDispatchToProps = (dispatch) => {
    return {
        game: () => {
            dispatch(actions.gameOngoing());
        }
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);
