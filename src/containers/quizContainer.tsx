import { useEffect, useState } from "react"
import Quiz from "../components/quiz";
import Result from "../components/result";

export interface Question { // Mark
    question: string
    options: string[]
    answer: string
}

function QuizContainer() {
    // Hooks
    const [userAnswers, setUserAnswers] = useState<(string | null)[]>([null, null, null])
    const [currentQuestion, setCurrentQuestion] = useState<number>(0)
    const [isFinished, setIsFinished] = useState<boolean>(false)
    const [usertrueAnswers, setUserTrueAnswers] = useState<number>(0)
    useEffect(() => {console.log(questionBank[0].answer)}, [])
    useEffect(() => calculate(), [isFinished])

    // Normal Variables
    const selectedAnswer = userAnswers[currentQuestion] // Mark
    const questionBank: Question[] = [
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
    function handleSelectOption(option: string): void {
        let updatedUserAnswers = [...userAnswers]
        updatedUserAnswers[currentQuestion] = option
        setUserAnswers(updatedUserAnswers)
        console.log(updatedUserAnswers)
    }
    function nextQuestion(): void {
        if (currentQuestion < questionBank.length - 1) {
            setCurrentQuestion(currentQuestion + 1)
        }
        else {
            setIsFinished(true)
        }
    }
    function previousQuestion(): void {
        if (currentQuestion > 0) {
            setCurrentQuestion(currentQuestion - 1)
        }
    }
    function calculate(): void {
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
    function restartQuiz(): void {
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