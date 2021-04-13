import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { add, subtraction } from './actions'

class App extends Component {
  render() {
    console.log(this.props)
    const {
      count,
      add,
      subtraction
    } = this.props

    return (
      <div>
        <button onClick={add}>+</button>
        count { count}
        <button onClick={subtraction}>-</button>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    ...state
  }
}

const mapDispatchtoProps = (dispatch) => {
  return bindActionCreators({ add, subtraction }, dispatch)
}

export default connect(mapStateToProps, mapDispatchtoProps)(App)

