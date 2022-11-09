import React from "react";
import classes from "./ActiveQuize.css";
import AnswersList from "./AnswersList/AnswersList";

const ActiveQuize = (props) => {

    return (
        <div className='ActiveQuize'>
            <p className='Question'>
            <span>
                <strong>
                    {props.answerNumber}.
                </strong>&nbsp;
                {props.question}
            </span>
                <small>{props.answerNumber} from {props.quizLength}</small>
            </p>
            <AnswersList
                state={props.state}
                answers={props.answers}
                onAnswerClick={props.onAnswerClick}
            />
        </div>
    )
}

export default ActiveQuize;