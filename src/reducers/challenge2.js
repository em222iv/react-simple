import initialState from './../initial-state';

const Challenge2Reducer = function(state, action){
    const newState = Object.assign({}, state);
    switch(action.type){
        case 'RND_SENTENCE':
            console.log('rnd_s');
            newState.randomWord = action.wordieWord;
            return newState;
        default:
            return state || initialState().word;
    }
};

export default Challenge2Reducer;