const initialState = {
  my_state_machine: {
    language: "pt",
    translations: {
      TXT_GIRL_EARTH_GONE: {
        msgid: "TXT_GIRL_EARTH_GONE",
        msgstr: "Shit, earth is gone ! Viu..."
      },
      TXT_GIRL_HI: {
        msgid: "TXT_GIRL_HI",
        msgstr: "Hi guys 2"
      },
      TXT_GIRL_LETS_START: {
        msgid: "TXT_GIRL_LETS_START",
        msgstr: "Lets start !"
      }
    }
  }
}

export default function reducer( state = initialState, action){
  const actions = {
    CHANGE_TO_PT_SUCCESS: () => {
      state.my_state_machine.language = 'pt'
      // ChangeLanguage(state.my_state_machine.language)
      console.log(state.my_state_machine.language)
      return { ...state }
    },
    CHANGE_TO_EN_SUCCESS: () => {
      state.my_state_machine.language = 'en'
      console.log(state.my_state_machine.language)
      return { ...state }
    },
    changeLanguageSuccess: () => {
      const { language } = action
      const { translationsObj } = action
      state.my_state_machine.language = language
      state.my_state_machine.translations = translationsObj.translations
      console.log('<<<< changeLanguageSuccess >>>> ')
      console.log(state.my_state_machine.translations)
      return { ...state }
    },
    DEFAULT: () => {
      state.my_state_machine.language = 'pt'
      return { ...state }
    }
  }
  return(actions[action.type] || actions['DEFAULT'])()
}
