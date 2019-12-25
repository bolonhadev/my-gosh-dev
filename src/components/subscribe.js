import React from "react"
import { connect } from "react-redux"

// import {WelcomeDispatchContext, WelcomeStateContext} from "../context/WelcomeContextProvider"

const Subscribe = (welcome) => {
  console.log('Subswelcome: ')
  console.log(welcome)
  return(
    <>
      {/* <p>{JSON.stringify(welcome.welcome, null, " ")}</p> */}
       
      <h1>Esse é um componente c/ auto bool: {welcome.welcome.guest_is}</h1>
      <h1>Esse é um componente diferente: {welcome.welcome.type}</h1>
      <button 
        type="button" 
        onClick={()=>{
          welcome.dispatch({ 
            type: 'CHANGE_WELCOME_GUEST_X' 
          })
      }}>
        CHANGE_WELCOME_GUEST_X
      </button>


      <button 
        type="button" 
        onClick={()=>{
          welcome.dispatch({ 
            type: 'CHANGE_WELCOME_GUEST' 
          })
      }}>
        CHANGE_WELCOME_GUEST
      </button>

      <button type="button" onClick={()=>{
        welcome.dispatch({ type: 'CHANGE_WELCOME_PENDING' })
      }}>CHANGE_WELCOME_PENDING</button>

      <button type="button" onClick={()=>{
        welcome.dispatch({ type: 'CHANGE_WELCOME_USER' })
      }}>CHANGE_WELCOME_USER</button>
    </>
  )
}
const mapState = state => ({
  welcome: state.welcome
})

export default connect(mapState,null)(Subscribe)