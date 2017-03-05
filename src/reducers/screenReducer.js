export default function reducer(state={
    screen: 1,
    submitted: false,
  }, action) {
    switch (action.type) {
      case "NEXT_SCREEN": {
        return {...state, screen: state.screen + action.payload}
      }
      case "PREVIOUS_SCREEN": {
        return {...state, screen: state.screen - action.payload}
      }
      case "RESET_VALUE": {
        return {...state, screen: 1, submitted: true}
      }
    }
    return state
}