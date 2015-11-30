var auth = require('./auth');
module.exports = {
    login: function (user, dispatch) {
        auth.login(user.username, user.password, (loggedIn) => {
            if(loggedIn)
                dispatch({type: 'LOGIN'});
        });
    },
    logout: function () {
        auth.logout();
        return {type: 'LOGOUT'};
    },
    token: function () {
        return {type: 'LOGIN'};
    },
    countIncrease: function(){
        return {type: 'COUNT_INC'};
    },
    countDecrease: function(){
        return {type: 'COUNT_DEC'};
    },
    gameOngoing: function(){
        return {type: 'GAME_ON'};
    }
};


