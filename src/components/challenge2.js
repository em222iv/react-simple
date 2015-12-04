var React = require('react'),
    ptypes = React.PropTypes,
    ReactRedux = require('react-redux'),
    actions = require('../actions'),
    auth = require('../auth'),
    Navigation = require('react-router').Navigation,
    Modal = require('./modal'),
    Timer = require('./timer');

var Challenge2 = React.createClass({
    word: "",
    mixins: [Navigation],
    propTypes: {
        decrease: ptypes.func.isRequired,
        getWord: ptypes.func.isRequired
    },
    componentWillMount: function() {
        if(!auth.loggedIn() || !this.props.game.ongoing){
            this.props.history.pushState(null, '/');
        }
        this.props.points.currentValue = 500;
    },
    componentDidMount: function() {
        this.props.getWord();
    },

    handleChange: function(event) {
        this.props.decrease();
        var a = this.props.worda.randomWord;
        var b = event.target.value;
        if(a == b){
            openModal();
        }
        var equivalency = 0;
        var minLength = (a.length > b.length) ? b.length : a.length;
        var maxLength = (a.length < b.length) ? b.length : a.length;
        for(var i = 0; i < minLength; i++) {
            if(a[i] == b[i]) {
                equivalency++;
            }
        }

        var weight = equivalency / maxLength;
        var loader = $("#loader");
        loader.css("width", (weight * 100) + "%");
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
                                ?   <h1 className="header center orange-text">TYPE TYPE TYPE</h1>
                                :   <h1 className="header center orange-text">Login and start new Game!</h1>
                        )}
                    </div>
                    <div className="row center">
                        <div className="progress">
                            <div id="loader" className="determinate" style={divStyle}></div>
                        </div>
                        <div className="row left center">
                            <p>Points: {this.props.points.currentValue}</p>
                        </div>
                        <Timer />
                    </div>
                    <div className="row">
                        <div className="col s12 m12">
                            <div className="card blue-grey darken-1">
                                <div className="card-content white-text">
                                    <form className="col s12">
                                        <div className="row">
                                            <div className="input-field col s12">
                                                <textarea onChange={this.handleChange} id="textarea1" className="materialize-textarea"></textarea>
                                                <label htmlFor="textarea1">Type here!</label>
                                            </div>
                                        </div>
                                    </form>
                                </div>
                                <div className="card-action">
                                    <div className="noselect" id="lorem">{this.props.worda.randomWord}</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <Modal />
            </div>

        );
    }
});
function openModal() {
    $('#modal').openModal({
        dismissible: false
    });
}

var mapStateToProps = function(state){
    return {
        points: state.points,
        game: state.game,
        worda: state.word,
        auth: state.login.auth
    };
};

var mapDispatchToProps = function(dispatch){
    return {
        decrease: function(){
            dispatch(actions.pointsDecrease());
        },
        getWord: function(){
            dispatch(actions.getRndString());
        }
    }
};

module.exports = ReactRedux.connect(mapStateToProps, mapDispatchToProps)(Challenge2);