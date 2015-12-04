var React = require('react'),
    Nav = require('./nav');

var Wrap = React.createClass({
    render: function(){
        return (
            <div>
                <Nav/>
                {this.props.children}
            </div>
        );
    }
});

module.exports = Wrap;