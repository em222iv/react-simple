import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';
import actions from '../actions';
import C1 from './challenge1';

class Game extends Component {
    render() {
        return (
            <div className="section no-pad-bot" id="index-banner">
                <div className="container">
                    {(!this.props.gamea
                            ?    <div>
                                    {(this.props.auth
                                            ? <h1 className="header center orange-text">Hello!</h1>
                                            : <h1 className="header center orange-text">Login!</h1>
                                    )}
                                </div>
                            : <div></div>
                            )}
                         <div></div>
                    {(!this.props.gamea
                        ?   <div className="row center">
                                {(this.props.auth
                                    ? <div onClick={this.props.game} id="download-button" className="btn-large waves-effect waves-light orange">Start</div>
                                    : <div></div>
                                )}
                            </div>
                        : <C1/>
                    )}
                </div>
            </div>
        );
    }
}

Game.propTypes = {
    auth: PropTypes.bool.isRequired,
    game: PropTypes.func.isRequired
};

const mapStateToProps = (state) => {
    return {
        auth: state.login.auth,
        gamea: state.game.ongoing
        }
};

const mapDispatchToProps = (dispatch) => {
    return {
        game: () => {
            dispatch(actions.gameOngoing());
        }
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Game);
