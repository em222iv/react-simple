import { connect } from 'react-redux';
import React, { PropTypes, Component } from 'react';

import actions from '../actions';
import Modal from './modal';
import Points from './points';
import Timer from './timer';

class Challenge1 extends Component {

    componentWillMount() {
        this.props.points.currentValue = 0;
    }

    render() {
        return (
            <div className="section no-pad-bot" id="index-banner">
            <div className="container">
                <div>
                    <h1 className="header center orange-text">GO GO GO!</h1>
                </div>
                <div className="row center">
                    <h5 className="header col s12 light">Click the button as many times as possible!!!</h5>
                    <div className="col row s6 offset-s3 center">
                        <Points />
                        <Timer time="dec1" startTime="25"/>
                    </div>
                </div>
                <div className="row center">
                    <a onClick={this.props.increase} id="download-button" className="btn-large waves-effect waves-light orange">CLICK! CLICK FOR GODS SAKES!!!</a>
                </div>
            </div>
                <Modal />
            </div>
        );
    }
}

Challenge1.propTypes = {
    points: PropTypes.object.isRequired,
    decrease: PropTypes.func.isRequired,
    increase: PropTypes.func.isRequired
};

const mapStateToProps = state => {
    return {
        points: state.points,
        game: state.game,
        auth: state.login.auth,
        elapse: state.timer.elapsed
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        increase: () => {
            dispatch(actions.pointsIncrease());
        },
        decrease: () => {
            dispatch(actions.timeDecrease());
        }
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Challenge1);
