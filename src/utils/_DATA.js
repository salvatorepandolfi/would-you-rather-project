let users = {
    sarahedo: {
        id: 'sarahedo',
        name: 'Sarah Edo',
        avatarURL: 'data:image/jpeg;base64,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',
        answers: {
            "8xf0y6ziyjabvozdd253nd": 'optionOne',
            "6ni6ok3ym7mf1p33lnez": 'optionTwo',
            "am8ehyc8byjqgar0jgpub9": 'optionTwo',
            "loxhs1bqm25b708cmbf3g": 'optionTwo'
        },
        questions: ['8xf0y6ziyjabvozdd253nd', 'am8ehyc8byjqgar0jgpub9']
    },
    tylermcginnis: {
        id: 'tylermcginnis',
        name: 'Tyler McGinnis',
        avatarURL: '',
        answers: {
            "vthrdm985a262al8qx3do": 'optionOne',
            "xj352vofupe1dqz9emx13r": 'optionTwo',
        },
        questions: ['loxhs1bqm25b708cmbf3g', 'vthrdm985a262al8qx3do'],
    },
    johndoe: {
        id: 'johndoe',
        name: 'John Doe',
        avatarURL: 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
        answers: {
            "xj352vofupe1dqz9emx13r": 'optionOne',
            "vthrdm985a262al8qx3do": 'optionTwo',
            "6ni6ok3ym7mf1p33lnez": 'optionTwo'
        },
        questions: ['6ni6ok3ym7mf1p33lnez', 'xj352vofupe1dqz9emx13r'],
    }
}

let questions = {
    "8xf0y6ziyjabvozdd253nd": {
        id: '8xf0y6ziyjabvozdd253nd',
        author: 'sarahedo',
        timestamp: 1467166872634,
        optionOne: {
            votes: ['sarahedo'],
            text: 'have horrible short term memory',
        },
        optionTwo: {
            votes: [],
            text: 'have horrible long term memory'
        }
    },
    "6ni6ok3ym7mf1p33lnez": {
        id: '6ni6ok3ym7mf1p33lnez',
        author: 'johndoe',
        timestamp: 1468479767190,
        optionOne: {
            votes: [],
            text: 'become a superhero',
        },
        optionTwo: {
            votes: ['johndoe', 'sarahedo'],
            text: 'become a supervillain'
        }
    },
    "am8ehyc8byjqgar0jgpub9": {
        id: 'am8ehyc8byjqgar0jgpub9',
        author: 'sarahedo',
        timestamp: 1488579767190,
        optionOne: {
            votes: [],
            text: 'be telekinetic',
        },
        optionTwo: {
            votes: ['sarahedo'],
            text: 'be telepathic'
        }
    },
    "loxhs1bqm25b708cmbf3g": {
        id: 'loxhs1bqm25b708cmbf3g',
        author: 'tylermcginnis',
        timestamp: 1482579767190,
        optionOne: {
            votes: [],
            text: 'be a front-end developer',
        },
        optionTwo: {
            votes: ['sarahedo'],
            text: 'be a back-end developer'
        }
    },
    "vthrdm985a262al8qx3do": {
        id: 'vthrdm985a262al8qx3do',
        author: 'tylermcginnis',
        timestamp: 1489579767190,
        optionOne: {
            votes: ['tylermcginnis'],
            text: 'find $50 yourself',
        },
        optionTwo: {
            votes: ['johndoe'],
            text: 'have your best friend find $500'
        }
    },
    "xj352vofupe1dqz9emx13r": {
        id: 'xj352vofupe1dqz9emx13r',
        author: 'johndoe',
        timestamp: 1493579767190,
        optionOne: {
            votes: ['johndoe'],
            text: 'write JavaScript',
        },
        optionTwo: {
            votes: ['tylermcginnis'],
            text: 'write Swift'
        }
    },
}

function generateUID() {
    return Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15)
}

export function _getUsers() {
    return new Promise((res, rej) => {
        setTimeout(() => res({...users}), 1000)
    })
}

export function _getQuestions() {
    return new Promise((res, rej) => {
        setTimeout(() => res({...questions}), 1000)
    })
}

function formatQuestion({optionOneText, optionTwoText, author}) {
    return {
        id: generateUID(),
        timestamp: Date.now(),
        author,
        optionOne: {
            votes: [],
            text: optionOneText,
        },
        optionTwo: {
            votes: [],
            text: optionTwoText,
        }
    }
}

export function _saveQuestion(question) {
    return new Promise((res, rej) => {
        const authedUser = question.author;
        const formattedQuestion = formatQuestion(question);

        setTimeout(() => {
            questions = {
                ...questions,
                [formattedQuestion.id]: formattedQuestion
            }

            users = {
                ...users,
                [authedUser]: {
                    ...users[authedUser],
                    questions: users[authedUser].questions.concat([formattedQuestion.id])
                }
            }

            res(formattedQuestion)
        }, 1000)
    })
}

export function _saveQuestionAnswer({authedUser, qid, answer}) {
    return new Promise((res, rej) => {
        setTimeout(() => {
            users = {
                ...users,
                [authedUser]: {
                    ...users[authedUser],
                    answers: {
                        ...users[authedUser].answers,
                        [qid]: answer
                    }
                }
            }

            questions = {
                ...questions,
                [qid]: {
                    ...questions[qid],
                    [answer]: {
                        ...questions[qid][answer],
                        votes: questions[qid][answer].votes.concat([authedUser])
                    }
                }
            }

            res()
        }, 500)
    })
}
