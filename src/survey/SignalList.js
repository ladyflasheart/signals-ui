// @flow

import React from 'react'
import './SignalList.css'
import Signal from './Signal'

export type SignalData = {| order: number, colour: string, answerId: string, text: string, selected: boolean |}

type SignalListProps = {
  signals: Array<SignalData>
}

const SignalList = ({signals}: SignalListProps) => {
  const signalItems = signals.map((signal) =>
    <Signal settings={signal}/>
  )
  return (
    <div className="signalList">{signalItems}</div>
  )
}

export default SignalList
