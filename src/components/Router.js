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
                            <Route path='/login' component={Login}/>
                            <Route path='/add' exact>
                                {!authedUser
                                    ? (<Redirect to='/login'/>)
                                    : (<New/>)
                                }
                            </Route>
                            <Route path='/question/:question_id' exact>
                                {!authedUser
                                    ? (<Redirect to='/login'/>)
                                    : (<Question/>)
                                }
                            </Route>
                            <Route path='/new' exact>
                                {!authedUser
                                    ? (<Redirect to='/login'/>)
                                    : (<New/>)
                                }
                            </Route>
                            <Route path='/leaderBoard' exact>
                                {!authedUser
                                    ? (<Redirect to='/login'/>)
                                    : (<LeaderBoard/>)
                                }
                            </Route>
                            <Route path='/404' exact>
                                {!authedUser
                                    ? (<Redirect to='/login'/>)
                                    : (<FourOFour/>)
                                }
                            </Route>
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
