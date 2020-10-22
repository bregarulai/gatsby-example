import React from "react"
import Layout from "../components/layout/Layout"
import Header from "../components/examples/Header"
import StaticQueryExample from "../components/examples/StaticQueryComponent"

const examples = () => {
  return (
    <Layout>
      <h1>Hello from example page.</h1>
      <Header />
      <StaticQueryExample />
    </Layout>
  )
}

export default examples
