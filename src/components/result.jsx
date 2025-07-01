function Result({userTrueAnswers, questionBank, restartQuiz}) {
    return <div>
        <h2>Quiz Completed!</h2>
        <p>Your score: {userTrueAnswers}/{questionBank.length}</p>
        <button className="restart-button" onClick={restartQuiz}>Restart</button>
    </div>
}

export default Result