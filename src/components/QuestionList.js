import React, {Fragment} from "react";
import QuestionSummary from "./QuestionSummary";
import {Container} from "@material-ui/core";


export default function QuestionList(props) {
    const {questionIds} = props
    return (
        <Container component="main" maxWidth="sm" >
            {questionIds.map(id => (<QuestionSummary key={id} questionId={id}/>))}
        </Container>
    )
}
