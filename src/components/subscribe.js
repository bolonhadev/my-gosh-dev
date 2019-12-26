import React from 'react'
import { useSelector, useDispatch } from 'react-redux'

// import {WelcomeDispatchContext, WelcomeStateContext} from "../context/WelcomeContextProvider"

const Subscribe = () => {
  console.log('Subswelcome: ')
  const useStore = useSelector((store) => store)
  const dispatch = useDispatch((store) => store)
  console.log(dispatch)
  return(
    <>
      <p>{JSON.stringify(useStore, null, " ")}</p>
       
      <h1>Estado c/ auto bool: {useStore.welcome.my_state_machine.guest.guest_is}</h1>
      <h1>Esse é um componente diferente: {useStore.welcome.my_state_machine.guest.confimation_is}</h1>
      
      <button type="button" onClick={ ()=>{ dispatch({ type: 'CHANGE_WELCOME_GUEST' }) } }>
        GUEST
      </button>

      <button type="button" onClick={ ()=>{ dispatch({ type: 'CHANGE_WELCOME_PENDING' }) }}>
        PENDING
      </button>

      <button type="button" onClick={ ()=>{ dispatch({ type: 'CHANGE_WELCOME_USER' }) }}>
        USER
      </button>


      <button type="button" onClick={ ()=>{ dispatch({ type: 'CHANGE_WELCOME_SIGNOUT' }) }}>
        SIGNOUT
      </button>
    </>
  )
}

export default (Subscribe)