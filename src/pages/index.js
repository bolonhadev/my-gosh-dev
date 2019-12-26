import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/layout'
import SEO from '../components/seo'
import Subscribe from '../components/subscribe'

const IndexPage = () => (
  <>
    <Layout>
      <SEO title="Home" />
      <h1>Hi peoplessss</h1>
      <Subscribe></Subscribe>
      <Link to="/page-2/">Go to page 2</Link>
    </Layout>
  </>
)

export default IndexPage
