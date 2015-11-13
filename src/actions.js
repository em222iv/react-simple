module.exports = {
    login: function () {
        return {type: 'LOGIN'};
    },
    logout: function () {
        return {type: 'LOGOUT'};
    }
}