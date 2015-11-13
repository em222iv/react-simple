var initialState = require('./../initial-state');

var LoginReducer = function(state, action){
    var newState = Object.assign({}, state);
    switch(newState.auth){
        case false:
            newState.auth = true;
            console.log("state1");
            return newState;
        case true:
            newState.auth = false;
            console.log("state2");
            return newState;
        default:
            return state || initialState().login;
    }
};

module.exports = LoginReducer;