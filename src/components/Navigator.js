import React, {Component} from "react";
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
    ListItemText
} from '@material-ui/core'
import {connect} from 'react-redux'
import {
    Menu as MenuIcon,
    ChevronLeft as ChevronLeftIcon, AccountCircle, Home, AddComment, FormatListNumbered
} from "@material-ui/icons";


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
            <div className={classes.root}>
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
                        {this.props.authedUser === null
                            ? (<Button color="inherit">Login</Button>)
                            : (<Avatar><AccountCircle/> </Avatar>)
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
                        <ListItem button>
                            <ListItemIcon>
                                <Home/>
                            </ListItemIcon>
                            <ListItemText primary="HOME">
                            </ListItemText>
                        </ListItem>
                        <ListItem button>
                            <ListItemIcon>
                                <AddComment/>
                            </ListItemIcon>
                            <ListItemText primary="NEW QUESTION">

                            </ListItemText>
                        </ListItem>
                        <ListItem button>
                            <ListItemIcon>
                                <FormatListNumbered/>
                            </ListItemIcon>
                            <ListItemText primary="LEADER BOARD">

                            </ListItemText>
                        </ListItem>
                    </List>
                </Drawer>
            </div>
        )

    }
}

function mapStateToProps({authedUser, users}) {

    return {
        authedUser: authedUser !== null ? users[authedUser] : authedUser
    }
}

const drawerWidth = 240;

const useStyles = theme => ({
    root: {
        display: 'flex',
    },
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


export default withStyles(useStyles)(connect(mapStateToProps)(Navigator))
