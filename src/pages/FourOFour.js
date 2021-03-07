import React, {Component} from "react";
import {Button, Container, Grid, Paper, Typography, withStyles} from "@material-ui/core";
import {Warning} from "@material-ui/icons";
import {withRouter} from "react-router-dom";

class FourOFour extends Component {

    render() {
        const {classes, history} = this.props
        return (
            <Container component="main" maxWidth="sm" className={classes.container}>
                <Paper className={classes.paper}>
                    <Grid container spacing={1} className={classes.container}>
                        <Grid item xs={12} className={classes.header}>
                            <Typography variant="h5"><Warning className={classes.warning}/> Oops...this page doesn't
                                exist.</Typography>
                        </Grid>
                        <Grid item xs={12}>
                            <Typography variant="h6">Would you rather...</Typography>
                        </Grid>
                        <Grid item xs={12} className={classes.buttonContainer}>
                            <Button
                                contained
                                fullWidth
                                onClick={() => (history.push('/'))}
                            >Go to home page</Button>
                        </Grid>
                        <Grid item xs={12} className={classes.buttonContainer}>
                            <Button
                                contained
                                fullWidth
                                onClick={() => (history.push('/leaderBoard'))}
                            >Go to leader board</Button>
                        </Grid>
                        <Grid item xs={12} className={classes.buttonContainer}>
                            <Button
                                contained
                                fullWidth
                                onClick={() => (history.push('/add'))}
                            >Or add a new question</Button>
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
    buttonContainer: {
        marginTop: theme.spacing(2),
    },
    header: {
        textAlign: 'center',
        marginBottom: theme.spacing(2)
    },
    paper: {
        padding: theme.spacing(2),
        marginTop: theme.spacing(2),
        paddingBottom: theme.spacing(0),
        margin: 'auto',
    },
    warning: {
        color: 'yellow',
        fontSize: '35px'
    }

})
export default withRouter(withStyles(useStyles)(FourOFour))
