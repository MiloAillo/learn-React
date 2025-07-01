function Quiz({question, currentIndex, userAnswers, handleSelectOption, previousQuestion, nextQuestion, selectedAnswer, questionBank}) {
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