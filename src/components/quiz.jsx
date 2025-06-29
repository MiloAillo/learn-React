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

    const [optionSelected, setOptionSelected] = useState("None")
    const [currentQuestion, setCurrentQuestion] = useState(0)

    function handleSelectOption(option) {
        setOptionSelected(option)
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
            <button className="option" onClick={() => handleSelectOption(option)} key={option}>{option}</button>
        ))}

        <p>Option Selected: {optionSelected}</p>

        <div className="nav-buttons">
            <button onClick={previousQuestion}>Previous</button>
            <button onClick={nextQuestion}>Next</button>
        </div>
    </div>
}

export default Quiz;