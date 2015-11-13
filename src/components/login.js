var React = require('react'),
    ptypes = React.PropTypes,
    ReactRedux = require('react-redux'),
    actions = require('../actions');
this.divStyle = {
    width:200
}
var Login = React.createClass({
    propTypes: {
        login: ptypes.func.isRequired
    },
    handleClick: function() {
        //bryt ut pisset hit
    },
    render: function(){
        return (
            <ul id="dropdown1" style={this.divStyle} className="dropdown-content">
                <li><a href="#">sumtin'</a></li>
                <li><a href="#">sumtin'moore</a></li>
                <li className="divider"></li>
                <li className="noCollaplse">
                {(this.props.auth
                        ?  <div></div>
                        :  <li className="noCollaplse"><input id="username" type="text" placeholder="admin" className="validate"/></li>
                )}
                </li>
                <li className="noCollaplse">
                    {(this.props.auth
                            ?  <div></div>
                            :  <li className="noCollaplse"><input id="password" type="password" placeholder="password" className="validate"/></li>
                    )}
                </li>
                <li>
                    {(this.props.auth
                            ?  <a href="#" onClick={this.props.login}>logout</a>
                            :  <a href="#" onClick={this.props.login}>login</a>

                    )}
                </li>

            </ul>


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

module.exports = ReactRedux.connect(mapStateToProps, mapDispatchToProps)(Login);