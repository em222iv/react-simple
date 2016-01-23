import initialState from'./../initial-state';

const CurrChallangeReducer = (state, action)=> {
    const newState = Object.assign({}, state);

    switch (action.type) {
        case 'C0':
            newState.challenge = 0;
            return newState;
        case 'C1':
            newState.challenge = 1;
            return newState;
        case 'C2':
            newState.challenge = 2;
            return newState;
        default:
            return state || initialState().game;
    }
};

export default CurrChallangeReducer;