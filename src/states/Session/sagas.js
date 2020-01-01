import { put, all, takeLatest } from 'redux-saga/effects'
// import { useDispatch } from 'react-redux'
// import * as WelcomeActions from '../Welcome/actions'
// import { bindActionCreators } from 'redux'
import { recSessionSuccess } from '../Session/actions'
// import { CHANGE_WELCOME_PENDING } from '../Welcome/actions'
// import { TXT_GIRL_HI } from '../Welcome/actions'

function* runSession(paramns){
  console.log('MUDAR PARA::: ')
  console.log(paramns)
  // const dispatch = useDispatch((store) => store)
  // const welcomeActions = bindActionCreators(WelcomeActions, dispatch)
  // welcomeActions.CHANGE_WELCOME_PENDING()
  // welcomeActions.TXT_GIRL_EARTH_GONE()
  // yield put(TXT_GIRL_HI())
  // yield put(CHANGE_WELCOME_PENDING())
  yield put(recSessionSuccess(paramns))
}

export default all([
  takeLatest('recSessionRequest',runSession)
])