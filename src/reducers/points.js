import initialState from '../initial-state';

const PointsReducer = (state, action) => {
    const newState = Object.assign({}, state);

    switch (action.type) {
        case 'POINTS_INC':
            newState.currentValue += 1;
            return newState;
        case 'POINTS_ZERO':
            newState.currentValue = 0;
            return newState;
        case 'POINTS_DEC':
            if(newState.currentValue > 0) {
                newState.currentValue -=1;
            }
            return newState;

        default:
            return state || initialState().points;
    }
};

export default PointsReducer;
