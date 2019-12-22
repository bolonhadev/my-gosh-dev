import React from "react"
import { Link } from "gatsby"
import { useSelector } from "react-redux"

import Layout from "../components/layout"
import SEO from "../components/seo"

const SecondPage = () => {
  const useStore = useSelector((store) => store)
  console.log(useStore.welcome.type)
  return (
    <div>
      <h1>{useStore.welcome.type}</h1>
      <Layout>
        <SEO title="Page two" />
        <h1>Hi from the second page</h1>
        <p>Welcome to page 2</p>
        <Link to="/">Go back to the homepage</Link>
      </Layout>
    </div>
  )
}

export default SecondPage
