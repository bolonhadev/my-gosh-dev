import { all } from 'redux-saga/effects'

import languages from './Languages/sagas'
import session from './Session/sagas'

export default function* rootSaga(){
  console.log('xxxxx')
  console.log(languages)
  return yield all([
    languages,
    session
  ])
}