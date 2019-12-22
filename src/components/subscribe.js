import React from "react"
import { connect } from "react-redux"

// import {WelcomeDispatchContext, WelcomeStateContext} from "../context/WelcomeContextProvider"

const Subscribe = (props) => {
  console.log(props)
  return(
    <>
      <h1>{props.welcome.type}</h1>
       
      <button 
        type="button" 
        onClick={()=>{
          props.dispatch({ 
            type: 'CHANGE_WELCOME_GUEST' 
          })
      }}>
        CHANGE_WELCOME_GUEST
      </button>

      <button type="button" onClick={()=>{
        props.dispatch({ type: 'CHANGE_WELCOME_PENDING' })
      }}>CHANGE_WELCOME_PENDING</button>

      <button type="button" onClick={()=>{
        props.dispatch({ type: 'CHANGE_WELCOME_USER' })
      }}>CHANGE_WELCOME_USER</button>
    </>
  )
}

export default connect(state => ({
  welcome: state.welcome
}), null)(Subscribe)