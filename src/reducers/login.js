var initialState = require('./../initial-state');

var LoginReducer = function(state, action){
    var newState = Object.assign({}, state);
    switch(action.type){
        case 'LOGIN':
            newState.auth = true;
            return newState;
        case 'LOGOUT':
            newState.auth = false;
            return newState;
        default:
            return state || initialState().login;
    }
};

module.exports = LoginReducer;