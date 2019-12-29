const initialState = {
  my_state_machine: {
    guest: {
      guest_is: true,
      confimation_is: false,
      user_is: false,
      user_role: "guest",
      girl_expression: "EXPRESSION_NEUTRAL",
      girl_talk: "TXT_GIRL_HI",
      panel: false,
      editor: false,
      tool_menu: {
        left: true,
        center: "WAITING_EMAIL",
        rigth: false
      }
    }
  }
}

export default function reducer( state = initialState, action){
  const actions = {
    CHANGE_WELCOME_GUEST: () => {
      state.my_state_machine.guest.guest_is ^= 1
      state.my_state_machine.guest.user_role = 'guest'
      state.my_state_machine.guest.girl_talk = 'TXT_GIRL_HI'
      state.my_state_machine.guest.girl_expression = 'EXPRESSION_NEUTRAL'
      return { ...state }
    },
    CHANGE_WELCOME_PENDING: () => {
      state.my_state_machine.guest.confimation_is ^= true
      state.my_state_machine.guest.user_role = 'pending'
      state.my_state_machine.guest.girl_talk = 'TXT_GIRL_EARTH_GONE'
      state.my_state_machine.guest.girl_expression = 'EXPRESSION_SCARE'
      return { ...state }
    },
    CHANGE_WELCOME_USER: () => {
      state.my_state_machine.guest.user_is ^= true
      state.my_state_machine.guest.user_role = 'user'
      state.my_state_machine.guest.girl_talk = 'TXT_GIRL_LETS_START'
      state.my_state_machine.guest.girl_expression = 'EXPRESSION_HAPPY'
      return { ...state }
    },
    CHANGE_WELCOME_SIGNOUT: () => {
      state = initialState
      return state
    },
    DEFAULT: () => {
      return state
    }
  }
  return(actions[action.type] || actions['DEFAULT'])()
}