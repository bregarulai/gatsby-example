import React from "react"
import { ExampleButton } from "../components/button/Button"
import Layout from "../components/layout/Layout"

export default function Home() {
  return (
    <div>
      <Layout>
        <h1>This is our home page.</h1>
        <ExampleButton>Cool Click</ExampleButton>
      </Layout>
    </div>
  )
}
