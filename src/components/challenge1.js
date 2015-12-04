var React = require('react'),
    ptypes = React.PropTypes,
    ReactRedux = require('react-redux'),
    actions = require('../actions'),
    auth = require('../auth'),
    Navigation = require('react-router').Navigation,
    Link = require('react-router').Link,
    Modal = require('./modal');

var counter = 0;
var loader;
var Challenge1 = React.createClass({
    mixins: [Navigation],
    propTypes: {
        increase: ptypes.func.isRequired
    },
    componentWillMount: function () {
        if (!auth.loggedIn() || !this.props.game.ongoing) {
            this.props.history.pushState(null, '/');
        }
    },
    componentDidMount: function () {
        counter = 0;
        loader = $("#loader");
        setTimeout(this.inc, 100);
    },
    inc: function () {
        var cont = true;
        if (loader[0].style.width == "10%" && cont == true) {
            cont = false;
        }
        if (cont == false) {
            openModal();
            setTimeout(this.challenge2, 3000)
            return;
        }
        counter += 1;
        loader.css("width", counter + '%');
        setTimeout(this.inc, 250)
    },
    challenge2: function() {
        this.props.history.pushState(null, '/C2');
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

function openModal() {
    $('#modal').openModal({
        dismissible: false
    });
}
module.exports = ReactRedux.connect(mapStateToProps, mapDispatchToProps)(Challenge1);