import React, {PropTypes, Component} from 'react';
import {connect} from'react-redux';
import actions from '../actions';
import auth from '../auth';
import {Navigation} from 'react-router';
import Modal from './modal';
import Points from './points';
import Timer from './timer';
import reactMixin from 'react-mixin';

class Challenge1 extends Component{

    componentWillMount () {
        if (!auth.loggedIn() || !this.props.game.ongoing) {
            this.props.history.pushState(null, '/');
        }
        this.props.points.currentValue = 0;
    }

    render (){
        return (
            <div className="section no-pad-bot" id="index-banner">
            <div className="container">
                <div>
                {(auth.loggedIn() && this.props.game.ongoing
                    ?   <h1 className="header center orange-text">GO GO GO!</h1>
                    :   <h1 className="header center orange-text">Login and start new Game!</h1>
                )}
                </div>
                <div className="row center">
                    <h5 className="header col s12 light">Click the button as many times as possible!!!</h5>
                    <div className="col row s6 offset-s3 center">
                        <Points />
                        <Timer time="dec1" startTime="50"/>
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
};

Challenge1.propTypes = {
    decrease: PropTypes.func.isRequired,
    increase: PropTypes.func.isRequired
};
reactMixin.onClass(Challenge1, Navigation);

const mapStateToProps = state => {
    return {
        points: state.points,
        game: state.game,
        auth: state.login.auth,
        elapse: state.timer.elapsed
    };
};

const mapDispatchToProps = (dispatch) =>{
    return {
        increase: function(){
            dispatch(actions.pointsIncrease());
        },
        decrease: function(){
            dispatch(actions.timeDecrease());
        }
    }
};

//function openModal() {
//    $('#modal').openModal({
//        dismissible: false
//    });
//}
export default connect(mapStateToProps, mapDispatchToProps)(Challenge1);