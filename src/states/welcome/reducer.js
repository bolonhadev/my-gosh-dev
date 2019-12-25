export default function reducer(state = {}, action){
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
    case 'CHANGE_WELCOME_GUEST_X':
      return {
        ...state,
        my_state_machine: state.my_state_machine = {
          GUEST: {
            guest_is: state.guest_is^=true
          }
        }
      }
    default:
      return state
  }
}