import { createStore } from 'redux'

function counterReducer(state = { value: 5 }, action) {
  switch (action.type) {
    case 'incremented':
      return { value: state.value + 1 }
    case 'decremented':
      return { value: state.value - 1 }
    default:
      return state
  }
}

const store = createStore(counterReducer)

export default store;
