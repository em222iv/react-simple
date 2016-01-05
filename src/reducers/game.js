import initialState from'./../initial-state';

const GameReducer = function(state, action){
    const newState = Object.assign({}, state);

    switch(action.type){
        case 'GAME_ON':
            newState.ongoing = true;
            console.log(newState.ongoing);
            return newState;
        case 'GAME_OFF':
            newState.ongoing = false;
            console.log(newState.ongoing);
            return newState;
        default:
            return state || initialState().game;
    }
};

export default GameReducer;