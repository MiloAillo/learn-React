import { useState } from "react"

function Quiz() {
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

    const [userAnswers, setUserAnswers] = useState([null, null, null])
    const [currentQuestion, setCurrentQuestion] = useState(0)

    const selectedAnswer = userAnswers[currentQuestion]

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
    }
    function previousQuestion() {
        if (currentQuestion > 0) {
            setCurrentQuestion(currentQuestion - 1)
        }
    }

    return <div>
        <h2>Question {currentQuestion + 1}</h2>

        <p>{questionBank[currentQuestion].question}</p>
        {questionBank[currentQuestion].options.map((option) => (
            <button className={"option" + (userAnswers[currentQuestion] === option ? " selected" : "")} onClick={() => handleSelectOption(option)} key={option}>{option}</button>
        ))}

        <div className="nav-buttons">
            <button onClick={previousQuestion} disabled={currentQuestion === 0}>Previous</button>
            <button onClick={nextQuestion} disabled={selectedAnswer === null}>{currentQuestion === questionBank.length - 1 ? "Finish" : "Next"}</button>
        </div>
    </div>
}

export default Quiz;