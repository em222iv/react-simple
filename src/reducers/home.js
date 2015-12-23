import initialState from'./../initial-state';

const HomeReducer = function(state, action){
    const newState = Object.assign({}, state);

    switch(action.type){
        case 'GAME_ON':
            newState.ongoing = true;
            return newState;
        default:
            return state || initialState().game;
    }
};

export default HomeReducer;