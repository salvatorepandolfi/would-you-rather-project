import '../App.css';
import React, {Component} from "react";
import {connect} from 'react-redux'
import {handleInitialData} from "../actions/shared";


class App extends Component {
    componentDidMount() {
        this.props.dispatch(handleInitialData())
    }

    render() {
        return (
            <div className="App">
                <h3>Would you rather</h3>
            </div>
        )
    }
}


export default connect()(App);
