import initialState from '../initial-state';
import C from '../constants';

const PointsReducer = (state, action) => {
    const newState = Object.assign({}, state);

    switch (action.type) {
        case C.POINTS_INC:
            newState.currentValue += 1;
            return newState;
        case C.POINTS_ZERO:
            newState.currentValue = 0;
            return newState;
        case C.POINTS_DEC:
            if(newState.currentValue > 0) {
                newState.currentValue -=1;
            }
            return newState;

        default:
            return state || initialState().points;
    }
};

export default PointsReducer;
