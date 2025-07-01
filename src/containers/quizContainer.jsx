import { useEffect, useState } from "react"
import Quiz from "../components/quiz";
import Result from "../components/result";

function QuizContainer() {
    // Hooks
    const [userAnswers, setUserAnswers] = useState([null, null, null])
    const [currentQuestion, setCurrentQuestion] = useState(0)
    const [isFinished, setIsFinished] = useState(false)
    const [usertrueAnswers, setUserTrueAnswers] = useState(0)
    useEffect(() => {console.log(questionBank[0].answer)}, [])
    useEffect(() => calculate(), [isFinished])

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
            "answer": "Kill yourself"
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
    function calculate() {
        let correctAnswers = 0
        userAnswers.forEach((val, index) => {
            if (val === questionBank[index].answer) {
                correctAnswers = correctAnswers + 1
                console.log('if logic triggered')
            } else {
                console.log('if logic is not triggered')
            }
        });
        setUserTrueAnswers(correctAnswers)
    }
    function restartQuiz() {
        setUserAnswers([null, null, null])
        setCurrentQuestion(0)
        setIsFinished(false)
        setUserTrueAnswers(0)
    }

    return isFinished 
    ? <Result 
        userTrueAnswers = {usertrueAnswers}
        questionBank = {questionBank}
        restartQuiz = {restartQuiz}
    />
    : <Quiz 
        question = {questionBank[currentQuestion]}
        currentIndex = {currentQuestion}
        userAnswers = {userAnswers}
        handleSelectOption = {handleSelectOption}
        previousQuestion = {previousQuestion}
        nextQuestion = {nextQuestion}
        selectedAnswer = {selectedAnswer}
        questionBank = {questionBank}
    />
}

export default QuizContainer