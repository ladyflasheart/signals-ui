import React from 'react'
import PropTypes from '../../node_modules/prop-types'

const Question = ({questionText}) => {
  return (
    <div className="Question">
      <p>{questionText}</p>
    </div>
  )
}

Question.propTypes = {
  questionText : PropTypes.string
}

export default Question
