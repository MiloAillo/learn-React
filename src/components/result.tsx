import type { Question } from "../containers/quizContainer"

interface ResultProps {
    userTrueAnswers: number
     questionBank: Question[] 
      restartQuiz: () => void
}

function Result({userTrueAnswers, questionBank, restartQuiz}: ResultProps) {
    return <div>
        <h2>Quiz Completed!</h2>
        <p>Your score: {userTrueAnswers}/{questionBank.length}</p>
        <button className="restart-button" onClick={restartQuiz}>Restart</button>
    </div>
}

export default Result