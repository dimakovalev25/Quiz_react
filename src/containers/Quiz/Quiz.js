import React, {Component} from "react";
import classes from "./Quiz.css";
import ActiveQuize from "../../components/ActiveQuize/ActiveQuize";

class Quiz extends Component {
    state = {
        quiz: []
    }


    render() {
        return (
            <div className='Quiz'>
                <div className='QuizWrapper'>
                <h1>Quiz</h1>
                    <ActiveQuize />
                </div>
            </div>
        )
    }
}

export default Quiz;