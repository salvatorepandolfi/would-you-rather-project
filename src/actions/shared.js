import {getInitialData} from "../utils/api";
import {receiveUsers} from "./users";
import {receiveQuestions} from "./questions";
import {logout} from "./authedUser";

export function handleInitialData() {
    return (dispatch) => {
        return getInitialData()
            .then(({users, questions}) => {
                dispatch(receiveUsers(users))
                dispatch(receiveQuestions(questions))
                //this could be useless, considering the initial state set the user to null by default
                dispatch(logout())
            })
    }
}
