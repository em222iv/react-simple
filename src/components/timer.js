import { connect } from 'react-redux';
import React, { PropTypes, Component } from 'react';
import ReactMixin from 'react-mixin';
import TimerMixin from 'react-timer-mixin';
import actions from '../actions';

class Timer extends Component {
    componentDidMount() {
        this.props.setTime(this.props.startTime);
        switch (this.props.time) {
            case 'inc1':
                this.setInterval(() => {this.props.timeInc1()}, 1000);
                break;
            case 'inc10':
                this.setInterval(() => this.props.timeInc10(), 1000);
                break;
            case 'dec1':
                this.interval = this.setInterval(() => {
                    if(this.props.elapse==0){this.challengeDone();}
                    this.props.timeDec1() }, 1000
                );
                break;
            case 'dec10':
                this.setInterval(() => this.props.timeDec10(), 1000);
                break;
            default:
                throw new Error('Not a valid start time!');
        }
    }
    challengeDone() {
        clearInterval(this.interval);
        this.props.changingChallenge(this.props.nextChallenge);
    }

    render() {
        return (
            <div className="row right center">
                <h6>Secs: {this.props.elapse}</h6>
            </div>
        );
    }
}

Timer.propTypes = {
    startTime: PropTypes.string.isRequired,
    nextChallenge: PropTypes.string.isRequired,
    time: PropTypes.string.isRequired,
    elapse: PropTypes.number.isRequired,
    setTime: PropTypes.func.isRequired,
    timeDec1: PropTypes.func.isRequired,
    timeInc1: PropTypes.func.isRequired,
    timeDec10: PropTypes.func.isRequired,
    timeInc10: PropTypes.func.isRequired,
    changingChallenge: PropTypes.func.isRequired
};

ReactMixin.onClass(Timer, TimerMixin);

const mapStateToProps = (state) => {
    return {
        elapse: state.timer.elapsed
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        timeInc1: () => {
            dispatch(actions.timeInc1());
        },
        timeDec1: () => {
            dispatch(actions.timeDec1());
        },
        timeInc10: () => {
            dispatch(actions.timeInc10());
        },
        timeDec10: () => {
            dispatch(actions.timeDec10());
        },
        setTime: (time) => {
            dispatch(actions.setTimer(time));
        },
        changingChallenge: (chal) => {
            dispatch(actions.changeChallenge(chal));
        }
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Timer);
