var React = require('react'),
    ptypes = React.PropTypes,
    ReactRedux = require('react-redux'),
    actions = require('../actions');

var Home = React.createClass({
    propTypes: {
        login: ptypes.func.isRequired
    },
    render: function(){
        return (
            <div className="section no-pad-bot" id="index-banner">
                <div className="container">
                    <div>
                        {(this.props.auth
                                ?   <h1 className="header center orange-text">Hello!</h1>
                                :   <h1 className="header center orange-text">Login!</h1>
                        )}
                    </div>
                    <div className="row center">
                        <h5 className="header col s12 light">Who solves it the fastest? Try your luck!</h5>
                    </div>
                    <div className="row center">
                        <a Link to="/typing" id="download-button" className="btn-large waves-effect waves-light orange">START GAME</a>
                    </div>
                </div>
            </div>

        );
    }
});

var mapStateToProps = function(state){
    return state.login;
};

var mapDispatchToProps = function(dispatch){
    return {
        login: function(){
            dispatch(actions.login());
        },

    }
};

module.exports = ReactRedux.connect(mapStateToProps, mapDispatchToProps)(Home);
