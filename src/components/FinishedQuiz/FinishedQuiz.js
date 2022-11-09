import React from "react";
import './FinishedQuiz.css'
import {keyboard} from "@testing-library/user-event/dist/keyboard";


const FinishedQuiz = props => {

    const successCount = Object.keys(props.results).reduce((total, key) => {
        if (props.results[key] === 'success') {
            total++
        }
        return total

    }, 0)

    return (
        <div className={'FinishedQuiz'}>
            Finished! Done!
            <ul>

                {props.quiz.map((quizItem, index) => {
                    const cls = [
                        'fa',
                        props.results[quizItem.id] === 'error' ? 'fa-times' : 'fa-check',
                    ]

                    return(
                        <li key={index}

                        >
                        <strong>{index + 1}</strong>.&nbsp;
                            {quizItem.question}
                            <i className={cls.join(' ')}/>
                        </li>
                    )
                }) }
            </ul>

            <p>Correct {successCount} from {props.quiz.length}</p>

            <div>
                <button onClick={props.onRetry}>Repeat</button>
            </div>
        </div>
    )
}

export default FinishedQuiz;