import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { navigate } from 'gatsby'
// import { useSelector, useDispatch } from 'react-redux'


// import {WelcomeStateContext} from "../context/WelcomeContextProvider"
import './layout.css'

const Layout = ({children, welcome}) => {
  // const state = useContext(WelcomeStateContext)
  console.log('LAYOUTwelcome: ')
  console.log(welcome)
  // const dispatch = useDispatch((store) => store)
  // dispatch({ type: 'CHANGE_WELCOME_SIGNOUT' })
  console.log('vai')
  return (
    <>  
      {/* <h2>{props.welcome.type}</h2> */}
      <h1>Esse é um componente ainda: {welcome.type}</h1>
      <button type="button" onClick={ () => navigate('/page-2/')} role="link" tabIndex="0">oi</button>

        <main>{children}</main>
        <footer>
          © {new Date().getFullYear()}, Built with
          {` `}
        </footer>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

// export default Layout
export default connect(state => ({
  welcome: state.welcome
}), null)(Layout)