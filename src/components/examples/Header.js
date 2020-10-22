import React from "react"
import { useStaticQuery, graphql } from "gatsby"

const getData = graphql`
  {
    site {
      siteMetadata {
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

const Header = () => {
  const {
    site: {
      siteMetadata: {
        title,
        person: { name },
      },
    },
  } = useStaticQuery(getData)
  return (
    <div>
      {/* <h3>Tittle: {data.site.siteMetadata.title}</h3>
      <h3>Name: {data.site.siteMetadata.person.name}</h3> */}
      <h3>Title: {title}</h3>
      <h3>Name: {name}</h3>
    </div>
  )
}

export default Header
