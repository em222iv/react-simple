import initialState from'./../initial-state';
import C from '../constants';

const GameReducer = (state, action)=> {
    const newState = Object.assign({}, state);

    switch (action.type) {
        case C.GAME_ON:
            newState.ongoing = true;
            console.log(newState.ongoing);
            return newState;
        case C.GAME_OFF:
            newState.ongoing = false;
            console.log(newState.ongoing);
            return newState;
        default:
            return state || initialState().game;
    }
};

export default GameReducer;