import React, {Component} from "react";
import {connect} from 'react-redux'
import FourOFour from "./FourOFour";
import AnsweredQuestion from "../components/AnsweredQuestion";
import UnansweredQuestion from "../components/UnansweredQuestion";
import {Container, Paper, withStyles} from "@material-ui/core";

class Question extends Component {

    render() {
        const {question, classes} = this.props
        return (
            <Container component="main" maxWidth="sm" className={classes.questionContainer}>
                <Paper className={classes.paper} elevation={2}>
                    {!question
                        ? <FourOFour/>
                        : question.userAnswer
                            ? <AnsweredQuestion question={question}/>
                            : <UnansweredQuestion question={question}/>
                    }
                </Paper>
            </Container>
        )
    }
}

const mapStateToProps = ({questions, users, authedUser}, {match}) => {
    const {question_id} = match.params
    const question = questions[question_id]
    return {
        authedUser,
        question: question ? {
            ...question,
            userAnswer: users[authedUser].answers[question_id],
            totalAnswers: question.optionOne.votes.length + question.optionTwo.votes.length,
            author: users[question.author]
        } : undefined
    }
}
const useStyles = theme => ({
    questionContainer: {
        marginTop: theme.spacing(2),
    },
    paper: {
        padding: theme.spacing(2),
        marginTop: theme.spacing(2),
        margin: 'auto',
    },
})

export default withStyles(useStyles)(connect(mapStateToProps)(Question))
