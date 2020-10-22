import React from "react"
import Layout from "../components/layout/Layout"
import styles from "../components/blog.module.css"

const blog = () => {
  return (
    <Layout>
      <div className={styles.page}>
        <h1>This is our blog page.</h1>
        <p className={styles.text}>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deleniti
          provident voluptate ea dolorum mollitia voluptates at nisi assumenda
          similique fugit exercitationem soluta, perferendis odit recusandae
          totam! Ea quia natus quisquam.
        </p>
      </div>
    </Layout>
  )
}

export default blog
