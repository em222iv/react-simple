import  initialState from './../initial-state';
import C from '../constants';

const LoginReducer = (state, action)=> {
    const newState = Object.assign({}, state);

    switch (action.type) {
        case C.LOGIN:
            newState.auth = action.user;
            return newState;
        case C.LOGOUT:
            newState.auth = null;
            return newState;
        case C.REGISTER:
            newState.users = [...state.users, action.credentials];
            return newState;
        default:
            return state || initialState().login;
    }
};

export default LoginReducer;