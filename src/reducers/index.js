import {combineReducers} from "redux";
import authedUser from "./authedUser";
import users from "./users";
import questions from "./questions";
import message from "./message";

export default combineReducers({
    authedUser,
    users,
    questions,
    message
})
