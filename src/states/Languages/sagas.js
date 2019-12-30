import { put, all, takeLatest } from 'redux-saga/effects'

import { TXT_GIRL_CHANGE_LANGUAGE } from '../Girl/actions'

function* changeLanguage(whatLanguage){
  // console.log('MUDAR PARA::: ')
  // console.log(state)
  yield put(TXT_GIRL_CHANGE_LANGUAGE(whatLanguage))
  // yield put(TXT_GIRL_CHANGE_LANGUAGE(whatLanguage))
}

export default all([
  takeLatest('changeLanguageRequest',changeLanguage)
])