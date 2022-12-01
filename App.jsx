import React from 'react'
import './App.css'
import Landing from './components/Landing'
import Question from './components/Question'
import Fix from './components/Fix'
function App() {

  const [activeQuiz, setQuiz] = React.useState(true)
  const [quiz,setForm] = React.useState([])
  const [check, setCheck] = React.useState(false)
  const [restart, setRestartQuiz] = React.useState(false)
  const [answersCorrect, setAnswersCorrect] = React.useState(0)

  
  React.useEffect(() => {

    async function getQuestions() {
      const res = await fetch("https://opentdb.com/api.php?amount=5&type=multiple")
      const data = await res.json()
      const newData = Fix(data.results)
      setForm(newData)
  }
    getQuestions()

  }, [restart])

  function startQuiz(){
    setQuiz(prevQuiz => !prevQuiz)

  }

  function holdAnswer(ans) {
    setForm(oldQuizData => oldQuizData.map(data => {
        return data.answers.includes(ans) ?
        {...data,
        selected: ans} :
        data
    }))
  }

  function submitQuiz(){
    setCheck(true)
    let correct = 0;
    for(let i = 0; i < quiz.length; i++){
      if(quiz[i].correct === quiz[i].selected)
        correct++;
    }
    setAnswersCorrect(correct)
  }
  
  function restartQuiz(){
    setForm([])
    setCheck(false)
    setRestartQuiz(prevQuiz => !prevQuiz)
    setQuiz(true)
  }

  const questionArr = quiz.map(item =>{
    return(
      <Question 
        key = {item.key}
        id = {item.id}
        question = {item.question}
        correct = {item.correct}
        answers = {item.answers}
        selected = {item.selected}
        holdAnswer={holdAnswer}
        check={check}
      />
    )
  })

  console.log(quiz)
  return (
      <div className='app--container'>
        {activeQuiz && <Landing startQuiz = {startQuiz} activeQuiz = {activeQuiz}></Landing>}
        {!activeQuiz && questionArr}
        {!check ?
        !activeQuiz && <button onClick = {submitQuiz} className='submit--button'> Check Answers </button> :
        !activeQuiz && 
        <div>
          <p className='results--p'>Correct Answers: {answersCorrect}/5 </p> 
          <button onClick = {restartQuiz} className='submit--button'> Restart Quiz </button>
        </div>
        } 
        <div className='blob'></div>
        <div className='blob-2'></div>
      </div>
  )
}

export default App
