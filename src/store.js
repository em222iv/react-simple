var Redux = require('redux'),
    loginReducer = require('./reducers/login'),
    initialState = require('./initial-state');

var reducers = Redux.combineReducers({
    login: loginReducer
});

var store = Redux.createStore(reducers, initialState());

module.exports = store;