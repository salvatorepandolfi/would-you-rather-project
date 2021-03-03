import React from "react";
import {Box, CircularProgress, Grid, makeStyles, Typography} from "@material-ui/core";
import {green, yellow, grey} from "@material-ui/core/colors";
import UserAvatar from "./UserAvatar";
import clsx from "clsx";

const useStyles = makeStyles(theme => ({
    header: {
        textAlign: 'center'
    },
    avatarContainer: {
        textAlign: 'center'
    },
    user: {
        width: 150,
        height: 150,
        fontSize: "75px",
        alignSelf: 'baseline'
    },
    option: {
        marginTop: theme.spacing(1),
        marginBottom: theme.spacing(1),
        paddingLeft: theme.spacing(1),
        border: '1px solid ',
        borderRadius: '9px',
        minHeight: '60px',
        position: 'relative',
        paddingTop: theme.spacing(1)
    },
    voted: {
        background: green[100],
        borderColor: green['A700'],
        color: green['900']
    },
    badge: {
        position: 'absolute',
        top: -15,
        right: -4,
        borderRadius: '50%',
        width: '40px',
        height: '40px',
        fontSize: '10px',
        fontWeight: 'bold',
        padding: '4px 4px',
        textAlign: 'center',
        backgroundColor: yellow[700],
        color: grey[800]
    },
    answerContainer: {
        position: 'relative'
    }
}))

export default function AnsweredQuestion(props) {
    const {question} = props
    const classes = useStyles()
    return (
        <Grid container spacing={2}>
            <Grid item xs={12} className={classes.header}>
                <Typography variant="h5">{`Asked by ${question.author.name}`}</Typography>
            </Grid>
            <Grid item xs={8}>
                <Grid container>
                    <Grid item xs={12}>
                        <Typography variant="h6">{`Results:`}</Typography>
                    </Grid>
                    <Grid container spacing={2}
                          className={question.userAnswer === 'optionOne' ? clsx(classes.option, classes.voted) : classes.option}
                    >
                        {question.userAnswer === 'optionOne' &&
                        <div className={classes.badge}><span>Your<br/>Choice</span></div>}
                        <Grid item xs={8}>{question.optionOne.text}</Grid>
                        <Grid item xs={4}>
                            <Grid container>
                                <Grid item xs={4}>
                                    <Box position="relative" display="inline-flex">
                                        <CircularProgress variant="determinate"
                                                          value={(question.optionOne.votes.length / question.totalAnswers) * 100}/>
                                        <Box
                                            top={0}
                                            left={0}
                                            bottom={0}
                                            right={0}
                                            position="absolute"
                                            display="flex"
                                            alignItems="center"
                                            justifyContent="center"
                                        >
                                            <Typography variant="caption" component="div">{`${(question.optionOne.votes.length / question.totalAnswers) * 100}%`}</Typography>
                                        </Box>
                                    </Box>
                                </Grid>
                                <Grid item
                                      xs={12}>{`${question.optionOne.votes.length} out of ${question.totalAnswers}`}</Grid>
                            </Grid>
                        </Grid>
                    </Grid>
                    <Grid container spacing={2}
                          className={question.userAnswer === 'optionTwo' ? clsx(classes.option, classes.voted) : classes.option}
                    >
                        {question.userAnswer === 'optionTwo' &&
                        <div className={classes.badge}><span>Your<br/>Choice</span></div>}
                        <Grid item xs={8}>{question.optionTwo.text}</Grid>
                        <Grid item xs={4}>
                            <Grid container>
                                <Grid item xs={4} className={classes.answerContainer}>
                                    <Box position="relative" display="inline-flex">
                                        <CircularProgress variant="determinate"
                                                          value={(question.optionTwo.votes.length / question.totalAnswers) * 100}/>
                                        <Box
                                            top={0}
                                            left={0}
                                            bottom={0}
                                            right={0}
                                            position="absolute"
                                            display="flex"
                                            alignItems="center"
                                            justifyContent="center"
                                        >
                                            <Typography variant="caption" component="div">{`${(question.optionTwo.votes.length / question.totalAnswers) * 100}%`}</Typography>
                                        </Box>
                                    </Box>
                                </Grid>
                                <Grid item
                                      xs={12}>{`${question.optionTwo.votes.length} out of ${question.totalAnswers}`}</Grid>
                            </Grid>
                        </Grid>
                    </Grid>

                </Grid>

            </Grid>
            <Grid item xs={4} className={classes.avatarContainer}>
                <UserAvatar
                    user={question.author}
                    classes={
                        {
                            avatar: classes.user,
                            avatarColor: ''
                        }
                    }
                />
            </Grid>
        </Grid>
    )
}
