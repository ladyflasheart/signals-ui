import React from 'react'
import './AnswerText.css'
import PropTypes from 'prop-types'

const AnswerText = ({text}) => {
  return (
    <div className="Answertext">
      {text}
    </div>
  )
}

AnswerText.propTypes = {

}

export default AnswerText
