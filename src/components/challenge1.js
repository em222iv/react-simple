var React = require('react'),
    ptypes = React.PropTypes,
    ReactRedux = require('react-redux'),
    actions = require('../actions'),
    auth = require('../auth'),
    Navigation = require('react-router').Navigation,
    Modal = require('./modal'),
    Timer = require('./timer'),
    Points = require('./points');

var Challenge1 = React.createClass({
    mixins: [Navigation],
    propTypes: {
        decrease: ptypes.func.isRequired,
        increase: ptypes.func.isRequired
    },
    componentWillMount: function () {
        if (!auth.loggedIn() || !this.props.game.ongoing) {
            this.props.history.pushState(null, '/');
        }
        this.props.points.currentValue = 0;
    },
    render: function(){
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
});

var mapStateToProps = function(state){
    return {
        points: state.points,
        game: state.game,
        auth: state.login.auth,
        elapse: state.timer.elapsed
    };
};

var mapDispatchToProps = function(dispatch){
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
module.exports = ReactRedux.connect(mapStateToProps, mapDispatchToProps)(Challenge1);