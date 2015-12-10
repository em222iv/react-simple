var React = require('react'),
    ReactRedux = require('react-redux'),
    Nav = require('./nav'),
    auth = require('../auth');

var Wrap = React.createClass({
    componentDidMount: function() {
        if (!auth.loggedIn() || !this.props.game.ongoing) {
            this.props.history.pushState(null, '/');
        }
    },
    render: function(){
        return (
            <div>
                <Nav/>
                {this.props.children}
            </div>
        );
    }
});

var mapStateToProps = function(state){
    return {
        game: state.game,
        auth: state.login.auth,
    };
};

var mapDispatchToProps = function(){
    return {

    }
};


module.exports = ReactRedux.connect(mapStateToProps, mapDispatchToProps)(Wrap);