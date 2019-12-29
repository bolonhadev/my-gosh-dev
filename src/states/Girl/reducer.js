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
    TXT_TALK_NOW: () => {
      state.girl_talk.TXT_TALK_NOW = state.girl_talk.TXT_GIRL_HI.msgstr[0]
      return { ...state }
    },
    TXT_GIRL_HI: () => {
      state.girl_talk.TXT_TALK_NOW = state.girl_talk.TXT_GIRL_HI.msgstr[0]
      return { ...state }
    },
    TXT_GIRL_EARTH_GONE: () => {
      state.girl_talk.TXT_TALK_NOW = state.girl_talk.TXT_GIRL_EARTH_GONE.msgstr[0]
      return { ...state }
    },
    TXT_GIRL_LETS_START: () => {
      state.girl_talk.TXT_TALK_NOW = state.girl_talk.TXT_GIRL_LETS_START.msgstr[0]
      return { ...state }
    },
    TXT_GIRL_CHANGE_LANGUAGE: () => {
      // const talkNow = state.girl_talk.TXT_TALK_NOW
      const { language } = action
      state.girl_talk = language.translationsObj.translations['']
      console.log('jsonLanguage >>>> ')
      console.log(state.girl_talk.TXT_TALK_NOW)
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