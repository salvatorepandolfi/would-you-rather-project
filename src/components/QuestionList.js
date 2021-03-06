import React from "react";
import QuestionSummary from "./QuestionSummary";
import {Card, CardHeader, Container} from "@material-ui/core";


export default function QuestionList(props) {
    const {questionIds} = props
    return (
        <Container component="main" maxWidth="sm">
            {questionIds.length > 0
                ? questionIds.map(id => (<QuestionSummary key={id} questionId={id}/>))
                :
                <Card>
                    <CardHeader title='There are no questions available'/>
                </Card>
            }
        </Container>
    )
}
