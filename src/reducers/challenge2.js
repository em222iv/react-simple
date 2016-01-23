import initialState from './../initial-state';
import C from '../constants';

const Challenge2Reducer = (state, action)=> {
    const newState = Object.assign({}, state);
    switch (action.type) {
        case C.RND_SENTENCE:
            console.log('rnd_s');
            newState.randomWord = action.wordieWord;
            return newState;
        default:
            return state || initialState().word;
    }
};

export default Challenge2Reducer;