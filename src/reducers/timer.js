import initialState from './../initial-state';
import actions from './../actions'
import C from '../constants';

const TimerReducer = (state, action)=> {
    const newState = Object.assign({}, state);

    switch (action.type) {
        case C.TIME_INC1:
            newState.elapsed += 1;
            return newState;
        case C.TIME_DEC1:
            newState.elapsed -= 1;
            return newState;
        case C.TIME_INC10:
            newState.elapsed += 10;
            return newState;
        case C.TIME_DEC10:
            newState.elapsed -= 10;
            return newState;
        case C.SET_TIME:
            newState.elapsed = parseInt(action.timer);
            return newState;
        case C.STOP_TIME:
            //newState.elapsed += 0;
            return newState;
        default:
            return state || initialState().timer;
    }
};

export default TimerReducer;