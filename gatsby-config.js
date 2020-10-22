/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/gatsby-config/
 */

module.exports = {
  /* Your site config here */
  siteMetadata: {
    title: "Gatsby Tutorial",
    description:
      "Trying out Gatsby and exploring some of the features it provides",
    author: "Flavio Aquino",
    data: ["item 1", "item 2", "item 3"],
    person: { name: "Peter", age: 32 },
  },
  plugins: [`gatsby-plugin-styled-components`],
}
