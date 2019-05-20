import React from 'react'
import PropTypes from '../../node_modules/prop-types'

const Question = props => {
  return (
    <div className="Question">
      <p>{props.questionText}</p>
    </div>
  )
}

Question.propTypes = {
  questionText : PropTypes.string
}

export default Question
