'use strict'

const quizData = [
  {
    question: 'How old is Florin?',
    a: '10',
    b: '17',
    c: '26',
    d: '110',
    correct: 'c',
  },
  {
    question: 'What is the most used programming languaje?',
    a: 'Java',
    b: 'C',
    c: 'Python',
    d: 'JavaScript',
    correct: 'd',
  },
  {
    question: 'Who is the president of US?',
    a: 'Florin Pop',
    b: 'Donald Trump',
    c: 'Joe Biden',
    d: 'Obi Wan Kenobi',
    correct: 'c',
  },
  {
    question: 'What does HTML stand for?',
    a: 'Hyper todo media layer',
    b: 'Hyper text markup languaje',
    c: 'Hypo taks mew logo',
    d: 'hello to my luggage',
    correct: 'b',
  },
  {
    question: 'What year JavaScript lauched?',
    a: '2020',
    b: '2019',
    c: '2018',
    d: 'none of the above',
    correct: 'd',
  },
]

const quiz = document.getElementById('quiz')
const question = document.getElementById('question')
const a_text = document.getElementById('a_text')
const b_text = document.getElementById('b_text')
const c_text = document.getElementById('c_text')
const d_text = document.getElementById('d_text')
const btnSubmit = document.getElementById('submit')

let currentQuiz = 0
let score = 0

const loadQuiz = () => {
  const currentQuizData = quizData[currentQuiz]

  question.innerHTML = currentQuizData.question
  a_text.innerHTML = currentQuizData.a
  b_text.innerHTML = currentQuizData.b
  c_text.innerHTML = currentQuizData.c
  d_text.innerHTML = currentQuizData.d
}
loadQuiz()

const getSelected = () => {
  const answers = document.querySelectorAll('.answer')
  let answer = undefined

  answers.forEach((a) => {
    if (a.checked) {
      answer = a.id
    }
  })

  return answer
}

const clearCheckboxes = () => {
  const answers = document.querySelectorAll('.answer')
  answers.forEach((a) => (a.checked = false))
}
clearCheckboxes()

btnSubmit.onclick = () => {
  const answer = getSelected()

  if (answer) {
    if (answer === quizData[currentQuiz].correct) score++

    currentQuiz++
    if (currentQuiz < quizData.length) {
      loadQuiz()
      clearCheckboxes()
    } else {
      quiz.innerHTML = /*html*/`
        <h2>You answered correctly at ${score}/${quizData.length} questions.</h2>
        <button onclick="window.location.reload()">Restart</button>`
    }
  }
}
