import React, {Component} from "react";
import {Button, Card, CardContent, CardHeader, Typography, withStyles} from "@material-ui/core";
import {withRouter} from 'react-router-dom'
import {connect} from 'react-redux'
import UserAvatar from "./UserAvatar";

class QuestionSummary extends Component {

    goToPoll = (e) => {
        e.preventDefault()
        this.props.history.push(`/question/${this.props.question.id}`)
    }

    render() {
        const {classes, question} = this.props
        return (
            <Card className={classes.container}>
                <div className={classes.header}>
                    <CardHeader title={`${question.author.name} asks...`}/>
                </div>
                <Card className={classes.card}>
                    <div className={classes.question}>
                        <CardContent className={classes.content}>
                            <Typography variant="subtitle1">
                                Would you rather
                            </Typography>
                            <Typography paragraph>
                                ... {question.optionOne.text.substring(0, 15)}...
                            </Typography>
                            <Button
                                onClick={this.goToPoll}
                                variant="contained"
                                href="#contained-buttons"
                            >View Poll</Button>
                        </CardContent>
                    </div>
                    <UserAvatar
                        classes={
                            {
                                avatar: classes.user,
                                avatarColor: ''
                            }
                        }
                        user={question.author}
                    />
                </Card>
            </Card>
        )
    }
}

const useStyles = theme => ({
    container: {
        marginTop: theme.spacing(1)
    },
    card: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'stretch'
    },
    header: {
        display: 'flex',
        justifyContent: 'center'
    },
    content: {
        flex: '1 0 auto',
        width: '100%'
    },
    question: {
        display: 'flex',
        flexDirection: 'column',
    },
    user: {
        width: 100,
        height: 100,
        fontSize: "50px",
        alignSelf: 'baseline'
    }
})

const mapStateToProps = ({questions, users}, props) => {
    const {questionId} = props
    const question = questions[questionId]

    return {
        question: {
            ...question,
            author: users[question.author]
        }
    }

}

export default withRouter(withStyles(useStyles)(connect(mapStateToProps)(QuestionSummary)))
