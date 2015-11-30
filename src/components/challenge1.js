var React = require('react'),
    ptypes = React.PropTypes,
    ReactRedux = require('react-redux'),
    actions = require('../actions'),
    auth = require('../auth'),
    Navigation = require('react-router').Navigation;

this.counter = 0;
var Challenge1 = React.createClass({
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
        var counter = 0;
        var loader = $( "#loader" );
        function incLoader() {
            if (loader[0].style.width == "100%"){

                return;
            }
            counter +=1;
            loader.css( "width", counter+'%');
            setTimeout(incLoader, 250)
        }
        setTimeout(incLoader, 100);
    },

    render: function(){
        var divStyle = {
            width: '0%',
        };
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
                    <div className="progress">
                        <div id="loader" className="determinate" style={divStyle}></div>
                    </div>
                    <h6>Clicks: {this.props.count.currentValue}</h6>
                </div>
                <div className="row center">
                    <a onClick={this.props.increase} id="download-button" className="btn-large waves-effect waves-light orange">CLICK! CLICK FOR GODS SAKES!!!</a>
                </div>
                </div>
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

module.exports = ReactRedux.connect(mapStateToProps, mapDispatchToProps)(Challenge1);