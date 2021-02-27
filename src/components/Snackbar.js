import React, {Component} from "react";
import {connect} from "react-redux";
import {Snackbar} from '@material-ui/core'
import {Alert} from '@material-ui/lab'
import {hideMessage} from "../actions/message";

class Notification extends Component {
    handleClose = () => {
        this.props.dispatch(hideMessage())
    }

    render() {
        const {message} = this.props;
        return (
            <Snackbar open={message.open} autoHideDuration={3000} onClose={this.handleClose}>
                <Alert onClose={this.handleClose} severity={message.severity}>
                    {message.text}
                </Alert>
            </Snackbar>
        )
    }
}

const mapStateToProps = ({message}) => {
    return {message}
}

export default connect(mapStateToProps)(Notification)
