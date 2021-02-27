// import '../App.css';
import React, {Component} from "react";
import {connect} from 'react-redux'
import {handleInitialData} from "../actions/shared";
import Navigator from "./Navigator";
import Router from "./Router";
import {CssBaseline, withStyles} from "@material-ui/core";
import {BrowserRouter} from "react-router-dom";
import Snackbar from "./Snackbar";


class App extends Component {

    componentDidMount() {
        this.props.dispatch(handleInitialData())
    }

    render() {
        const {classes} = this.props
        return (
            <div className={classes.root}>
                <CssBaseline/>
                <BrowserRouter>
                    <Navigator/>
                    <Router/>
                    <Snackbar/>
                </BrowserRouter>
            </div>
        )
    }
}

const useStyles = theme => ({
    root: {
        display: 'flex',
    }
})

export default withStyles(useStyles)(connect()(App));
