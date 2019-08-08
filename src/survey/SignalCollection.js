import React, { Component } from 'react'
import PropTypes from '../../node_modules/prop-types'
import Signal from './Signal'

class SignalCollection extends Component {

  constructor (props) {
    super(props)
  }

  render () {
    const { signals: {signal1}, signals: {signal2}, signals: {signal3} } = this.props

    return (
      <div>
        <Signal settings={signal1} />
        <Signal settings={signal2} />
        <Signal settings={signal3} />
      </div>
    )
  }
}

SignalCollection.propTypes = {
  signal1 : PropTypes.exact({
    colour : PropTypes.string,
    text : PropTypes.string
  }),
  signal2 : PropTypes.exact({
    colour : PropTypes.string,
    text : PropTypes.string
  }),
  signal3 : PropTypes.exact({
    colour : PropTypes.string,
    text : PropTypes.string
  })
}

export default SignalCollection
