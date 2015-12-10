var React = require('react'),
    ptypes = React.PropTypes,
    ReactRedux = require('react-redux'),
    actions = require('../actions'),
    TimerMixin = require('react-timer-mixin');

var Timer = React.createClass({
    mixins: [TimerMixin],
    propTypes: {
        timeDec1: ptypes.func.isRequired,
        timeInc1: ptypes.func.isRequired,
        setTime: ptypes.func.isRequired,

    },
    componentDidMount: function() {
        this.props.setTime(this.props.startTime);
        if(this.props.time == "inc1"){

            this.setInterval(
                () => { this.props.timeInc1(); },
                1000
            );
        }
        if (this.props.time == "dec1") {
            this.setInterval(
                () => { this.props.timeDec1(); },
                1000
            );
        }
    },
    render: function(){
        return (
            <div className="row right center">
                <h6>{this.props.elapse}</h6>
            </div>
        );
    }
});

var mapStateToProps = function(state){
    return {
        elapse: state.timer.elapsed
    }
};

var mapDispatchToProps = function(dispatch){
    return {
        timeInc1: function(){
            dispatch(actions.timeIncrease());
        },
        timeDec1: function(){
            dispatch(actions.timeDecrease());
        },
        setTime: function(time){
            dispatch(actions.setTimer(time));
        }
    }
};

module.exports = ReactRedux.connect(mapStateToProps, mapDispatchToProps)(Timer);
