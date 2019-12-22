export default function reducer(state = {type: 'guest'}, action){
  switch (action.type) {
    case 'CHANGE_WELCOME_GUEST':
      return {
        ...state,
        type: state.type = 'guest',
        
      }
    case 'CHANGE_WELCOME_PENDING':
      return {
        ...state,
        type: state.type = 'pending'
      }
    case 'CHANGE_WELCOME_USER':
      return {
        ...state,
        type: state.type = 'user'
      }
    default:
      return state
  }
}