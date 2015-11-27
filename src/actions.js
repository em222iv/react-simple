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
};


implem