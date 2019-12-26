const initialState = {
  girl_talk: {
    TXT_GIRL_HI: 'Oi, sou a garota.',
    TXT_GIRL_EARTH_GONE: 'Putz, a Terra já era !',
    TXT_GIRL_LETS_START: 'Vamos começar !',
    TXT_TALK_NOW: ''
  }
}

export default function reducer( state = initialState, action){
  const actions = {
    TXT_GIRL_HI: () => {
      state.girl_talk.TXT_TALK_NOW = 'Oi, sou a garota, mesmo !'
      return { ...state }
    },
    TXT_GIRL_EARTH_GONE: () => {
      state.girl_talk.TXT_TALK_NOW = 'Putz, a Terra já era, mesmo !'
      return { ...state }
    },
    TXT_GIRL_LETS_START: () => {
      state.girl_talk.TXT_TALK_NOW = 'Vamos começar, mesmo !'
      return { ...state }
    },
    TXT_GIRL_CLEAN: () => {
      state = initialState
      return state
    },
    DEFAULT: () => {
      return state
    }
  }
  return(actions[action.type] || actions['DEFAULT'])()
}

// export default function reducer(state = initialState, action){
//   switch (action.type) {
//     case 'CHANGE_WELCOME_GUEST':
//       state.state.my_state_machine.guest.guest_is ^= true
//       return { ...state }
//     case 'CHANGE_WELCOME_PENDING':
//         state.state.my_state_machine.guest.confimation_is ^= true
//       return { ...state }
//     case 'CHANGE_WELCOME_USER':
//         state.state.my_state_machine.guest.user_is ^= true
//       return { ...state }
//     case 'CHANGE_WELCOME_SIGNOUT':
//       return {
//         state: state = initialState
//       }
//     case 'CHANGE_WELCOME_GUEST_X':
//       return {
//         ...state,
//         my_state_machine: state.my_state_machine = {
//           GUEST: {
//             guest_is: state.guest_is^=true
//           }
//         }
//       }
//     default:
//       return state
//   }
// }