import React, {Component} from "react"
import QuestionList from "../components/QuestionList"
import {AppBar, Tab, Tabs} from "@material-ui/core"
import {TabContext, TabPanel} from "@material-ui/lab"
import {connect} from 'react-redux'

class Home extends Component {
    state = {
        tab: 'unaswered'
    }
    changeTab = (e, value) => {
        e.preventDefault()
        this.setState({tab: value})
    }

    render() {
        const {tab} = this.state
        const {answeredIds, unasweredIds} = this.props
        return (
            <TabContext value={tab}>
                <AppBar position="static" color="default">
                    <Tabs
                        value={tab}
                        onChange={this.changeTab}
                        indicatorColor="primary"
                        textColor="primary"
                        variant="fullWidth"
                    >
                        <Tab label="Unanswered" value="unaswered"/>
                        <Tab label="Answered" value="answered"/>
                    </Tabs>
                    <TabPanel role="tabpanel" value="answered" index={0}>
                        <QuestionList
                            questionIds={answeredIds}/>
                    </TabPanel>
                    <TabPanel role="tabpanel" value="unaswered" index={1}>
                        <QuestionList
                            questionIds={unasweredIds}/>
                    </TabPanel>
                </AppBar>
            </TabContext>
        )
    }
}

const mapStateToProps = ({questions, users, authedUser}) => {

    const orderedQuestions = Object.values(questions).sort((a, b) => (b.timestamp - a.timestamp))
    const answeredQuestions = users[authedUser].answers
    const userIds = Object.keys(answeredQuestions)
    const unasweredIds =
        orderedQuestions.filter(
            question => (!userIds.includes(question.id))
        ).map(q => q.id)
    const answeredIds =
        orderedQuestions.filter(
            question => (userIds.includes(question.id))
        ).map(q => q.id)

    return {
        answeredIds,
        unasweredIds
    }
}

export default connect(mapStateToProps)(Home)
