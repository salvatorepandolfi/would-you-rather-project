import React, {Component} from "react";
import {Button, Container, Divider, Grid, Paper, TextField, Typography, withStyles} from "@material-ui/core";
import {connect} from 'react-redux'
import {showMessage} from "../actions/message";
import {handleSaveQuestion} from "../actions/questions";

class New extends Component {
    state = {
        optionOne: '',
        optionTwo: '',
        optionOneError: false,
        optionTwoError: false,
        optionOneErrorLabel: '',
        optionTwoErrorLabel: '',
    }

    saveQuestion = (e) => {
        e.preventDefault()
        const {optionOne, optionTwo} = this.state
        const {dispatch, history} = this.props
        let error = false
        let message = ''
        if (optionOne.trim() === '') {
            error = true
            message += 'Add a valid answer for the first option. '
        }
        if (optionTwo.trim() === '') {
            error = true
            message += 'Add a valid answer for the second option. '
        }
        if (error === true) {
            return dispatch(showMessage(message, 'error'))
        }
        dispatch(handleSaveQuestion({optionOneText: optionOne, optionTwoText: optionTwo}))
            .then((action) => {
                dispatch(showMessage('Question successfully added.'))
                return history.push(`/question/${action.question.id}`)
            })
            .catch(() => {
                dispatch(showMessage('Cannot save the question, please try again.', 'error'))
            })
    }

    handleAnswer = (e) => {
        e.preventDefault()
        const name = e.target.name
        const answer = e.target.value
        this.setState((state) => {
            return {
                ...state,
                [name]: answer
            }
        }, () => {
            if (answer.trim() === '') {
                return this.setState({
                    [`${name}Error`]: true,
                    [`${name}ErrorLabel`]: 'Provide an answer',
                })
            } else {
                return this.setState({
                    [`${name}Error`]: false,
                    [`${name}ErrorLabel`]: '',
                })
            }
        })

    }

    render() {
        const {classes} = this.props
        const {
            optionOne,
            optionTwo,
            optionOneError,
            optionTwoError,
            optionOneErrorLabel,
            optionTwoErrorLabel
        } = this.state
        return (
            <Container component="main" maxWidth="sm" className={classes.container}>
                <Paper className={classes.paper}>
                    <Grid container spacing={1} className={classes.container}>
                        <Grid item xs={12} className={classes.header}>
                            <Typography variant="h5">Create new question</Typography>
                        </Grid>
                        <Grid item xs={12} className={classes.textFieldContainer}>
                            <TextField
                                variant="outlined"
                                margin="normal"
                                required
                                fullWidth
                                name="optionOne"
                                type="text"
                                label="Would you rather..."
                                id="optionOne"
                                onChange={this.handleAnswer}
                                value={optionOne}
                                error={optionOneError}
                                helperText={optionOneErrorLabel}
                            />
                        </Grid>
                        <Grid item xs={12} className={classes.divider}>
                            <Divider/>
                        </Grid>
                        <Grid item xs={12} className={classes.textFieldContainer}>
                            <TextField
                                variant="outlined"
                                margin="normal"
                                required
                                fullWidth
                                name="optionTwo"
                                label="...or..."
                                type="text"
                                id="optionTwo"
                                onChange={this.handleAnswer}
                                value={optionTwo}
                                error={optionTwoError}
                                helperText={optionTwoErrorLabel}
                            />
                        </Grid>
                        <Grid item xs={12} className={classes.submitContainer}>
                            <Button
                                variant="contained"
                                onClick={this.saveQuestion}
                                disabled={optionOne.trim() === '' || optionTwo.trim() === ''}
                            >Add Question</Button>
                        </Grid>
                    </Grid>
                </Paper>
            </Container>
        )
    }
}

const useStyles = theme => ({
    container: {
        marginTop: theme.spacing(2),
    },
    paper: {
        padding: theme.spacing(2),
        marginTop: theme.spacing(2),
        paddingBottom: theme.spacing(0),
        margin: 'auto',
    },
    divider: {
        margin: '0 auto',
        padding: '0'
    },
    textFieldContainer: {
        '& label.Mui-focused': {
            color: 'white',
        },
        '& label.Mui-error': {
            color: '#f44336',
        },
        '& .MuiInput-underline:after': {
            borderBottomColor: 'white',
        },
        '& .MuiOutlinedInput-root': {
            '&.Mui-focused fieldset': {
                borderColor: 'white',
            },
            '&.Mui-error fieldset': {
                borderColor: '#f44336'
            },
        },
    },
    submitContainer: {
        textAlign: 'right',
        marginBottom: theme.spacing(2),
    }
})

const mapsStateToProps = ({authedUser}) => {
    return {
        authedUser
    }
}

export default withStyles(useStyles)(connect(mapsStateToProps)(New))
