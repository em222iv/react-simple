var Redux = require('redux'),
    loginReducer = require('./reducers/login'),
    homeReducer = require('./reducers/home'),
    challenge1Reducer = require('./reducers/challenge1'),
    initialState = require('./initial-state');

var reducers = Redux.combineReducers({
    login: loginReducer,
    count: challenge1Reducer,
    game: homeReducer
});

var store = Redux.createStore(reducers, initialState());

module.exports = store;