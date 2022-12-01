import React from 'react'
import '../App.css'
import {nanoid} from "nanoid"
export default function Answer(props) {

  function classDecider(){
    let xyz = ""
    if (props.check === true && props.answer === props.correct)
      xyz = "correct--answer--done"
    else if (props.check === true && props.answer === props.selected && props.selected!== props.correct)
      xyz = "incorrect--answer--done"
    else if(props.check === false && props.selected === props.answer)
      xyz = "answer--selected"
    else
      xyz = "answer"
      
    return xyz
  }

  let temp = classDecider()

  return (
    <p
      className={temp}
      key={ nanoid() }
      onClick={() => props.holdAnswer(props.answer)}>
      {props.answer}
    </p>
  )
}
