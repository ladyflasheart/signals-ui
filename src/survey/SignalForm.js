// @flow

import Question from './Question'
import React, { Component } from 'react'
import SignalList from './SignalList'
import type {SignalData} from './SignalList'

// flow type checking definitions
type SignalFormProps = {}

type SignalFormState = {
  isLoading: boolean,
  questionText: string,
  questionAnswered: boolean,
  signals: Array<SignalData>
}

class SignalForm extends Component<SignalFormProps, SignalFormState> {

  constructor (props: SignalFormProps) {
    super(props)
    this.state =
      {
        isLoading: true,
        questionText: '',
        questionAnswered: false,
        signals: []
      }
  }

  componentDidMount () {
    // this will be replaced with an api call later
    this.setState(
      {
        isLoading: false,
        questionText: 'How do you feel about trust levels within the team?',
        signals: [
          {
            order: 1,
            colour: 'red',
            answerId: 'cfd23bed-3320-490f-a802-7809e8fdfa06',
            text: 'There is virtually no trust between team members',
            selected: false
          },
          {
            order: 2,
            colour: 'amber',
            answerId: '80694d7b-84d0-4f37-928d-d19ac29aae39',
            text: 'We trust each other most of the time in relation to most things, but there is room for improvement',
            selected: false
          },
          {
            order: 3,
            colour: 'green',
            answerId: '57ed0c3c-ed1a-4ae2-a1ef-d330009d4f6d',
            text: 'I think we all trust each other completely',
            selected: false
          }
        ]
      })
  }

  render () {
    if (!this.state.isLoading) {
      let { questionText, signals }: SignalFormState = this.state

      return (
        <form>
          <Question questionText={questionText}/>
          <SignalList signals={signals}/>
        </form>
      )
    }
    return (
      <p>Loading...</p>
    )

  }
}

export default SignalForm
