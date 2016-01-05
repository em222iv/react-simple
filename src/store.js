import { combineReducers, createStore } from 'redux';

import challenge2Reducer from './reducers/challenge2';
import loginReducer from './reducers/login';
import homeReducer from './reducers/game';
import timerReducer from './reducers/timer';
import pointsReducer from './reducers/points';
import initialState from './initial-state';

const reducers = combineReducers({
    login: loginReducer,
    word: challenge2Reducer,
    points: pointsReducer,
    timer: timerReducer,
    game: homeReducer
});

const store = createStore(reducers, initialState());

export default store;
