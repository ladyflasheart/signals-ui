import React from 'react'
import './AnswerInput.css'
import PropTypes from 'prop-types'

const AnswerInput = ({colour}) => {
  return (
    <div className="Answerinput">
      <input type="radio" className={colour} />
    </div>
  )
}


AnswerInput.propTypes = {

}

export default AnswerInput
