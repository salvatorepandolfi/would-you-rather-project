import React, {Component} from "react";
import {
    withStyles,
    Avatar,
    Container,
    Grid,
    InputLabel,
    MenuItem,
    Select,
    Typography,
    Card,
    Button
} from "@material-ui/core";
import {connect} from 'react-redux'
import {LockOutlined} from "@material-ui/icons";
import {showMessage} from "../actions/message";
import {loginUser} from "../actions/authedUser";


class Login extends Component {

    state = {
        selectedUser: ''
    }

    handleChange = (e) => {
        e.preventDefault()
        this.setState({
            selectedUser: e.target.value
        })
    }

    handleSubmit = (e) => {
        e.preventDefault()
        const {dispatch} = this.props;
        if (this.state.selectedUser === '') {
            dispatch(showMessage('Please select an user to login', 'error'))
        } else {
            dispatch(showMessage(`Wellcome back`))
            dispatch(loginUser(this.state.selectedUser))
        }
    }


    render() {
        const {classes, users} = this.props
        const {selectedUser} = this.state
        return (
            <Container component="main" maxWidth='xs'>
                <Card className={classes.card} variant='outlined'>
                    <Avatar className={classes.avatar}>
                        <LockOutlined/>
                    </Avatar>
                    <Typography component="h1" variant="h5">
                        Would you... Login?
                    </Typography>
                    <form className={classes.form} onSubmit={this.handleSubmit}>
                        <Grid container spacing={2} justify="center">
                            <Grid item xs={12}>
                                <InputLabel id="userInput">Select an User to login</InputLabel>
                                <Select
                                    className={classes.userDropDown}
                                    variant='outlined'
                                    labelId="userInput"
                                    value={selectedUser}
                                    onChange={this.handleChange}
                                    placeholder="Select User..."
                                >
                                    {
                                        users.map((user) => (
                                            <MenuItem key={user.id} value={user.id}>{user.name}</MenuItem>
                                        ))
                                    }
                                </Select>
                            </Grid>
                        </Grid>
                        <Grid container justify="flex-end">
                            <Button
                                type='submit'
                                variant='contained'
                                color='primary'
                                className={classes.submit}
                            >
                                Login
                            </Button>
                        </Grid>
                    </form>
                </Card>
            </Container>
        )
    }
}

const useStyles = theme => ({
    card: {
        marginTop: theme.spacing(8),
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        minWidth: '250px',
        minHeight: '250px',
        paddingLeft: theme.spacing(2),
        paddingRight: theme.spacing(2)
    },
    avatar: {
        margin: theme.spacing(1),
        backgroundColor: theme.palette.secondary.main,
    },
    form: {
        width: '100%', // Fix IE 11 issue.
        marginTop: theme.spacing(3),
    },
    userDropDown: {
        minWidth: '100%'
    },
    submitContainer: {
        alignItems: 'right'
    },
    submit: {
        margin: theme.spacing(3, 0, 2),
    },
})

const mapStateToProps = ({users}) => {

    return {
        users: Object.values(users)
    }
}

export default withStyles(useStyles)(connect(mapStateToProps)(Login))
