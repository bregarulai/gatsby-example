import React from "react"
import Layout from "../components/layout/Layout"
import Header from "../components/examples/Header"
import StaticQueryExample from "../components/examples/StaticQueryComponent"
import { graphql } from "gatsby"

const examples = ({ data }) => {
  const {
    site: {
      info: { author },
    },
  } = data
  return (
    <Layout>
      <p>Hello from example page.</p>
      <Header />
      <StaticQueryExample />
      <h5>Author: {author}</h5>
    </Layout>
  )
}

export const data = graphql`
  query pageQuery {
    site {
      info: siteMetadata {
        title
        description
        author
        data
        person {
          name
          age
        }
      }
    }
  }
`

export default examples
