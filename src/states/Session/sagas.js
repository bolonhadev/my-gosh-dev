import { put, all, takeLatest } from 'redux-saga/effects'

import { recSessionSuccess } from '../Session/actions'

function* runSession(paramns){
  // console.log('MUDAR PARA::: ')
  // console.log(paramns)
  yield put(recSessionSuccess(paramns))
}

export default all([
  takeLatest('recSessionRequest',runSession)
])