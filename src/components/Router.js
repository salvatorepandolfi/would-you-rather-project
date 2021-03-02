import React, {Component, Fragment} from "react";
import {Route, Redirect} from "react-router-dom";
import {withStyles} from "@material-ui/core";
import {connect} from 'react-redux'
import Login from "../pages/Login";
import Home from "../pages/Home";
import New from "../pages/New";
import Question from "../pages/Question";
import LeaderBoard from "../pages/LeaderBoard";
import FourOFour from "../pages/FourOFour";

class Router extends Component {
    //TODO add logout functionality
    render() {
        const {classes, authedUser} = this.props
        return (
            <main className={classes.content}>
                <div className={classes.appBarSpacer}/>


                {!authedUser
                    ? (<Route path='/' component={Login}/>)
                    : (
                        <Fragment>
                            <Route path='/' exact component={Home}/>
                            <Route path='/login'>
                                <Redirect to='/'/>
                            </Route>
                            <Route path='/add' component={New}/>
                            <Route path='/question/:question_id' component={Question}/>
                            <Route path='/leaderBoard' component={LeaderBoard}/>
                            <Route path='/404' component={FourOFour}/>
                        </Fragment>
                    )
                }
            </main>
        )
    }
}

const useStyles = theme => ({
    appBarSpacer: theme.mixins.toolbar,
    content: {
        flexGrow: 1,
        height: '100vh',
        overflow: 'auto',
    },

    container: {
        paddingTop: theme.spacing(4),
        paddingBottom: theme.spacing(4),
    },
    paper: {
        padding: theme.spacing(2),
        display: 'flex',
        overflow: 'auto',
        flexDirection: 'column',
    },
    fixedHeight: {
        height: 240,
    },
})

function mapStateToProps({authedUser}) {
    return {
        authedUser
    }
}

export default withStyles(useStyles)(connect(mapStateToProps)(Router))
