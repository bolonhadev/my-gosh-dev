import produce from 'immer'

const initialState = {
  my_state_machine: {
    session: {
      userRole: 'CHANGE_WELCOME_GUEST',
      TXT_TALK_NOW: 'TXT_GIRL_HI',
      language: 'pt'
    }
  }
}


export default function reducer( state = initialState, action){
  const actions = {
    recSessionSuccess: () => {
      // state.my_state_machine.session = {}
      
      console.log('<<<< SESSIOOONNN >>>> ')
      // console.log(state)
      
      return produce(state, draft => {
        state.my_state_machine.session = {}
        state.my_state_machine.session.userRole = action.paramns.userRole
        state.my_state_machine.session.TXT_TALK_NOW = action.paramns.girlTxt
        state.my_state_machine.session.language = action.paramns.language
        
        console.log(action.paramns)
      })
    },
    DEFAULT: () => {
      return { ...state }
    }
  }
  return(actions[action.type] || actions['DEFAULT'])()
}
