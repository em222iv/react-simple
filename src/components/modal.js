var React = require('react');

var Modal = React.createClass({
    componentWillMount: function(){

        $('#modal').leanModal({
                dismissible: false, // Modal can be dismissed by clicking outside of the modal
                opacity: .5, // Opacity of modal background
                in_duration: 300, // Transition in duration
                out_duration: 200, // Transition out duration
            }
        );
    },
    render: function(){
        return (
            <div id="modal" className="modal">
                <div className="modal-content">
                    <h4>Grrrreeat!</h4>
                    <p>Stay alert, a new challenge is arising</p>
                </div>
                <div className="modal-footer">
                    *Maybe Countdown*
                </div>
            </div>
        );
    }
});

module.exports = Modal;