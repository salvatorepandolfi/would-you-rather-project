import React, {Component} from "react";
import {connect} from 'react-redux'
import {
    Button,
    FormControl,
    FormControlLabel,
    Grid,
    Radio,
    RadioGroup,
    Typography,
    withStyles
} from "@material-ui/core";
import UserAvatar from "./UserAvatar";
import {showMessage} from "../actions/message";
import {handleSubmitAnswer} from "../actions/questions";

class UnansweredQuestion extends Component {
    state = {
        answer: 0
    }

    changeAnswer = (e) => {
        e.preventDefault()
        this.setState({
            answer: e.target.value
        })
    }
    submitAnswer = (e) => {
        e.preventDefault()
        const {answer} = this.state
        const {dispatch, question} = this.props
        if (answer === 0) {
            return dispatch(showMessage('Please select an answer', 'error'))
        }
        return dispatch(handleSubmitAnswer(question.id, answer))

    }

    render() {
        const {classes, question} = this.props
        const {answer} = this.state
        return (
            <Grid container spacing={2}>
                <Grid item xs={12} className={classes.header}>
                    <Typography variant="h5">{`${question.author.name} asks`}</Typography>
                </Grid>
                <Grid item xs={8}>
                    <Grid container>
                        <Grid item xs={12}>
                            <Typography variant="h4">{`Would you rather ...`}</Typography>
                        </Grid>
                        <Grid item xs={12}>
                            <FormControl component="fieldset">
                                <RadioGroup name="answer" value={answer} onChange={this.changeAnswer}>
                                    <FormControlLabel value="optionOne" control={<Radio/>}
                                                      label={question.optionOne.text}/>
                                    <FormControlLabel value="optionTwo" control={<Radio/>}
                                                      label={question.optionTwo.text}/>
                                </RadioGroup>
                            </FormControl>
                        </Grid>
                        <Grid item xs={12} className={classes.answerButtonContainer}>
                            <Button
                                variant="contained"
                                fullWidth
                                // disabled={answer === undefined}
                                onClick={this.submitAnswer}
                            >Answer</Button>
                        </Grid>
                    </Grid>
                </Grid>
                <Grid item xs={4} className={classes.avatarContainer}>
                    <UserAvatar
                        user={question.author}
                        classes={
                            {
                                avatar: classes.user,
                                avatarColor: ''
                            }
                        }
                    />
                </Grid>
            </Grid>
        )
    }
}

const mapStateToProps = ({authedUser, users}) => {
    return {
        user: users[authedUser]
    }
}

const useStyles = theme => ({
    header: {
        textAlign: 'center'
    },
    avatarContainer: {
        textAlign: 'center'
    },
    user: {
        width: 150,
        height: 150,
        fontSize: "75px",
        alignSelf: 'baseline'
    },
    answerButtonContainer: {
        marginTop: theme.spacing(2),
        textAlign: 'center'
    }
})

export default withStyles(useStyles)(connect(mapStateToProps)(UnansweredQuestion))

