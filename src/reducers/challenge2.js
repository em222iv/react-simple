var initialState = require('./../initial-state');

var Challenge2Reducer = function(state, action){
    var newState = Object.assign({}, state);
    switch(action.type){
        case 'RND_SENTENCE':
            console.log('rnd_s');
            newState.randomWord = action.wordieWord;
            return newState;
        default:
            return state || initialState().word;
    }
};

module.exports = Challenge2Reducer;