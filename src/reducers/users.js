import {RECEIVE_USERS} from "../actions/users";
import {ANSWER_QUESTION} from '../actions/questions'

export default function users(state = [], action) {
    switch (action.type) {
        case RECEIVE_USERS:
            return {
                ...state,
                ...action.users
            }
        case ANSWER_QUESTION:
            const {question_id, authedUser, answer} = action
            return {
                ...state,
                [authedUser]: {
                    ...state[authedUser],
                    'answers': {
                        ...state[authedUser].answers,
                        [question_id]: answer,
                    }
                }
            }
        default:
            return state;
    }
}
