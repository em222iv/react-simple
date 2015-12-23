import  initialState from './../initial-state';

const LoginReducer = function(state, action){
    const newState = Object.assign({}, state);

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

export default LoginReducer;