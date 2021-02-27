// import '../App.css';
import React, {Component} from "react";
import {connect} from 'react-redux'
import {handleInitialData} from "../actions/shared";
import Navigator from "./Navigator";
import {CssBaseline, withStyles} from "@material-ui/core";


class App extends Component {

    componentDidMount() {
        this.props.dispatch(handleInitialData())
    }

    render() {
        const {classes} = this.props
        return (
            <div className={classes.root}>
                <CssBaseline/>
                <Navigator/>
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
