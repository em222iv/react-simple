import { connect } from 'react-redux';
import React, { Component, PropTypes } from 'react';
import actions from '../actions';
import Points from './points';
import Timer from './timer';
import ReactMixin from 'react-mixin';
import TimerMixin from 'react-timer-mixin';

class Challenge2 extends Component {
    componentDidMount() {
        this.props.getWord();
        this.setInterval(() => {
            this.props.decrease()
        }, 3000);
    }

    handleChange(event) {
        this.props.decrease();
        const a = this.props.worda.randomWord;
        const b = event.target.value;
        const loader = $(this.refs.loader);
        if (a === b || this.props.points.currentValue == 0) {
            this.props.nextChallenge('C0');
            this.props.gameOff();
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
                        <h1 className="header center orange-text">TYPE TYPE TYPE</h1>
                    </div>
                    <div className="row center">
                        <h5 className="header col s12 light">Write a perfect copy of the text in the bottom of the
                            box!</h5>
                        <div className="progress">
                            <div ref="loader" id="loader" className="determinate" style={divStyle}></div>
                        </div>
                        <div className="col row s6 offset-s3 center">
                            <Points />
                        </div>
                    </div>
                    <div className="row">
                        <div className="col s12 m12">
                            <div className="card blue-grey darken-1">
                                <div className="card-content white-text">
                                    <form className="col s12">
                                        <div className="row">
                                            <div className="input-field col s12">
                                                <textarea onChange={this.handleChange.bind(this)} id="textarea1"
                                                          className="materialize-textarea"></textarea>
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
            </div>
        );
    }
}

Challenge2.propTypes = {
    nextChallenge: PropTypes.string.isRequired,
    game: PropTypes.object.isRequired,
    worda: PropTypes.object.isRequired,
    points: PropTypes.object.isRequired,
    decrease: PropTypes.func.isRequired,
    getWord: PropTypes.func.isRequired
};

ReactMixin.onClass(Challenge2, TimerMixin);

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
        },
        nextChallenge: (chal) => {
            dispatch(actions.changeChallenge(chal));
        },
        gameOff: (chal) => {
            dispatch(actions.gameOff());
        }
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Challenge2);
