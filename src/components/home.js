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
            <div>
                {(this.props.auth
                        ?  <div><h2>Hello World!</h2><p>yeeer logg'd ajn majt!</p></div>
                        : <div>Not logged in</div>
                )}
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
