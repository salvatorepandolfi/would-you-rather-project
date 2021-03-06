import React, {Component} from "react";
import {Container, Paper, withStyles} from "@material-ui/core";
import {connect} from 'react-redux'
import Step from "../components/Step";


class LeaderBoard extends Component {

    render() {
        const {classes, users} = this.props
        return (
            <Container component="main" maxWidth="sm" className={classes.container}>
                <Paper className={classes.paper}>
                    {users.map((user, index) =>
                        (<Step user={user} position={index + 1} key={index}/>)
                    )}
                </Paper>
            </Container>
        )
    }
}

const mapStateToProps = ({users}) => {
    return {
        users: Object.values(users)
            .map((user =>
                    ({
                        ...user,
                        totalAnswers: Object.keys(user.answers).length,
                        totalQuestions: user.questions.length,
                        score: Object.keys(user.answers).length + user.questions.length
                    })
            ))
            .sort((a, b) => a.score >= b.score ? -1 : 1)
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
})

export default withStyles(useStyles)(connect(mapStateToProps)(LeaderBoard))
