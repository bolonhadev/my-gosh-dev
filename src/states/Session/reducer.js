// import produce from 'immer'

// const initialState = {
//   my_state_machine: {
//     session: {
//       userRole: 'CHANGE_WELCOME_GUEST',
//       TXT_TALK_NOW: 'TXT_GIRL_HI',
//       language: 'pt'
//     }
//   }
// }


export default function reducer( state = [], action){
  const actions = {
    recSessionSuccess: () => {
      // state.my_state_machine.session = {}
      
      console.log('<<<< SESSIOOONNN >>>> ')
      state.userRole = action.paramns.userRole
      state.TXT_TALK_NOW = action.paramns.girlTxt
      state.language = action.paramns.language
      console.log(action)
      return {
        ...state
      }
    },
    DEFAULT: () => {
      return { ...state }
    }
  }
  return(actions[action.type] || actions['DEFAULT'])()
}
