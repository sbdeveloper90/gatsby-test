module.exports = {
  siteMetadata: {
    title: `gatsby-test`,
    siteUrl: `https://www.yourdomain.tld`
  },
  plugins: ["gatsby-plugin-vanilla-extract", "gatsby-plugin-image", "gatsby-plugin-sharp", "gatsby-transformer-sharp", {
    resolve: 'gatsby-source-filesystem',
    options: {
      "name": "images",
      "path": "./src/images/"
    },
    __key: "images"
  }]
};