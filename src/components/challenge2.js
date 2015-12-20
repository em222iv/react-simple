import { connect } from 'react-redux';
import React, { Component, PropTypes } from 'react';

import actions from '../actions';
import auth from '../auth';
import Modal from './modal';
import Points from './points';
import Timer from './timer';

const openModal = () => {
    $('#modal').openModal({
        dismissible: false
    });
};

class Challenge2 extends Component {

    componentWillMount() {
        this.props.points.currentValue = 500;
    }

    componentDidMount() {
        this.props.getWord();
    }

    handleChange(event) {
        this.props.decrease();
        const a = this.props.worda.randomWord;
        const b = event.target.value;
        if (a === b) {
            openModal();
        }
        let equivalency = 0;
        const minLength = (a.length > b.length) ? b.length : a.length;
        const maxLength = (a.length < b.length) ? b.length : a.length;
        for (let i = 0; i < minLength; i++) {
            if (a[i] === b[i]) {
                equivalency++;
            }
        }

        const weight = equivalency / maxLength;
        const loader = $('#loader');
        loader.css('width', (weight * 100) + '%');
    }

    render() {
        const divStyle = {
            width: '0%'
        };
        return (
            <div className="section no-pad-bot" id="index-banner">
                <div className="container">
                    <div>
                        {(auth.loggedIn() && this.props.game.ongoing
                              ? <h1 className="header center orange-text">TYPE TYPE TYPE</h1>
                              : <h1 className="header center orange-text">Login and start new Game!</h1>
                        )}
                    </div>
                    <div className="row center">
                        <div className="progress">
                            <div id="loader" className="determinate" style={divStyle}></div>
                        </div>
                        <div className="col row s6 offset-s3 center">
                            <Points />
                            <Timer time="inc1" startTime="0"/>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col s12 m12">
                            <div className="card blue-grey darken-1">
                                <div className="card-content white-text">
                                    <form className="col s12">
                                        <div className="row">
                                            <div className="input-field col s12">
                                                <textarea onChange={this.handleChange.bind(this)} id="textarea1" className="materialize-textarea"></textarea>
                                                <label htmlFor="textarea1">Type here!</label>
                                            </div>
                                        </div>
                                    </form>
                                </div>
                                <div className="card-action">
                                    <div className="noselect" id="lorem">{this.props.worda.randomWord}</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <Modal />
            </div>
        );
    }
}

Challenge2.propTypes = {
    game: PropTypes.object.isRequired,
    worda: PropTypes.object.isRequired,
    points: PropTypes.object.isRequired,
    decrease: PropTypes.func.isRequired,
    getWord: PropTypes.func.isRequired
};

const mapStateToProps = (state) => {
    return {
        points: state.points,
        game: state.game,
        worda: state.word,
        auth: state.login.auth
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        decrease: () => {
            dispatch(actions.pointsDecrease());
        },
        getWord: () => {
            dispatch(actions.getRndString());
        }
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Challenge2);
