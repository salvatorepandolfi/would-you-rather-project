import {saveQuestion, saveQuestionAnswer} from "../utils/api";
import {showMessage} from "./message";

export const RECEIVE_QUESTIONS = 'RECEIVE_QUESTIONS'
export const ANSWER_QUESTION = 'ANSWER_QUESTION'
export const SAVE_QUESTION = 'SAVE_QUESTION'

export function receiveQuestions(questions) {
    return {
        type: RECEIVE_QUESTIONS,
        questions
    }

}

function answerQuestion({question_id, answer, authedUser}) {
    return {
        type: ANSWER_QUESTION,
        question_id,
        answer,
        authedUser
    }
}

function addQuestion(question) {
    return {
        type: SAVE_QUESTION,
        question
    }
}

export function handleSubmitAnswer(question_id, answer) {
    return (dispatch, getState) => {
        const {authedUser} = getState()
        return saveQuestionAnswer({authedUser, qid: question_id, answer})
            .then(() => {
                dispatch(answerQuestion({authedUser, question_id, answer}))
            })
            .catch(() => {
                dispatch(showMessage('Error saving answer, please try again', 'error'))
            })
    }
}

export function handleSaveQuestion(question) {
    return (dispatch, getState) => {
        const {authedUser} = getState()
        return saveQuestion({...question, author: authedUser})
            .then((question) => {
                return dispatch(addQuestion(question))
            })
    }

}
