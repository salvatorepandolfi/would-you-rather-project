import {RECEIVE_QUESTIONS, ANSWER_QUESTION, SAVE_QUESTION} from "../actions/questions";

export default function questions(state = {}, action) {
    switch (action.type) {
        case RECEIVE_QUESTIONS:
            return {
                ...state,
                ...action.questions
            }
        case ANSWER_QUESTION:
            const {authed_user, question_id, answer} = action
            return {
                ...state,
                [question_id]: {
                    ...state[question_id],
                    [answer]: {
                        ...state[question_id][answer],
                        votes: state[question_id][answer].votes.concat([authed_user])
                    }
                }
            }
        case SAVE_QUESTION:
            const {question} = action
            return {
                ...state,
                [question.id]: question
            }
        default:
            return state
    }
}
