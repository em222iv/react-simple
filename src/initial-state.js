export default ()=>{
    return {
        login: {
            users: [
                {username: 'test', password: 'pass'}
            ],
            auth: null
        },
        points: {
            currentValue: 0
        },
        game: {
            ongoing: false
        },
        currChallenge: {
            challenge: 0
        },
        timer: {
            elapsed: 0
        },
        word: {
            randomWord: ""
        }
    }
};
