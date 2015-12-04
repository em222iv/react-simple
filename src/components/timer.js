var React = require('react'),
    ptypes = React.PropTypes,
    ReactRedux = require('react-redux'),
    actions = require('../actions'),
    TimerMixin = require('react-timer-mixin');

var Timer = React.createClass({
    mixins: [TimerMixin],
    propTypes: {
        time: ptypes.func.isRequired
    },
    componentDidMount: function() {
        this.setInterval(
            () => { this.props.time(); },
            1000
        );
    },
    render: function(){
        return (
            <div className="row right center">
                <p className="header col s12 light">{this.props.elapse}</p>
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
        time: function(){
            dispatch(actions.timeIncrease());
        }
    }
};

module.exports = ReactRedux.connect(mapStateToProps, mapDispatchToProps)(Timer);
