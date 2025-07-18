import type { Question } from "../containers/quizContainer"

interface QuizProps {
    question: Question
    currentIndex: number
    userAnswers: (string | null)[]
    handleSelectOption: (option: string) => void
    previousQuestion: () => void
    nextQuestion: () => void
    selectedAnswer: string | null
    questionBank: Question[]
}

function Quiz({question, currentIndex, userAnswers, handleSelectOption, previousQuestion, nextQuestion, selectedAnswer, questionBank}: QuizProps) {
    return <div>
        <h2>Question {currentIndex + 1}</h2>

        <p>{question.question}</p>
        {question.options.map((option) => (
            <button className={"option" + (userAnswers[currentIndex] === option ? " selected" : "")} onClick={() => handleSelectOption(option)} key={option}>{option}</button>
        ))}

        <div className="nav-buttons">
            <button onClick={previousQuestion} disabled={currentIndex === 0}>Previous</button>
            <button onClick={nextQuestion} disabled={selectedAnswer === null}>{currentIndex === questionBank.length - 1 ? "Finish" : "Next"}</button>
        </div>
    </div>
}

export default Quiz;