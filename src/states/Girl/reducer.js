import { t, jt } from 'ttag'

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
      state.girl_talk.TXT_TALK_NOW = jt`TXT_GIRL_HI`
      return { ...state }
    },
    TXT_GIRL_EARTH_GONE: () => {
      state.girl_talk.TXT_TALK_NOW = t`TXT_GIRL_EARTH_GONE`
      return { ...state }
    },
    TXT_GIRL_LETS_START: () => {
      state.girl_talk.TXT_TALK_NOW = t`TXT_GIRL_LETS_START`
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