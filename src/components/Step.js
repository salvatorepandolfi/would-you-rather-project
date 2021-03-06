import React from "react";
import {Card, CardContent, CardHeader, Grid, makeStyles, Typography} from "@material-ui/core";
import UserAvatar from "./UserAvatar";
import {grey} from "@material-ui/core/colors";
import {EmojiEvents} from "@material-ui/icons";
import clsx from "clsx";

const useStyles = makeStyles(theme => ({
    container: {
        border: '1px solid',
        borderColor: 'white',
        borderRadius: '5px',
        padding: theme.spacing(2),
        marginBottom: theme.spacing(3),
        position: 'relative'
    },
    badge: {
        position: 'absolute',
        left: 10,
        top: 10,
        backgroudColor: 'white',
    },
    icon: {
        fontSize: 38
    },
    first: {
        color: '#d4af37',
        borderColor: '#d4af37',
    },
    second: {
        color: '#C0C0C0',
        borderColor: '#C0C0C0'
    },
    third: {
        color: '#cd7f32',
        borderColor: '#cd7f32'
    },
    header: {
        textAlign: 'center'
    },
    avatarContainer: {
        textAlign: 'center',
        marginLeft: theme.spacing(2)
    },
    user: {
        width: 100,
        height: 100,
        fontSize: "65px",
        alignSelf: 'baseline'
    },
    scoreHeader: {
        textAlign: "center",
        backgroundColor: grey[600],
    },
    score: {
        textAlign: "center",
        backgroundColor: grey[700],
        '& span': {
            textAlign: "center",
            fontSize: '35px',
            fontWidth: 'bold'
        }

    },
    details: {
        color: 'white',
        fontWeight: 'bold'
    }

}))

export default function Step(props) {
    const {user, position} = props
    const classes = useStyles()
    const className = position === 1
        ? clsx(classes.container, classes.first)
        : position === 2
            ? clsx(classes.container, classes.second)
            : position === 3
                ? clsx(classes.container, classes.third)
                : classes.container
    return (
        <Grid container spacing={3}
              className={className}
        >
            <div className={classes.badge}>
                <EmojiEvents width={25} className={classes.icon}/>
            </div>
            <Grid item xs={12} className={classes.header}>
                <Typography variant="h5">{user.name}</Typography>
            </Grid>
            <Grid container>
                <Grid item xs={3} className={classes.avatarContainer}>
                    <UserAvatar
                        user={user}
                        classes={
                            {
                                avatar: classes.user,
                                avatarColor: ''
                            }
                        }
                    />
                </Grid>
                <Grid item xs={5}>
                    <Typography variant="subtitle1" className={classes.details}>
                        <p>{`Answered questions: ${user.totalAnswers}`}</p>
                        <p>{`Asked question: ${user.totalQuestions}`}</p>
                    </Typography>
                </Grid>
                <Grid item xs={3}>
                    <Card>
                        <CardHeader title="SCORE" className={classes.scoreHeader}/>
                        <CardContent
                            className={classes.score}><span>{`${user.score}`}</span></CardContent>
                    </Card>
                </Grid>
            </Grid>
        </Grid>
    )

}

