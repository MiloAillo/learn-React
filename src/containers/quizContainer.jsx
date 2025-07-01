import { useState } from "react"
import Quiz from "../components/quiz";
import Result from "../components/result";

function QuizContainer() {
    // Hooks
    const [userAnswers, setUserAnswers] = useState([null, null, null])
    const [currentQuestion, setCurrentQuestion] = useState(0)
    const [isFinished, setIsFinished] = useState(false)

    // Normal Variables
    const selectedAnswer = userAnswers[currentQuestion]
    const questionBank = [
        {
            "question": "What does MiloAillo stands for?",
            "options": ["My Love Aillo", "Mas Ilo Anjing Lo", "None of the above"],
            "answer": "None of the above"
        },
        {
            "question": "Is MiloAillo goodlooking?",
            "options": ["Erm.. sure?", "Yes", "OMFG OMFG YESSS!!"],
            "answer": "OMFG OMFG YESSS!!"
        },
        {
            "question": "Is MiloAillo a dumbass?",
            "options": ["DUMB AS BRICK", "Absolutely", "Kill yourself"],
            "answer": "None of the above"
        }
    ]

    // Function
    function handleSelectOption(option) {
        let updatedUserAnswers = [...userAnswers]
        updatedUserAnswers[currentQuestion] = option
        setUserAnswers(updatedUserAnswers)
        console.log(updatedUserAnswers)
    }
    function nextQuestion() {
        if (currentQuestion < questionBank.length - 1) {
            setCurrentQuestion(currentQuestion + 1)
        }
        else {
            setIsFinished(true)
        }
    }
    function previousQuestion() {
        if (currentQuestion > 0) {
            setCurrentQuestion(currentQuestion - 1)
        }
    }

    return <div>
        <Quiz 
        question = {questionBank[currentQuestion]}
        currentIndex = {currentQuestion}
        userAnswers = {userAnswers}
        handleSelectOption = {handleSelectOption}
        previousQuestion = {previousQuestion}
        nextQuestion = {nextQuestion}
        selectedAnswer = {selectedAnswer}
        questionBank = {questionBank}
        />
        <Result />
    </div>
}

export default QuizContainer