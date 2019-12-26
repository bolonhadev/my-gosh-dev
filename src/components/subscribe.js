import React from 'react'
import { useSelector, useDispatch } from 'react-redux'

const Subscribe = () => {
  const useStore = useSelector((store) => store)
  const dispatch = useDispatch((store) => store)
  // console.log('Subswelcome: ')
  // console.log(useStore.girl.girl_talk.TXT_TALK_NOW)
  const myBool = useStore.welcome.my_state_machine.guest.guest_is
  const girlString = useStore.welcome.my_state_machine.guest.girl_talk
  const girlSay = useStore.girl.girl_talk.TXT_TALK_NOW
  const girlExpression = useStore.welcome.my_state_machine.guest.girl_expression
  return(
    <>
      {/* <p>{JSON.stringify(useStore, null, " ")}</p> */}
       
      <h5>No guest eu ligo e desligo: {myBool}</h5>
      <h5>Meu nível de user é: {girlString}</h5>
      <h4>Sou a garota dizendo: {girlString}</h4>
      <h3>{girlString} quer dizer: {girlSay}</h3>
      <h5>Minha expressão é a: {girlExpression}</h5>
      
      
      <br />
      <button type="button" onClick={ ()=>{ 
        dispatch({ type: 'CHANGE_WELCOME_PENDING' }) 
        dispatch({ type: 'TXT_GIRL_EARTH_GONE' }) 
      }}>
        Gravou no DB email inserido, então: PENDING
      </button>
      <br />
      <button type="button" onClick={ ()=>{ 
        dispatch({ type: 'CHANGE_WELCOME_USER' }) 
        dispatch({ type: 'TXT_GIRL_LETS_START' }) 
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