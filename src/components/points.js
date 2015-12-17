import { connect } from'react-redux';
import { Navigation } from 'react-router';
import React, { PropTypes, Component } from 'react';
import ReactMixin from 'react-mixin';

import actions from '../actions';

class Points extends Component {
    render() {
        return (
            <div className="row left center">
                <h6>Points: {this.props.points.currentValue}</h6>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        points: state.points
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        increase: () => {
            dispatch(actions.pointsIncrease());
        }
    };
};

Points.propTypes = {
    points: PropTypes.object.isRequired,
    increase: PropTypes.func.isRequired
};

ReactMixin.onClass(Points, Navigation);

export default connect(mapStateToProps, mapDispatchToProps)(Points);
