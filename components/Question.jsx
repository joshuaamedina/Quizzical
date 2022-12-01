import React from 'react'
import '../App.css'
import Answer from './Answer';

export default function questions(props) {

  const answers = props.answers.map((answer,i) =>{
    return(
      <Answer
      key = {props.id+i}
      correct = {props.correct}
      answer = {answer}
      selected = {props.selected} 
      holdAnswer = {props.holdAnswer}
      check = {props.check}
      />
    )

  })

  return (
    <div className="new--page">
      <h1 className='question--text'>{props.question}</h1>
      <div className='answer--container'>{answers}</div>
    </div>
  )
}
