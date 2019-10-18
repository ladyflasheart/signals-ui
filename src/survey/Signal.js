// @flow

import React, { Component } from 'react'
import './Signal.css'
import type {SignalData} from './SignalList'

// flow type checking definitions
type SignalProps = {
  settings: SignalData
}

class Signal extends Component<SignalProps> {
  render () {
    const {settings}: SignalProps = this.props
    return (
      <div className="Signal">
        <div>
          <input type="radio" className={settings.colour} name="answers" id={settings.answerId}
                 value={settings.answerId}/>
          <label htmlFor={settings.answerId}>{settings.text}</label>
        </div>
      </div>
    )
  }
}

export default Signal
