var Redux = require('redux'),
    loginReducer = require('./reducers/login'),
    homeReducer = require('./reducers/home'),
    challenge1Reducer = require('./reducers/challenge1'),
    challenge2Reducer = require('./reducers/challenge2'),
    initialState = require('./initial-state');

var reducers = Redux.combineReducers({
    login: loginReducer,
    count: challenge1Reducer,
    count: challenge2Reducer,
    game: homeReducer
});

var store = Redux.createStore(reducers, initialState());

module.exports = store;