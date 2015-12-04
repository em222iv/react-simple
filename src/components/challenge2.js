var React = require('react'),
    ptypes = React.PropTypes,
    ReactRedux = require('react-redux'),
    actions = require('../actions'),
    auth = require('../auth'),
    Navigation = require('react-router').Navigation,
    Modal = require('./modal');

var Challenge2 = React.createClass({
    mixins: [Navigation],
    propTypes: {
        increase: ptypes.func.isRequired
    },
    componentWillMount: function() {
        if(!auth.loggedIn() || !this.props.game.ongoing){
            this.props.history.pushState(null, '/');
        }
    },
    componentDidMount: function() {
        var circle = new ProgressBar.Circle('#example-percent-container', {
            color: '#FCB03C',
                strokeWidth: 3,
                trailWidth: 1,
                duration: 1500,
                text: {
                value: '0'
            },
            step: function(state, bar) {
                bar.setText((bar.value() * 100).toFixed(0));
            }
        });
        circle.animate(1, function() {
            circle.animate(0);
        })
    },
    render: function(){
        var divStyle1 = {
            position: 'relative'
        };
        var divStyle2 = {
            display: 'block',
            width: '100%'
        };
        var divStyle3 = {
            position: 'absolute',
            left: '50%',
            top: '50%',
            padding: '0px',
            margin: '0px',
            transform: 'translate(-50%, -50%)',
            color: 'rgb(252, 176, 60)'
        };
        var divStyle4 = {
            strokeDasharray: '304.844px, 304.844px',
            strokeDashoffset: '304.844px'
        };
        return (
            <div className="section no-pad-bot" id="index-banner">
            <div className="container">
                <div className="row center">
                    <h5 className="header col s12 light">Click the button as many times as possible!!!</h5>
                </div>
                <div className="row center">
                    <div className="example-container" id="example-percent-container" styles={divStyle1}>
                        <svg viewBox="0 0 100 100" styles={divStyle2}>
                            <path d="M 50,50 m 0,-48.5 a 48.5,48.5 0 1 1 0,97 a 48.5,48.5 0 1 1 0,-97" stroke="#eee" strokeWidth="1" fillOpacity="0">
                            </path>
                            <path d="M 50,50 m 0,-48.5 a 48.5,48.5 0 1 1 0,97 a 48.5,48.5 0 1 1 0,-97" stroke="#FCB03C" strokeWidth="3" fillOpacity="0" style={divStyle4}>
                            </path>
                        </svg>
                        <p className="progressbar-text" styles={divStyle3}>0</p>
                        </div>
                </div>
                </div>
                <Modal />
            </div>

        );
    }
});

var mapStateToProps = function(state){
    return {
        count: state.count,
        game: state.game,
        auth: state.login.auth
    };
};

var mapDispatchToProps = function(dispatch){
    return {
        increase: function(){
            dispatch(actions.countIncrease());
        }
    }
};

module.exports = ReactRedux.connect(mapStateToProps, mapDispatchToProps)(Challenge2);