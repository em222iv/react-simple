var Redux = require('redux'),
    loginReducer = require('./reducers/login'),
    homeReducer = require('./reducers/home'),
    challenge1Reducer = require('./reducers/challenge1'),
    challenge2Reducer = require('./reducers/challenge2'),
    timerReducer = require('./reducers/timer'),
    pointsReducer = require('./reducers/points'),
    initialState = require('./initial-state');

var reducers = Redux.combineReducers({
    login: loginReducer,
    points: challenge1Reducer,
    word: challenge2Reducer,
    points: pointsReducer,
    timer: timerReducer,
    game: homeReducer
});

var store = Redux.createStore(reducers, initialState());

module.exports = store;