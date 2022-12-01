import { nanoid } from "nanoid"

export default function Fix(data) {

  var decodeHTML = function (html) {
    var txt = document.createElement('textarea');
    txt.innerHTML = html;
    return txt.value;
  };

    let fixObj = new Array(data.length)
    for (let i = 0; i < data.length; i++) {
            
            let correctAnswer = decodeHTML(data[i].correct_answer)

            let incorrectAnswers = []
            for (let j = 0; j < data[i].incorrect_answers.length; j++){
                incorrectAnswers.push(decodeHTML(data[i].incorrect_answers[j]))
            }
            
            fixObj[i] = {
                key: nanoid(),
                id: nanoid(),
                question: decodeHTML(data[i].question),
                correct: decodeHTML(data[i].correct_answer),
                selected: false,
                answers: shuffle([correctAnswer, ...incorrectAnswers])
            }
    }
    return fixObj   
}

function shuffle(arr) {
    return arr.sort((a, b, c, d) => 0.5 - Math.random())
}