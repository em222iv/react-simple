var React = require('react'),
    Link = require('react-router').Link,
    Login = require('./login');


this.divStyle = {
    left: -250
}
var Nav = React.createClass({
    render: function(){
        return (
            <div>
                <Login/>
                <nav>
                    <div className="container">
                        <div className="nav-wrapper">
                            <a href="#" className="brand-logo">Logo</a>
                            <ul id="nav-mobile" className="right hide-on-med-and-down">
                                <li><Link to="/">Home</Link></li>
                                <li><a href="sass.html">ZooOrVlakka</a></li>
                                <li><a href="collapsible.html">About</a></li>
                                <li><a className="dropdown-button" href="#" data-activates="dropdown1">Dropdown</a></li>
                            </ul>
                        </div>
                    </div>
                </nav>
            </div>
        );
    }
});

module.exports = Nav;