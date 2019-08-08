import Question from './Question'
import React, { Component } from 'react'
import SignalCollection from './SignalCollection'
import PropTypes from 'prop-types'

class SignalForm extends Component {

  constructor (props) {
    super(props)
    this.state = {
      isLoading : true
    }
  }

  componentDidMount () {
    // this will be replaced with an api call later
    this.setState(
      {
      isLoading: false,
      questionText: 'How do you feel about trust levels within the team?',
      signals : {
        signal1: {
          colour: 'green',
          text: 'I think we all trust each other completely'
        },
        signal2: {
          colour: 'amber',
          text: 'We trust each other most of the time in relation to most things, but there is room for improvement'
        },
        signal3: {
          colour: 'red',
          text: 'There is virtually no trust between team members'
        }
      }
    })
  }

  render () {
    if (!this.state.isLoading) {
      let { questionText, signals } = this.state
      return (
        <form>
          <Question questionText={questionText}/>
          <SignalCollection signals={signals}/>
        </form>
      )
    }
    return (
      <p>Loading...</p>
    )

  }
}

export default SignalForm
