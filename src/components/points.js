var React = require('react'),
    ptypes = React.PropTypes,
    ReactRedux = require('react-redux'),
    actions = require('../actions'),
    Navigation = require('react-router').Navigation;

var Points = React.createClass({
    mixins: [Navigation],
    propTypes: {
        increase: ptypes.func.isRequired
    },
    render: function(){
        return (
            <div className="row left center">
                <h6>Clicks: {this.props.points.currentValue}</h6>
            </div>

        );
    }
});

var mapStateToProps = function(state){
    return {
        points: state.points,
    };
};

var mapDispatchToProps = function(dispatch){
    return {
        increase: function(){
            dispatch(actions.pointsIncrease());
        }
    }
};

module.exports = ReactRedux.connect(mapStateToProps, mapDispatchToProps)(Points);