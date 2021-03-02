import React, {Component, Fragment} from "react";
import {withRouter} from 'react-router-dom'
import clsx from 'clsx'
import {
    Button,
    AppBar,
    Toolbar,
    Avatar,
    Typography,
    IconButton,
    Drawer,
    Divider,
    withStyles,
    List,
    ListItem,
    ListItemIcon,
    ListItemText,

} from '@material-ui/core'
import {connect} from 'react-redux'
import {
    Menu as MenuIcon,
    ChevronLeft as ChevronLeftIcon, Home, AddComment, FormatListNumbered
} from "@material-ui/icons";
import {deepOrange} from "@material-ui/core/colors";
import UserAvatar from "./UserAvatar";


class Navigator extends Component {

    state = {
        open: true
    }

    toggleDrawer = () => {
        this.setState(({open}) => ({open: !open}), () => {
        })
    }

    render() {
        const {classes, authedUser} = this.props
        const {open} = this.state
        return (
            <Fragment>
                <AppBar position="absolute" className={clsx(classes.appBar, open && classes.appBarShift)}>
                    <Toolbar className={classes.toolbar}>
                        <IconButton
                            edge="start"
                            color="inherit"
                            aria-label="open drawer"
                            onClick={this.toggleDrawer}
                            className={clsx(classes.menuButton, open && classes.menuButtonHidden)}
                        >
                            <MenuIcon/>
                        </IconButton>
                        <Typography
                            component="h1"
                            variant="h6"
                            color="inherit"
                            noWrap
                            className={classes.title}>
                            WOULD YOU RATHER?
                        </Typography>
                        {authedUser === null
                            ? (<Button color="inherit"
                                       onClick={() => (this.props.history.push('/login'))}>Login</Button>)
                            : (
                                <UserAvatar
                                    user={authedUser}
                                    classes={
                                        {
                                            avatar: '',
                                            avatarColor: classes.avatarColor
                                        }
                                    }
                                />
                            )
                        }
                    </Toolbar>
                </AppBar>
                <Drawer
                    variant="permanent"
                    classes={{
                        paper: clsx(classes.drawerPaper, !open && classes.drawerPaperClose),
                    }}
                    open={open}
                >
                    <div className={classes.toolbarIcon}>
                        <IconButton onClick={this.toggleDrawer}>
                            <ChevronLeftIcon/>
                        </IconButton>
                    </div>
                    <Divider/>
                    <List>
                        <ListItem button onClick={() => (this.props.history.push('/'))}>
                            <ListItemIcon>
                                <Home/>
                            </ListItemIcon>
                            <ListItemText primary="Home">
                            </ListItemText>
                        </ListItem>
                        <ListItem button onClick={() => (this.props.history.push('/add'))}>
                            <ListItemIcon>
                                <AddComment/>
                            </ListItemIcon>
                            <ListItemText primary="New Question">
                            </ListItemText>
                        </ListItem>
                        <ListItem button onClick={() => (this.props.history.push('/leaderBoard'))}>
                            <ListItemIcon>
                                <FormatListNumbered/>
                            </ListItemIcon>
                            <ListItemText primary="Leader Board">
                            </ListItemText>
                        </ListItem>
                    </List>
                </Drawer>
            </Fragment>
        )

    }
}

function mapStateToProps({authedUser, users}) {

    //TODO add the user image in the avatar
    return {
        authedUser: authedUser !== null ? users[authedUser] : authedUser
    }
}

const drawerWidth = 240;

const useStyles = theme => ({
    toolbar: {
        paddingRight: 24, // keep right padding when drawer closed
    },
    toolbarIcon: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'flex-end',
        padding: '0 8px',
        ...theme.mixins.toolbar,
    },
    appBar: {
        zIndex: theme.zIndex.drawer + 1,
        transition: theme.transitions.create(['width', 'margin'], {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
        }),
    },
    appBarShift: {
        marginLeft: drawerWidth,
        width: `calc(100% - ${drawerWidth}px)`,
        transition: theme.transitions.create(['width', 'margin'], {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.enteringScreen,
        }),
    },
    menuButton: {
        marginRight: 36,
    },
    menuButtonHidden: {
        display: 'none',
    },
    title: {
        flexGrow: 1,
    },
    drawerPaper: {
        position: 'relative',
        whiteSpace: 'nowrap',
        width: drawerWidth,
        transition: theme.transitions.create('width', {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.enteringScreen,
        }),
    },
    drawerPaperClose: {
        overflowX: 'hidden',
        transition: theme.transitions.create('width', {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
        }),
        width: theme.spacing(7),
        [theme.breakpoints.up('sm')]: {
            width: theme.spacing(9),
        },
    },
    username: {
        marginLeft: theme.spacing(2)
    },
    avatarColor: {
        color: theme.palette.getContrastText(deepOrange[500]),
        backgroundColor: deepOrange[500],
    },
    avatar: {},
})


export default withRouter(withStyles(useStyles)(connect(mapStateToProps)(Navigator)))
