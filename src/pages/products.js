import React from "react"
import { graphql } from "gatsby"

const Products = ({ data }) => <pre>{JSON.stringify(data, null, 4)}</pre>

export const query = graphql`
  {
    allContentfulProduct {
      nodes {
        price
        title
        image {
          fluid {
            ...GatsbyContentfulFluid
          }
        }
        slug
      }
    }
  }
`

export default Products
