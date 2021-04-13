import React from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { add, subtraction } from './actions'

function App(props) {
  const {
    count,
    add,
    subtraction
  } = props
  return (
    <div>
      <button onClick={add}>+5</button>
        count { count}
      <button onClick={subtraction}>-5</button>
    </div>
  )
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

