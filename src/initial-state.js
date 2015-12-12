module.exports = function(){
    return {
        login: {
            auth: false
        },
        points: {
            currentValue: 0
        },
        game: {
            ongoing: false
        },
        timer: {
            elapsed: 0
        },
        word: {
            randomWord: ""
        }
    }
};