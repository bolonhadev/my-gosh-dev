import React from 'react'
import { bindActionCreators } from 'redux'
import { useSelector, useDispatch } from 'react-redux'
import { _ } from 'ttag'
import { t, jt } from 'ttag'

import * as WelcomeActions from '../states/Welcome/actions'
import * as LanguagesActions from '../states/Languages/actions'
import * as SessionActions from '../states/Session/actions'

const Subscribe = () => {

  const useStore = useSelector((store) => store)
  const dispatch = useDispatch((store) => store)
  const welcomeActions = bindActionCreators(WelcomeActions, dispatch)
  const languagesActions = bindActionCreators(LanguagesActions, dispatch)
  const sessionActions = bindActionCreators(SessionActions, dispatch)
  
  const girlSay = useStore.girl.girl_talk.TXT_TALK_NOW
  
  
  console.log('sessionActions')
  console.log(useStore.session)
  const myBool = useStore.welcome.my_state_machine.guest.guest_is
  const userRoleStr = useStore.welcome.my_state_machine.guest.user_role
  const girlString = useStore.welcome.my_state_machine.guest.girl_talk
  // const lT = useStore.languages.my_state_machine.translations['']
  const girlExpression = useStore.welcome.my_state_machine.guest.girl_expression
  
  
  function handleGuestSession (paramn01,paramn02,paramn03){
    welcomeActions.CHANGE_WELCOME_GUEST()
    welcomeActions.TXT_GIRL_HI()
    sessionActions.recSessionSuccess({
      userRole: paramn01, 
      girlTxt: paramn02, 
      language: paramn03
    }) 
  }


  function handlePendingSession (){
    welcomeActions.CHANGE_WELCOME_PENDING()
    welcomeActions.TXT_GIRL_EARTH_GONE()
    sessionActions.recSessionSuccess({
      userRole: 'pending', 
      girlTxt: girlSay, 
      language: 'en'
    }) 
  }

  return(
    <>
      <h2>{ jt`Switch lang`}</h2>
      <h2>{ _('Switch lang')}</h2>
      <button type="button" onClick={ ()=>{handleGuestSession('guest',girlSay,'en')} }>
        Setar sessão Guest
      </button>
      <button type="button" onClick={ ()=>{handlePendingSession()} }>
        Setar sessão Pending
      </button>
      <button type="button" onClick={ ()=>{ sessionActions.recSessionSuccess({userRole: 'guest', girlTxt: girlSay, language: 'en'}) }}>
        Setar sessão
      </button>
      <br /><br />
      <button type="button" onClick={ ()=>{ languagesActions.changeLanguageRequest('pt',useStore) }}>
        pt
      </button>
      <button type="button" onClick={()=>{ languagesActions.changeLanguageRequest('en',useStore ) }}>
        en
      </button>

      <p>{t`Learn React`}</p>
      <h5>No guest eu ligo e desligo: {myBool}</h5>
      <h5>Meu nível de user é: {userRoleStr}</h5>
      <h4>Sou a garota dizendo: {girlString}</h4>
      <h3>{girlString} quer dizer: {girlSay}</h3>
      <h5>Minha expressão é a: {girlExpression}</h5>
      
      
      <br />
      <button type="button" onClick={ ()=>{ 
        welcomeActions.CHANGE_WELCOME_PENDING()
        welcomeActions.TXT_GIRL_EARTH_GONE()
      }}>
        Gravou no DB email inserido, então: PENDING
      </button>
      <br />
      <button type="button" onClick={ ()=>{ 
        welcomeActions.CHANGE_WELCOME_USER()
        welcomeActions.TXT_GIRL_LETS_START()
      }}>
        O email foi confimado, logo: USER
      </button>
      <br />

      <button type="button" onClick={ ()=>{ dispatch({ type: 'CHANGE_WELCOME_SIGNOUT' }) }}>
        SIGNOUT
      </button>
    </>
  )
}

export default (Subscribe)