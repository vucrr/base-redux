function TestRedux(state = { count: 0 }, action) {
  switch (action.type) {
    case 'add':
      return {
        count: state.count + action.payload
      }
    case 'subtraction':
      return {
        count: state.count - action.payload
      }
    default:
      return {
        ...state
      }
  }
}

export default TestRedux

