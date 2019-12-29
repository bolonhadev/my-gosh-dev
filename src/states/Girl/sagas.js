import { put, all, takeLatest } from 'redux-saga/effects'
import { changeLanguageRequest } from './actions'

// jt`TXT_GIRL_HI`
// t`TXT_GIRL_EARTH_GONE`
// t`TXT_GIRL_LETS_START`

// function* TXT_GIRL_REQUEST(girlTalk){
//   yield put(changeLanguageRequest(whatLanguage))

//   console.log('MUDAR PARA::: ')
//   console.log(whatLanguage)
// }

export default all([
  takeLatest('changeLanguageRequest',changeLanguage)
])