import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';
import actions from '../actions';
import C1 from './challenge1';
import C2 from './challenge2';

class Game extends Component {
    componentDidMount() {
        console.log(this.props.currentChallange);
    }

    handleClick() {
        this.props.game();
        this.props.nextChallenge('C1');
        this.props.zeroPoints();
    }

    render() {
        const headerText = this.props.auth ? "Play the game!!" : "Login!";
        const header = (!this.props.gameOngoing ?
            <div> {<h1 className="header center orange-text">{headerText}</h1>}</div>
            : <div></div>);

        const scoreWas = this.props.auth ? <h5 className="header center orange-text">Your score
            was: {this.props.points.currentValue}</h5> : '';
        const playToGetAScore = (this.props.auth && !this.props.gameOngoing
            ? <h5 className="header center orange-text">play to get a score</h5> : '');
        const currentValueAndNotOnGoing = (this.props.points.currentValue > 0 && !this.props.gameOngoing);
        const scorePart = currentValueAndNotOnGoing ? <div>{scoreWas}</div>
            : <div>{playToGetAScore}</div>;

        const startButton = (this.props.auth
                ? <div onClick={this.handleClick.bind(this)} id="download-button"
                       className="btn-large waves-effect waves-light orange">Start</div>
                : <div></div>
        );
        const challengePart = (()=> {
            switch (this.props.currentChallange) {
                case 0:
                    return <div className="row center">
                        {startButton}
                    </div>;
                case 1:
                    return <C1 />;
                case 2:
                    return <C2 nextChallenge="puzzleChallenge "/>;
            }
        })();
        const challenge = (!this.props.auth && !this.props.gameOngoing
                ? ''
                : <div>{challengePart}</div>
        );
        return (
            <div className="section no-pad-bot" id="index-banner">
                    {header}
                    {scorePart}
                    {challenge}
            </div>
        );
    }
}

Game.propTypes = {
    auth: PropTypes.object,
    game: PropTypes.func.isRequired,
    nextChallenge: PropTypes.func.isRequired,
    zeroPoints: PropTypes.func.isRequired
};

const mapStateToProps = (state) => {
    return {
        auth: state.login.auth,
        gameOngoing: state.game.ongoing,
        currentChallange: state.currChallenge.challenge,
        points: state.points
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        game: () => {
            dispatch(actions.gameOn());
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

export default connect(mapStateToProps, mapDispatchToProps)(Game);