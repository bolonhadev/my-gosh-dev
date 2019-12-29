import React from 'react'
import { bindActionCreators } from 'redux'
import { useSelector, useDispatch } from 'react-redux'
import { _ } from 'ttag'
import { t, jt } from 'ttag'

import * as WelcomeActions from '../states/Welcome/actions'
import * as LanguagesActions from '../states/Languages/actions'

const Subscribe = () => {

  const useStore = useSelector((store) => store)
  const dispatch = useDispatch((store) => store)
  const welcomeActions = bindActionCreators(WelcomeActions, dispatch)
  const languagesActions = bindActionCreators(LanguagesActions, dispatch)
  const myBool = useStore.welcome.my_state_machine.guest.guest_is
  const girlString = useStore.welcome.my_state_machine.guest.girl_talk
  const girlSay = useStore.girl.girl_talk.TXT_TALK_NOW
  // const lT = useStore.languages.my_state_machine.translations['']
  const girlExpression = useStore.welcome.my_state_machine.guest.girl_expression
  
  return(
    <>
      <h2>{ jt`Switch lang`}</h2>
      <h2>{ _('Switch lang')}</h2>
      <button type="button" onClick={ ()=>{ languagesActions.changeLanguageRequest('pt',useStore) }}>
        pt
      </button>
      <button type="button" onClick={()=>{ languagesActions.changeLanguageRequest('en',useStore ) }}>
        en
      </button>

      <p>{t`Learn React`}</p>
      <h5>No guest eu ligo e desligo: {myBool}</h5>
      <h5>Meu nível de user é: {girlString}</h5>
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