// @flow

import React from 'react'


type QuestionProps = {
  questionText : string
}

const Question = ({questionText}: QuestionProps) => {
  return (
    <div className="Question">
      <p>{questionText}</p>
    </div>
  )
}

export default Question
