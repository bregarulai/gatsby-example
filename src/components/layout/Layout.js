import React from "react"
import Footer from "../footer/Footer"
import Navbar from "../navbar/Navbar"
import "./layout.css"

const Layout = ({ children }) => {
  return (
    <>
      <Navbar />
      <main>{children}</main>
      <Footer />
    </>
  )
}

export default Layout
