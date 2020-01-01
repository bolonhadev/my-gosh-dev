// import { useDispatch } from 'react-redux'
// import * as WelcomeActions from '../Welcome/actions'
// import { bindActionCreators } from 'redux'

// const dispatch = useDispatch((store) => store)

export function recSessionRequest(paramns){
  return{
    type: 'recSessionRequest',
    paramns
  }
}
export function recSessionSuccess(paramns){
  // const welcomeActions = bindActionCreators(WelcomeActions, dispatch)
  // welcomeActions.CHANGE_WELCOME_PENDING()
  // welcomeActions.TXT_GIRL_EARTH_GONE()
  return{
    type: 'recSessionSuccess',
    paramns,
  }
}
