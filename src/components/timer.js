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
        timeDec10: ptypes.func.isRequired,
        timeInc10: ptypes.func.isRequired,
        setTime: ptypes.func.isRequired,

    },
    componentDidMount: function() {
        this.props.setTime(this.props.startTime);
        this.setInterval(
        switch (this.props.time) {
            case "inc1":
                this.elapser(this.props.timeInc1())
                break;
            case "dec1":
                this.elapser(this.props.timeInc10())
                break;
            case "inc10":
                this.elapser(this.props.timeDec1())
                break;
            case "dec10":
               this.elapser(this.props.timeDec10())
                break;
        }
    },
    "elapser": function(elapser) {
        console.
        this.setInterval(
            () => { elapser },
            1000
        );
    },
    render: function(){
        return (
            <div className="row right center">
                <h6>Secs: {this.props.elapse}</h6>
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
            dispatch(actions.timeInc1());
        },
        timeDec1: function(){
            dispatch(actions.timeDec1());
        },
        timeInc10: function(){
            dispatch(actions.timeInc10());
        },
        timeDec10: function(){
            dispatch(actions.timeDec10());
        },
        setTime: function(time){
            dispatch(actions.setTimer(time));
        }
    }
};

module.exports = ReactRedux.connect(mapStateToProps, mapDispatchToProps)(Timer);
