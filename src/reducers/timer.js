var initialState = require('./../initial-state');
var actions = require('./../actions');

var TimerReducer = function(state, action){
    var newState = Object.assign({}, state);
    switch(action.type){
        case 'TIME_INC1':
            newState.elapsed += 1;
            return newState;
        case 'TIME_DEC1':
            newState.elapsed -= 1;
            return newState;
        case 'TIME_INC10':
            newState.elapsed += 10;
            return newState;
        case 'TIME_DEC10':
            newState.elapsed -= 10;
            return newState;
        case 'SET_TIME':
            newState.elapsed = parseInt(action.timer);
            return newState;
        default:
            return state || initialState().timer;
    }
};

module.exports = TimerReducer;