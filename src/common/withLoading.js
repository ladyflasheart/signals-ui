
import React, { Component } from 'react'

const withLoading = (WrappedComponent) => {

  class WithLoading extends React.Component {

    constructor (props) {
      super(props)

      this.state = {}
    }



    render() {
      return <WrappedComponent {...this.props} />
    }
  }
  WithLoading.displayName = `WithLoading(${getDisplayName(WrappedComponent)})`;
  return WithLoading
}

function getDisplayName(WrappedComponent) {
  return (
    WrappedComponent.displayName || WrappedComponent.name || "Component"
  );
}

export default withLoading
