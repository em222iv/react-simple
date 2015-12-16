var initialState = require('./../initial-state');

var HomeReducer = function(state, action){
    var newState = Object.assign({}, state);
    switch(action.type){
        case 'GAME_ON':
            newState.ongoing = true;
            return newState;
        default:
            return state || initialState().game;
    }
};

module.exports = HomeReducer;