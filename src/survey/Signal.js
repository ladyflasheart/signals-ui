import React, { Component } from 'react'
import PropTypes from 'prop-types'
import AnswerInput from './AnswerInput'
import AnswerText from './AnswerText'
import './Signal.css'

class Signal extends Component {
  render () {
    const { settings: {colour}, settings: {text} } = this.props

    return (
      <div className="Signal">
        <AnswerInput colour={colour}/>
        <AnswerText text={text}/>
      </div>
    )
  }
}

Signal.propTypes = {
  colour : PropTypes.string,
  text : PropTypes.string
}

export default Signal
