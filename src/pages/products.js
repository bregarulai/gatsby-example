import React from "react"
import Layout from "../components/layout/Layout"
import styles from "../components/products.module.css"

const products = () => {
  return (
    <Layout>
      <div className={styles.page}>
        <h1>This is out products page.</h1>
        <p className={styles.text}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum deserunt
          molestias incidunt ullam ipsa adipisci architecto laborum velit minus
          aliquam perspiciatis quo at numquam, quasi excepturi porro quis fuga
          assumenda?
        </p>
      </div>
    </Layout>
  )
}

export default products
