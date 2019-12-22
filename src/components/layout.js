import React from "react"
import PropTypes from "prop-types"

// import {WelcomeStateContext} from "../context/WelcomeContextProvider"
import "./layout.css"

const Layout = ({ children }) => {
  // const state = useContext(WelcomeStateContext)
  return (
    <>  
      {/* <h2>{state.welcome}</h2> */}
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

export default Layout
