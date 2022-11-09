import React, {Component} from "react";
import "./Quiz.css";
import ActiveQuize from "../../components/ActiveQuize/ActiveQuize";
import FinishedQuiz from "../../components/FinishedQuiz/FinishedQuiz";

class Quiz extends Component {
    state = {
        results: {},
        isFinished: false,
        activeQuestion: 0,
        answerState: null,
        quiz: [
            {
                question: 'the most common verb in English? ',
                rightAnswerId: 1,
                id: 1,
                answers: [
                    {text: 'to be', id: 1},
                    {text: 'to see', id: 2},
                    {text: 'to use', id: 3},
                    {text: 'to work', id: 4},
                ]
            },
            {
                question: 'What is the third form of the verb "do"?',
                rightAnswerId: 4,
                id: 2,
                answers: [
                    {text: 'does', id: 1},
                    {text: 'do', id: 2},
                    {text: 'did', id: 3},
                    {text: 'done', id: 4},
                ]
            },
            {
                question: 'What is the second form of the verb "do"?',
                rightAnswerId: 3,
                id: 3,
                answers: [
                    {text: 'does', id: 1},
                    {text: 'do', id: 2},
                    {text: 'did', id: 3},
                    {text: 'done', id: 4},
                ]
            }
        ]
    }

    onAnswerClickHandler = (answerId) => {
        // console.log('Answer Id: ', answerId)

        // if (this.state.answerState) {
        //     const key = Object.keys(this.state.answerState)[0]
        //     if (this.state.answerState[key]==='success') {
        //         return
        //     }
        // }

        const question = this.state.quiz[this.state.activeQuestion];
        const results = this.state.results

        if (question.rightAnswerId === answerId) {
            if (!results[question.id]){
                results[question.id] = 'success'
            }

            this.setState({
                answerState: {[answerId]: 'success'},
                results: results
            })


            const timeout = window.setTimeout(() => {
                if (this.isQuizFinish()) {
                    console.log('Finish')
                    this.setState({
                        isFinished: true
                    })
                } else {
                    this.setState({
                        activeQuestion: this.state.activeQuestion + 1
                    })
                }

                window.clearTimeout(timeout)
            }, 300)


        } else {
            results[question.id] = 'error'

            this.setState({
                answerState: {[answerId]: 'error'},
                results: results
            })
        }
    }

    isQuizFinish() {
        return this.state.activeQuestion + 1 === this.state.quiz.length
    }

    retryHandler = () => {
        this.setState({
            activeQuestion: 0,
            answerState: null,
            isFinished: false,
            results: {}
        })
    }

    render() {
        return (
            <div className='Quiz'>
                <div className='QuizWrapper'>
                    <h1>Quiz English verbs</h1>

                    {
                        this.state.isFinished
                            ? <FinishedQuiz
                                results={this.state.results}
                                quiz={this.state.quiz}
                                onRetry={this.retryHandler}
                            />
                            : <ActiveQuize
                                answers={this.state.quiz[this.state.activeQuestion].answers}
                                question={this.state.quiz[this.state.activeQuestion].question}
                                onAnswerClick={this.onAnswerClickHandler}
                                quizLength={this.state.quiz.length}
                                answerNumber={this.state.activeQuestion + 1}
                                state={this.state.answerState}

                            />
                    }

                </div>
            </div>
        )
    }
}

export default Quiz;