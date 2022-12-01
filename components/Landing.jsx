import React from 'react'
import '../App.css'

export default function Landing(props) {

  return (
    <div className="landing--page">
      <div className='blob'></div>
      <div className='blob-2'></div>
      <h1>Quizzical</h1>
      <h2>Test your general knowledge!</h2>
      <button 
      className="start--button"
      onClick={props.startQuiz}>Start Quiz</button>
    </div>
  )
}
