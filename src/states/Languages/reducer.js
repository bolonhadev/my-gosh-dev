// import '../../components/i18n'
import { addLocale, useLocale } from 'ttag'

export function ChangeLanguage(myLanguage) {
  const translationsObj = require(`../../../i18n/${myLanguage}.po.json`)
  addLocale(myLanguage, translationsObj) // não funciona, retorna undefined
  useLocale(myLanguage) // não funcionca, retorna undefined
  console.log(useLocale())
}

const initialState = {
  my_state_machine: {
    language: "pt"
  }
}

export default function reducer( state = initialState, action){
  const actions = {
    CHANGE_TO_PT: () => {
      state.my_state_machine.language = 'pt'
      ChangeLanguage(state.my_state_machine.language)
      console.log(state.my_state_machine.language)
      return { ...state }
    },
    CHANGE_TO_EN: () => {
      state.my_state_machine.language = 'en'
      ChangeLanguage(state.my_state_machine.language)
      console.log(state.my_state_machine.language)
      return { ...state }
    },
    DEFAULT: () => {
      state.my_state_machine.language = 'pt'
      ChangeLanguage(state.my_state_machine.language)
      return { ...state }
    }
  }
  return(actions[action.type] || actions['DEFAULT'])()
}
